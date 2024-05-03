from fastapi import FastAPI, HTTPException, UploadFile, File
from pydantic import BaseModel
import tensorflow as tf
import numpy as np
import keras
# Load the TensorFlow model
model = keras.layers.TFSMLayer('./Mo/Model', call_endpoint='serving_default')

# Create FastAPI app
app = FastAPI()

# Define the output data schema
class Prediction(BaseModel):
    sentiment: int

# Define API endpoint for sentiment prediction
@app.post("/predict", response_model=Prediction)
async def predict(image_file: UploadFile = File(...)):
    try:
        # Load and preprocess the image
        contents = await image_file.read()
        image_data = tf.image.decode_jpeg(contents, channels=3)
        image_data = tf.image.resize(image_data, [224, 224])
        image_data = tf.expand_dims(image_data, axis=0)

        # Perform inference
        predictions = model(image_data)
        predicted_sentiment = np.argmax(predictions)

        # Return the prediction
        return {"sentiment": int(predicted_sentiment)}
    except Exception as e:
        # In case of any errors, return an HTTP 500 error
        raise HTTPException(status_code=500, detail=str(e))

# Run the API server
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)

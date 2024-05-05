from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import numpy as np
import torch

from BTC.Dlinear import Model
from BTC.Dlinear import Configs

# Load the PyTorch model
model = Model(Configs())
model.load_state_dict(torch.load(r'model_BTC_weights.pth'))
model.eval()  # Set model to evaluation mode

# Create FastAPI app
app = FastAPI()

# Define the input data schema
class InputData(BaseModel):
    sequence: list[float]

# Define the output data schema
class Prediction(BaseModel):
    predictions: list[float]

# Define API endpoint for predicting the next 10 values
@app.post("/predict", response_model=Prediction)
async def predict(data: InputData):
    try:
        print('hello')
        # Extract the input sequence from the request data
        input_sequence = data.sequence
        print(input_sequence)
        # Convert the input sequence to a PyTorch tensor
        input_tensor = torch.tensor(input_sequence, dtype=torch.float).unsqueeze(0)  # Add batch dimension
        print(input_tensor.reshape(1, input_tensor.shape[1], 1).shape)
        input_tensor = input_tensor.reshape(1, input_tensor.shape[1], 1)
        # Perform inference to get predictions for the next 10 values
        with torch.no_grad():
            predictions = model(input_tensor)
        print(predictions)
        # Convert predictions to a list
        predictions_list = predictions.squeeze().tolist()
        
        # Return the predicted values
        return {"predictions": predictions_list}
    except Exception as e:
        # In case of any errors, return an HTTP 500 error
        raise HTTPException(status_code=500, detail=str(e))

# Run the API server
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)

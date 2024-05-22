from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import torch
import pickle
import os
import logging
import pandas as pd
from BTC.Dlinear import Model
from BTC.Dlinear import Configs

# Create FastAPI app
app = FastAPI()

# Configure logging
logging.basicConfig(level=logging.DEBUG)  # Set logging level to DEBUG
configs = Configs()
model = Model(configs.input_size, configs.hidden_size, configs.num_stacked_layers)
# Define the input data schema
class InputData(BaseModel):
    coin: str
    close: list[float]

# Define the output data schema
class Prediction(BaseModel):
    predictions: list[float]

# Define API endpoint for predicting the next values
@app.post("/predict", response_model=Prediction)
async def predict(data: InputData):
    try:
        logging.info("Received POST request to /predict")
        # Extract the input coin symbol and sequence from the request data
        coin = data.coin
        input_sequence = data.close
        print(coin)
        # Load the PyTorch model
        try:
            model_path = f'C:/YoussefENSI_backup/Auto-Investor/trial/Auto-Investor/Model/Final_impl/{coin}/weights_model.pth'
        except Exception as e:
            print("Error loading model:", e)

        print('hello')
        print('model',model)
        model.load_state_dict(torch.load(model_path), strict=False)
        model.eval()  # Set model to evaluation mode
        print('model loaded and ready to predict')
        # Load the scaler
        scaler_path = rf"Final_impl\{coin}\scaler.pkl"
        with open(scaler_path, 'rb') as f:
            scaler = pickle.load(f)
        
        # Define columns
        columns = ['close'] + [f'Close(t-{i})' for i in range(1, 31)]

        # Create list of values
        values = [0] + input_sequence

        # Create DataFrame
        df = pd.DataFrame([values], columns=columns)

        # Scale the input sequence
        scaled_input_sequence = scaler.transform(df)
        logging.info(f'Model loaded and ready to predict{scaled_input_sequence}')

        # Convert the scaled input sequence to a PyTorch tensor
        input_tensor = torch.tensor(scaled_input_sequence[0, 1:], dtype=torch.float).view(1, 30, 1)
        logging.debug(f'Model loaded and ready to predict{input_tensor.shape}')
        # Perform inference to get predictions for the next values
        with torch.no_grad():
            predictions = model(input_tensor)
        
        # Convert predictions to a list
        predictions_list = predictions.squeeze().tolist()
        logging.debug(f'predictions_list {predictions_list}')
        # Inverse scale the predictions
        # Create DataFrame with predicted values in the 'close' column
        df = pd.DataFrame(predictions_list, columns=['close'])

        # Create DataFrame for historical data with columns Close(t-1) to Close(t-30)
        num_rows = 10  # Specify the number of rows you want
        historical_df = pd.DataFrame(0, columns=[f'Close(t-{i})' for i in range(1, 31)], index=range(num_rows))


        # Concatenate the two DataFrames along axis 1 (columns)
        result_df = pd.concat([df, historical_df], axis=1)

        # Print the resulting DataFrame
        print(result_df)
        # Reverse the scaling transformation for the predicted values
        predicted_values_original_scale = scaler.inverse_transform(result_df)
        logging.debug(f'predictions_list {predicted_values_original_scale.shape}')

        # Get the first 10 values from each list within predictions_list
        # first_10_predictions = [ for prediction in predictions_list]
        preds= predicted_values_original_scale[:,0].tolist()
        logging.debug(f'predictions_list {preds}')



        
        # Return the predicted values
        return {"predictions": preds}
    except Exception as e:
        # In case of any errors, return an HTTP 500 error
        print('error')
        raise HTTPException(status_code=500, detail=str(e))

# Run the API server
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)

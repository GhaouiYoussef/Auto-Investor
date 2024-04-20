import pickle
from sklearn.linear_model import LinearRegression

# Assume lr_model is the trained linear regression model

# Define the file path to save the model
model_filename = r"C:\YoussefENSI_backup\Auto-Investor\trial\Auto-Investor\Model\AAVE\AAVE_lr_model.pkl"

### Loading the Linear Regression Model

# Load the linear regression model from the file
with open(model_filename, 'rb') as file:
    loaded_lr_model = pickle.load(file)

print("Linear regression model loaded successfully.")

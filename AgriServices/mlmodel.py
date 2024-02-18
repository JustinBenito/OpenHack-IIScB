# Importing necessary libraries
import joblib
from fastapi import FastAPI
from pydantic import BaseModel
import pandas as pd

# Load the trained Random Forest model
model = joblib.load("decision_tree_model.joblib")

# Create FastAPI instance
app = FastAPI()

# Define input data model
class CropInput(BaseModel):
    N: float
    P: float
    K: float
    temperature: float
    humidity: float
    ph: float
    rainfall: float

# Define endpoint to receive input data and return result
@app.post("/predict_crop")
async def predict_crop(data: CropInput):
    # Convert input data to DataFrame
    input_data = [[data.N, data.P, data.K, data.temperature, data.humidity, data.ph, data.rainfall]]
    input_df = pd.DataFrame(input_data, columns=['N', 'P', 'K', 'temperature', 'humidity', 'ph', 'rainfall'])
    
    # Make prediction
    prediction = model.predict(input_df)
    
    # Return prediction
    return {"predicted_crop": prediction[0]}

@app.get("/test")
def test():
    return {"res":"hi"}
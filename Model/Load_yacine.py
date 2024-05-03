import tensorflow as tf
from tensorflow import keras
import numpy as np
# Load the SavedModel using TFSMLayer
model = keras.layers.TFSMLayer('./Mo/Model', call_endpoint='serving_default')
print(model)

# Load and preprocess the image
image_path = './bx.jpg'
image = tf.io.read_file(image_path)
image = tf.io.decode_jpeg(image, channels=3)  # Decode JPEG image with 3 channels
image = tf.image.resize(image, [224, 224])  # Resize the image to [224, 224]
image = tf.expand_dims(image, axis=0)  # Add batch dimension

print(image.shape)  # Check the shape of the preprocessed image

# Perform inference
predictions = model(image)
print(predictions)  # Output the predictions
print(np.argmax(predictions))  # Output the predictions



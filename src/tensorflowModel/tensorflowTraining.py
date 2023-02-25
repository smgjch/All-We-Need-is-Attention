import numpy as np
import tensorflow as tf
import matplotlib.pyplot as plt

# import data
from tensorflow.keras.datasets import mnist
(X_train, y_train), (X_test, y_test) = mnist.load_data()


X_train_flattened = X_train.reshape(X_train.shape[0], 28*28)
X_test_flattened = X_test.reshape(X_test.shape[0], 28*28)

# normalise the images
X_train_flattened = X_train_flattened/255
X_test_flattened = X_test_flattened/255

from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense

model = Sequential([
    # Dense(256, activation=tf.nn.relu),
    Dense(128, activation=tf.nn.relu),
    Dense(10, activation=tf.nn.softmax)
])

# compile the model
model.compile(optimizer='adam',
              loss='sparse_categorical_crossentropy',
              metrics=['accuracy']
)

# Fit the model
model.fit(x=X_train_flattened, y=y_train, epochs=15)

model.evaluate(X_test_flattened, y_test)

image_index = np.random.randint(0, 10000)
plt.imshow(X_test[image_index].reshape(28, 28),cmap='Greys')
pred = model.predict(X_test[image_index].reshape(1, 28 * 28))
print('Predicted Value:', pred.argmax())


# reshape inputs for CNN
X_train_reshaped = X_train.reshape(X_train.shape[0], 28, 28, 1)/255
X_test_reshaped = X_test.reshape(X_test.shape[0], 28, 28, 1)/255


# Convolutional Neural Network
from tensorflow.keras.layers import Conv2D, Flatten, MaxPooling2D

model_CNN = Sequential([
    Conv2D(28, kernel_size=(3,3), input_shape=(28, 28, 1)),
    MaxPooling2D(pool_size=(2,2)),
    Flatten(),
    Dense(128, activation=tf.nn.relu),
    Dense(10, activation=tf.nn.softmax)
])

# compile the model
model_CNN.compile(optimizer='adam',
                  loss='sparse_categorical_crossentropy',
                  metrics=['accuracy'])

# train model
model_CNN.fit(x=X_train_reshaped, y=y_train, epochs=5)

# evaluate model
model_CNN.evaluate(X_test_reshaped, y_test)

image_index = np.random.randint(0, 10000)
plt.imshow(X_test[image_index].reshape(28, 28),cmap='Greys')
pred = model_CNN.predict(X_test[image_index].reshape(1, 28, 28, 1))
print('Predicted Value:', pred.argmax())
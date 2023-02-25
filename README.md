# All We Need is Attention
This project serves as an aid that teachers can use when teaching online, by training a deep learning model to identify how well students are paying attention during online instruction and alerting teachers when students are losing focus. In future plans, the project will also be able to generate reports on changes in attention at the end of instruction to help teachers to improve delivering.

Note: Because of the limited time, the attention recognition temporarily implemented via AWS for demonstration purposes.


# Set Up
Trian the tensorflow model with customized dataset by replace the code in ./src/tensorflowModel/tensorflowTraining.py line 6

or

Use API provided by AWS:


Install Boto3
Install the latest Boto3 release via pip:


Install the latest OpenCV release via pip:
pip install opencv-contrib-python


Set up the AWS CLI and AWS SDKs through:
https://docs.aws.amazon.com/rekognition/latest/dg/getting-started.html


Set up authentication credentials for your AWS account using either the IAM Console or the AWS CLI:
https://boto3.amazonaws.com/v1/documentation/api/latest/guide/quickstart.html


# Attention Evaluation
For picture:
python src/main.py

For video:
python src/FrameSlicer/main.py
python src/main.py

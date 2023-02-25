import boto3

client = boto3.client('rekognition')


with open('./data/testSmile.jpg', 'rb') as image_file:
    # 将图像发送到Amazon Rekognition进行分析
    response = client.detect_faces(Image={'Bytes': image_file.read()},Attributes=['ALL'])

for i in response:
    print(response)
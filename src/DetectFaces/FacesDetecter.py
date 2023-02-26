import boto3


class FaceDetecter:
    def __init__(self) -> None:
        
        self.client = boto3.client('rekognition')
        self.response = None
    
    def get_response(self,image_path):
        with open('./data/eyeClosed.jpg', 'rb') as image_file:
        # image = Image(image_path).read_image()
            self.response = self.client.detect_faces(Image={'Bytes': image_file.read()},Attributes=['ALL'])
        return self.response
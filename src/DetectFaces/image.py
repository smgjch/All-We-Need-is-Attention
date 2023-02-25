class Image:
    def __init__(self,path) -> None:
        self.path = path

    def read_image(self):
        with open('./data/testSmile.jpg', 'rb') as image_file:
            return image_file

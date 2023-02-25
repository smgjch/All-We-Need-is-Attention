import cv2

class Video:
    def __init__(self,path) -> None:
        self.path = path

    def read_video(self):
        cap = cv2.VideoCapture('video.mp4')
        return cap
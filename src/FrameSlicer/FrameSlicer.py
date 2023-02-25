import time
import cv2
from FrameSlicer.video import Video

class Slicer:
    def __init__(self,video_path) -> None:
        self.video = Video(video_path).read_video()
        self.count = 0
        
    def slice(self,time_interval = 180):
        interval = time_interval
        
        while self.video.isOpened():

            ret, frame = self.video.read()
            
            if ret:

                if count == interval:
                    cv2.imwrite(f'frame_{time.time()}.jpg', frame)
                    count = 0
                

                count += 1
                

                if cv2.waitKey(10) & 0xFF == ord('q'):
                    break
            else:
                break


        self.video.release()
        cv2.destroyAllWindows()


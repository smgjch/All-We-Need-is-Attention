import json

class Weight:
    EYES_OPEN_WEIGHT = 0.5
    EMOTIONS_WEIGHT = 0.1
    SMILE_WEIGHT = 0.1
    POSE_WEIGHT = 0.3

class AttentionEvaluator():


    def __init__(self, path= "example.json") -> None:
        self.result = 0
        json_to_read = open(path, 'r')
        self.data = json.load(json_to_read)
        json_to_read.close()

    def eyes_open(self):
        return 1 if self.data["FaceDetails"][0]["EyesOpen"]["Value"] == True else -1
    
    def emotions(self):
        return -1 if self.data["FaceDetails"][0]["Emotions"][0]["Confidence"] >= 90 else 0 # if you are listenting now way you will be so happy
    
    def smile(self):
        return 1 if self.data["FaceDetails"][0]["Smile"]["Value"] == True else 0
    
    def pose(self):
        '''
        To be designed.
        
        '''
        return 0
    
    def calc(self):
        return self.emotions() * Weight.EMOTIONS_WEIGHT + self.eyes_open()* Weight.EYES_OPEN_WEIGHT + self.smile() * Weight.SMILE_WEIGHT + self.pose() * Weight.POSE_WEIGHT


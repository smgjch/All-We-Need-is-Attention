from DetectFaces.FacesDetecter import FaceDetecter
from DetectFaces.resultToLocal import ToJson
from Evaluater.AttentionEvaluator import AttentionEvaluator



def main(path):
    Detector = FaceDetecter()
    respond = Detector.get_response(path)
    ToJson(respond).toJson()
    Evaluator = AttentionEvaluator().calc()
    print(Evaluator)



main("./data/eyeClosed.jpg")

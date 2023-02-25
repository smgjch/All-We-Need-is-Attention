from FacesDetecter import FaceDetecter
from resultToLocal import ToJson
from ..Evaluator.AttentionEvaluator import AttentionEvaluator



def main(path):
    Detector = FaceDetecter()
    respond = Detector.get_response(path)
    jsonFile = ToJson(respond).toJson()
    Evaluator = AttentionEvaluator().calc()
    print(Evaluator)



main("./data/testSmile.jpg")

import json


class ToJson():
    def __init__(self,data) -> None:
        self.json_data = json.dumps(data)

    def toJson(self):
        with open('example.json', 'w') as file:
            file.write(self.json_data)
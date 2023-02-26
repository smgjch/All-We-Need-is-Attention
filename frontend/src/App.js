import logo from "./logo.svg";
import React from "react";
import axios from "axios";

import "./App.css";
import example from "./example.json";
import Button from "@mui/material/Button";
import { Container, Box, Grid, TextField, FormControl } from "@mui/material";
import { styled } from "@mui/material/styles";

function getData(dummyData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(dummyData), 100);
  });
}

// I don't understand what how this evaluator works, all I did was translating the evaluator code from python to JavaScript
function attentionEvaluator(rawData) {
  const weights = {
    EYES_OPEN_WEIGHT: 0.5,
    EMOTIONS_WEIGHT: 0.1,
    SMILE_WEIGHT: 0.1,
    POSE_WEIGHT: 0.3,
  };
  const eyes_open = rawData.FaceDetails[0].EyesOpen.Value ? 1 : -1;
  const emotions = rawData.FaceDetails[0].Emotions[0].Confidence >= 90 ? -1 : 0;
  const smile = rawData.FaceDetails[0].Smile.Value ? 1 : 0;
  const pose = 0;
  //  return self.emotions() * Weight.EMOTIONS_WEIGHT + self.eyes_open()* Weight.EYES_OPEN_WEIGHT + self.smile() * Weight.SMILE_WEIGHT + self.pose() * Weight.POSE_WEIGHT
  const calc =
    emotions * weights.EMOTIONS_WEIGHT +
    eyes_open * weights.EYES_OPEN_WEIGHT +
    smile * weights.SMILE_WEIGHT +
    pose * weights.POSE_WEIGHT;
  return calc;
}

function App() {
  const fileUploadToBackEndWithFormData = async (formData) => {
    try {
      console.log("call API here");
    } catch (e) {
      console.log(e);
    }
  };

  const fileUploadToBackEndWithPathString = async (pathString) => {
    try {
      // comment out following line if user defined path string is to be used instead
      pathString = "frontend/public/example.jpeg";
      console.log("call API here");
      // we won't have a backend API, dummy data used instead
      // const res = axios.post("backendAPIURL",{path:pathString});
      const res = await getData(example);
      setResults(attentionEvaluator(res));
    } catch (e) {
      console.log(e);
    }
  };

  const Input = styled("input")({
    display: "none",
  });

  const [selectedFile, setSelectedFile] = React.useState(null);
  const [image, setImage] = React.useState(null);
  const [results, setResults] = React.useState(0);

  const onFileChange = (e) => {
    setResults(0);
    setSelectedFile(e.target.files[0]);
    setImage(URL.createObjectURL(e.target.files[0]));
  };
  const onFileUpload = async () => {
    // comment and uncomment depending on whether form data is to be sent or the path string, (path string because file is in local, and backend API won't be implemented)
    // const formData = new FormData();
    // formData.append('file', selectedFile, selectedFile.name);
    // await fileUploadToBackEndWithFormData(formData);
    const pathString = selectedFile.pathString;
    await fileUploadToBackEndWithPathString(pathString);
  };
  const fileData = () => {
    if (selectedFile) {
      return (
        <div>
          <p>File Name: {selectedFile.name}</p>
          <p>File Type: {selectedFile.type}</p>
          <img src={image} width="500" alt="The current file" />
        </div>
      );
    }
  };

  return (
    <>
      <Container maxWidth="lg" style={{ marginTop: "50px" }}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <label htmlFor="choose-file-button">
              <Input
                id="choose-file-button"
                type="file"
                onChange={onFileChange}
              />
              <Button variant="contained" component="span">
                Choose File
              </Button>
            </label>

            {fileData()}
            {selectedFile && (
              <Button
                variant="contained"
                sx={{ position: "inherit", right: "10%", bottom: "10%" }}
                onClick={onFileUpload}
              >
                Upload
              </Button>
            )}
          </Grid>
          <Grid item xs={4} style={{ position: "relative", height: "100%" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              {results !== 0 && <h1>{results * 100}%</h1>}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default App;

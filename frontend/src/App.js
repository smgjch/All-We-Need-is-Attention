import logo from "./logo.svg";
import React from "react";
import axios from "axios";

import "./App.css";

import Button from "@mui/material/Button";
// import { Container, Box, Grid, TextField, FormControl } from "@mui/material";
import { styled } from "@mui/material/styles";

function App() {
  const fileUploadToBackEnd = async (formData) => {
    try {
      console.log("call API here");
    } catch (e) {
      console.log(e);
    }
  };

  const Input = styled("input")({
    display: "none",
  });

  const [selectedFile, setSelectedFile] = React.useState(null);
  const [image, setImage] = React.useState(null);

    const onFileChange = (e) => {
      setSelectedFile(e.target.files[0]);
      setImage(URL.createObjectURL(e.target.files[0]));
  }
  const onFileUpload = async () => {
      const formData = new FormData();
      formData.append('file', selectedFile, selectedFile.name);
      await fileUploadToBackEnd(formData);
  }
  const fileData = () => {
    if (selectedFile) {
        return (
            <div>
                <p>File Name: {selectedFile.name}</p>
                <p>File Type: {selectedFile.type}</p>
                <img src={image}  width="500"  alt="The current file" />
            </div>
        )
    }
  }

  return (
    <>
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
        // <Grid component="span" item m={3}>
          <Button
            variant="contained"
            sx={{ position: "inherit", right: "10%", bottom: "10%" }}
            onClick={onFileUpload}
          >
            Upload
          </Button>
        // </Grid>
      )}
    </>
  );
}

export default App;

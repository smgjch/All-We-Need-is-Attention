import logo from "./logo.svg";
import React from "react";
import axios from "axios";

import "./App.css";

// import Button from "@mui/material/Button";
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

    const onFileChange = (e) => {
      setSelectedFile(e.target.files[0]);
  }
  const onFileUpload = async () => {
      const formData = new FormData();
      formData.append('file', selectedFile, selectedFile.name);
      // POST request here
      await fileUploadToBackEnd(formData);
  }
  const fileData = () => {
    if (selectedFile) {
        return (
            <div>
                <p>File Name: {selectedFile.name}</p>
                <p>File Type: {selectedFile.type}</p>

            </div>
        )
    }
  }

  return (
    <>
      <label htmlFor="choose-file-button">
        <input
          id="choose-file-button"
          type="file"
          onChange={onFileChange}
        />
        <button variant="contained" component="span">
          Choose File
        </button>
      </label>
      {fileData()}
      {selectedFile && (
        // <Grid component="span" item m={3}>
          <button
            variant="contained"
            sx={{ position: "inherit", right: "10%", bottom: "10%" }}
            onClick={onFileUpload}
          >
            Upload
          </button>
        // </Grid>
      )}
    </>
  );
}

export default App;

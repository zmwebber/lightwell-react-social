import React, { useState, useEffect } from 'react';
import { addMedia, getMedia } from '../../api/MediaApi';
import { Media } from "../../models/MediaModel";

export default function MediaComponent() {
  let x = new Media();
  const [mediaProps, setMediaProps] = useState<Media>(x);
  const [preview, setPreview] = useState("");
  const fileReader = new FileReader();

  function addListeners() {
    fileReader.addEventListener("loadend", handleComplete);
    fileReader.addEventListener("error", handleComplete);
  }

  function handleComplete(event: any) {
    if (event.type === "loadend") {
      if(fileReader.result)
      {
        let stringResult = fileReader.result.toString();
        let b64 = btoa(stringResult);
        console.log("Result: " + stringResult)
        console.log("Base64: "+ b64)
        x.data = b64;
      }
      
    }
    else if (event.type === "error") {
      x.data = "Error.";
    }

    setMediaProps(x);
    console.log(mediaProps);
  }

  function handleChange(event: any) {
    const file = event.target.files[0];

    if (file) {
      addListeners();
      convertImgToBinary(file);

      x.fileName = file.name;
      x.contentType = file.type;
      x.createdAt = file.lastModifiedDate;
    }
  }

  function handleSubmit(event: any) {
    event.preventDefault();

    addMedia(mediaProps).then(() => {
      alert("Media Uploaded! ")
    });

  }

  function convertImgToBinary(file: any) {
    fileReader.readAsBinaryString(file)
  }

  function loadPreview(){
    
    getMedia().then((res) => {
      let length  = res.data.media.length -1;
      let buf = res.data.media[length].data
      //need to replace the static image/png with the correct mime/type from the res.data.media[x].contentType
      let src = 'data:image/png;base64,' + buf;

      console.log(src);
      setPreview(buf);
    });
  }
  return (
    <>
      <div>
        <button onClick={loadPreview}> Click for Preview Latest Upload</button>
        <img src={"data:image/png;base64," + preview} width="300px" height="auto" alt="preview"/>
      </div>
      <form onSubmit={handleSubmit}>
        <label className="form-label" htmlFor="customFile"></label>
        <input type="file" onChange={handleChange} className="form-control" id="customFile" accept="image/*" />
        <input type="submit" value="Submit" />
        
      </form>
    </>
  );
}

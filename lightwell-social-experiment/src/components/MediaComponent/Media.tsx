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

  function handleComplete(event: any){
    console.log(event + "Event")
    
    if( event.type === "loadend"){
      console.log("Complete! Res = "+ fileReader.result)
      x.data = fileReader.result; 
             
    }
    else if (event.type === "error")   
    {
      x.data = "Error";
    }  
    setMediaProps(x);

      console.log("Props: " + JSON.stringify(mediaProps));
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
    console.log("Change Happened");

  }

  function handleSubmit(event: any) {
    addMedia(mediaProps);
  }

  function convertImgToBinary(file: any){
    fileReader.readAsBinaryString(file)  
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label className="form-label" htmlFor="customFile"></label>
        <input type="file" onChange={handleChange} className="form-control" id="customFile" accept="image/*" />
        <input type="submit" value="Submit" />
        <img src={preview} alt="preview"></img>

      </form>
    </>
  );
}

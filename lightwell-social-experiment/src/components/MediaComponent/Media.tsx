import { useState } from 'react';
import { addMedia } from '../../api/MediaApi';
import { Media } from "../../models/MediaModel";

export default function MediaComponent(props: any) {
  let x = new Media();
  const [mediaProps, setMediaProps] = useState<Media>(x);
  const fileReader = new FileReader();

  function addListeners() {
    fileReader.addEventListener("loadend", handleComplete);
    fileReader.addEventListener("error", handleComplete);
  }

  function handleComplete(event: any) {
    if (event.type === "loadend") {
      if (fileReader.result) {
        let stringResult = fileReader.result.toString();
        let b64 = btoa(stringResult);
        console.log("Result: " + stringResult)
        console.log("Base64: " + b64)
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

  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label className="form-label" htmlFor="customFile"></label>
        <input type="file" onChange={handleChange} className="form-control" id="customFile" accept="image/*" />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

import React, { useState, useEffect } from 'react';
import { addMedia, getMedia } from '../../api/MediaApi';


export default function Media() {
  const [mediaProps, setMediaProps]= useState("");

  const [mediaData, setMediaData] = useState<any>();
  const [preview, setPreview] = useState("");

  function handleChange(event: any) {
    console.log(event.target.files[0])
    const file = event.target.files[0];
    
    if ( file)
    {
      convertImgToBinary(file)
    }
    setPreview(URL.createObjectURL(event.target.files[0]))
    console.log(preview)
    setMediaProps(event.target.files[0])


  }
  function convertImgToBinary(file: any )
  {
    const reader = new FileReader();
    reader.onload = () => {
      console.log("Image Binary: " + reader.result)
      // persist data 
      setMediaData(reader.result);
    }
    reader.readAsBinaryString(file)
  }
  function handleSubmit(event: any) {
    event.preventDefault();
    // new Media  - add constructor in your model
    //let x = new Media;
    //map props 
    
//     Media = {
//     _id?: string | null,
//     data: Buffer,
//     fileName: String,
//     contentType: String,
//     createdAt: Date,
// }
//x.data = media
//x.fileName = mediaProps
    //call API function
    //addMedia(x)
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

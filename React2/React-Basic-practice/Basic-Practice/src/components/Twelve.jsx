import React, { useState } from "react";

export default function Twelve(props) {
  const [file, setFile] = useState(null);

  const handleFile = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };

  return (
    <>
      <input type="file" onChange={handleFile} />
      {file && (
        <iframe src={URL.createObjectURL(file)} width="100%" height="500px" />
      )}
    </>
  );
}

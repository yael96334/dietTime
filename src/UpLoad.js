import React from "react";

import SinglePagePDFViewer from "./SinglePagePDFViewer";
import samplePDF from "./sample.pdf";

import "./styles.css";

export default function Upload() {
  const [pdf, setPdf] = React.useState(samplePDF);

  return (
    <div className="App">
      <input
        type="file"
        onChange={(e) => {
          const file = e.target.files[0];
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => {
            setPdf(reader.result);
          };
        }}
      />

      <h4>Single Page</h4>
      <SinglePagePDFViewer pdf={pdf.replace('data:application/pdf;base64,','')} />

      {/* <hr />

     
      <hr />

      <h4>Base 64 Single Page</h4>
       <SinglePagePDFViewer pdf={pdf} />

      <hr /> */}
    </div>
  );
}

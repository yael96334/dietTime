import SinglePagePDFViewer from "./SinglePagePDFViewer";
import samplePDF from "./sample.pdf";
import React, { useState } from "react";

export default function PdfImg() {
    const [pdf, setPdf] = useState(samplePDF);

    return (
        <>
            <input
                type="file"
                accept="application/pdf"
                onChange={(e) => {
                    const file = e.target.files[0];
                    const reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.onload = () => {
                        setPdf(reader.result);
                    }
                }} />
            < h4 > Single Page</h4>
            <SinglePagePDFViewer pdf={pdf} />
            <hr />
        </>
    )

}
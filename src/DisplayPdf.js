// import React, { Component, Fragment } from 'react'
// import { render } from 'react-dom'
// import { Document, Page } from 'react-pdf'

// import { pdfjs } from 'react-pdf'
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${
//   pdfjs.version
// }/pdf.worker.js`

// const samplePDF =
//   'https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf'

// const anotherSamplePdf =
//   'https://tetra4d.com/wp-content/uploads/2018/12/PartList-Helico.pdf'

// class App extends Component {
//   state = {
//     numPages: null,
//     fileUrl: samplePDF
//   }

//   onDocumentLoadSuccess = document => {
//     const { numPages } = document
//     this.setState({
//       numPages
//     })
//   }

//   handleUrlChange = () => {
//     const { fileUrl } = this.state
//     const newUrl = fileUrl === samplePDF ? anotherSamplePdf : samplePDF
//     this.setState({
//       fileUrl: newUrl
//     })
//   }

//   render() {
//     const { numPages, fileUrl } = this.state

//     return (
//       <Fragment>
//         <button onClick={this.handleUrlChange}>Toggle PDF URL</button>
//         <Document
//           // key={fileUrl} // optional, doesn't affect things
//           file={fileUrl}
//           onLoadSuccess={this.onDocumentLoadSuccess}
//         >
//           {Array.from(new Array(numPages), (el, index) => (
//             <Page
//               key={`page_${index + 1}`}
//               pageNumber={index + 1}
//               width={600}
//             />
//           ))}
//         </Document>
//       </Fragment>
//     )
//   }
// }

// const rootElement = document.getElementById('root')
// render(<App />, rootElement)

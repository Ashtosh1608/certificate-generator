import React, {useRef, useState} from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import CertificatePage from "../certificatePage/CertificatePage";
import natural from "./natural.jpg"
// import ReportTemplate from "./PDFViewer";

// import { useRef } from "react"



const PdfConvert = () => {

    const reportTemplateRef = useRef(null);
    // const [image, setImage] = useState({ preview: '', data: '' })
    const [image, setImage] = useState(null)
    const [status, setStatus] = useState('')


    const handleFileChange = (e) => {
      const img = {
        preview: URL.createObjectURL(e.target.files[0]),
        data: e.target.files[0],
      }
      setImage(img)
      console.log("img is :: ", img)
    }
    
    // let ppddff;

     const handleGeneratePdf = async() => {
        const input = reportTemplateRef.current;

        try{
            const canvas = await html2canvas(input);
            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF({
                orientation : "portrait",
                unit: "px",
                format: "a4"
            });

            const width = pdf.internal.pageSize.getWidth();
            const height = (canvas.height* width)/canvas.width;

            pdf.addImage(imgData, "PNG", 0, 0, width, height);
            // const pd = pdf.path;
            // console.log("img is :: ", pdf.save("docc.pdf"))
            // pdf.save("document.pdf");
            // const ppddff = pdf;

            
            // setImage(pdf);

            // <img src="document.pdf" alt="" />



        


            let formData = new FormData()
            formData.append('file', "./natural.jpg")
            const response = await fetch('http://localhost:5000/upload', {
              method: 'POST',
              body: formData
            })
            if (response) setStatus(response.statusText)


        }
        catch (error){
            console.error("Error generating PDF", error);
        }
     }
  return (
    // <div>PdfConvert</div>
    <>
    <button className="button" onChange={handleFileChange}  onClick= {handleGeneratePdf}>Generate PDF</button>
    <div ref={reportTemplateRef}>
        {/* <reportTemplate/> */}
        <CertificatePage/>
    </div>
    {status && <h4>{status}</h4>}
    {/* <img src={ppddff} alt="" /> */}
    </>
  )
}

export default PdfConvert
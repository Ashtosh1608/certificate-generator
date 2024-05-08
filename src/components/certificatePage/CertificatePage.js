import React from 'react'
import tdc from "../../asset/temp_tdc.jpg"
import "./Certificatepage.css"

const CertificatePage = (props) => {
    return (
        <>

            <div>
                <p className='name'>Ashtosh kumar </p>
                {/* <p className='name'>{props.name}</p> */}
                <p className='course-name'>For successfully completing the tutedude Python </p>
                <p className='date'>course on 03/05/2024 </p>

                <img className='image-tdc' src={tdc} alt="" />
            </div>
        </>
    )
}

export default CertificatePage
import React, { useState } from 'react'
import QRCode from "react-qr-code"

const QrCode = () => {
    const [ qrCode, setQrCode ] = useState('')
    const [input, setInpute] = useState('')

    const generateQrCode = () =>{
        setQrCode(input)
        setInpute('')
    }

  return (
    <div>
        <h1>Qr Code Ggenerator</h1>

        <div style={{margin: "20px"}}>
            <input 
             onChange={ (e) => setInpute(e.target.value)}
             type="text" 
             placeholder='Enter your value'
             value={input}
            />
            <button 
            onClick={generateQrCode}
            disabled = {input && input.trim() !== '' ? false : true}>
                Generate
            </button>
        </div>

        <div>
            <QRCode
            id = "qr-code-value"
            value = {qrCode}
            size = {300}
            bgColor = "#fff"
            />
        </div>
    </div>
  )
}

export default QrCode
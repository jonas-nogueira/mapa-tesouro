import React, { useState } from 'react';

import QrReader from 'react-qr-reader';

export default function App() {
  const [QRCodeData, setQRCodeData] = useState(null);
  return (
    <div className="app-container">
      <QrReader
        delay={500}
        onError={(error) => alert(error)}
        onScan={(data) => {
          if (data !== null) {
            setQRCodeData(data);
          }
        }}
        className="qr-image-wrapper"
      />
      <div className="qr-code-result-container">
        {QRCodeData}
      </div>
    </div>
  );
}

import React, { useState } from "react";
import QrReader from "react-qr-scanner";
// import axios from "axios";
import { Box } from "@mui/system";

const QrScanner = () => {
  // const [scanResultsWebcame, setScanResultsWebcame] = useState("");
  const [scanResult, setScanResult] = useState(null);
  // const [scanStatus, setScanStatus] = useState("");

  // const handleScan = async (result) => {
  //   if (result && result.text) {
  //     setScanResultsWebcame(result.text);

  //     try {
  //       const response = await axios.post("/check_qr_code", {
  //         scan_result: result.text,
  //       });

  //       const { status } = response.data;
  //       setScanStatus(status);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  // };

  const handleScan = (data) => {
    if (data) {
      // setScanResult(data);
      checkQRCode(data);
    }
  };

  const handleError = (error) => {
    console.log(error);
  };

  const checkQRCode = async (scanResult) => {
    try {
      const response = await fetch("http://localhost:8000/check_qr_code", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: { id: scanResult.text },
      });
      const data = await response.json();
      setScanResult(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Box height={100} />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          <h1>Scan Here !!</h1>
          <QrReader
            delay={300}
            onError={handleError}
            onScan={handleScan}
            style={{ height: "310px", width: "210px" }}
          />
          {scanResult && (
            <div>
              {scanResult.status === "present" ? (
                <div>
                  <p>Status: Present</p>
                  <p>Name: {scanResult.name}</p>
                </div>
              ) : (
                <p>Status: Not Present</p>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default QrScanner;

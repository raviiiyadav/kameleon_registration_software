import { Box } from "@mui/system";
import React from "react";

const Home = () => {
  return (
    <>
      <Box height={100} />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          <h1>Welcome to Kameleon Technologies !!</h1>
          {/* <br /> */}
          <img
            src="https://media.licdn.com/dms/image/C560BAQH5e-4oCP6MFw/company-logo_200_200/0/1679264196029?e=2147483647&v=beta&t=46DkEhAi4WfH9V0x3lD2JdOq_pPalAX3eVTcc9C-V5Y"
            alt="ddfddd"
          />
        </div>
      </div>
    </>
  );
};

export default Home;

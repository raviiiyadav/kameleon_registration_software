import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const Footer = () => {
  return (
    <AppBar position="fixed" color="primary" sx={{ top: "auto", bottom: 0 }}>
      <Toolbar sx={{ justifyContent: "center" }}>
        <Typography variant="body1" color="inherit">
          All rights reserved @kamaleon Tech
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;

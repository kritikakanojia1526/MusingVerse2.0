"use client";

import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

export default function Navbar() {
  return (
    <>
      <AppBar elevation={2} >
        <Toolbar sx={{ justifyContent: "space-between", minHeight: 64 }}>
          <Box sx={{ display: "flex", alignItems: "center", mr: 2 }}>
            <img
              src="/images/logo.png"
              alt="MusingVerse"
              style={{ height: 40, marginRight: 8 }}
            />
            <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>MusingVerse</Typography>
          </Box>

          <Box display="flex" gap={3}>
            <Button color="inherit">Home</Button>
            <Button color="inherit">About</Button>
            <Button color="inherit">Contact</Button>
            <Button variant="outlined" color="info">Login</Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* ✅ Spacer so scroll starts AFTER navbar */}
      <Box sx={{ height: 64 }} />
    </>
  );
}



// api-key: 
//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
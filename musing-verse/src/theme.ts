import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#C89B6D", // gold button
    },
    background: {
      default: "#f6f1ed", // warm beige background
      paper: "#ffffff",
    },
    text: {
      primary: "#2b2b2b",
      secondary: "#6f6f6f",
    },
  },
  shape: {
    borderRadius: 16,
  },
  typography: {
    fontFamily: "Inter, sans-serif",
    h4: {
      fontWeight: 700,
    },
  },
});

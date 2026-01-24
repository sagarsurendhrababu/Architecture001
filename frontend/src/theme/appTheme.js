import { createTheme } from "@mui/material/styles";

const appTheme = createTheme({
  palette: { 
    primary: {
        main: "#2696e0",
        dark: "#1b56a3",
    },
    secondary: {
        main: "#2da05d",
    },
    background: {
        default: "#f5f5f5",
        paper: "#ffffff",
    },
    text: {
        primary: "#000000",
        secondary: "#555555",
    },
    },
    typography: {
         fontFamily: "Inter, sans-serif",
        h1: {
            fontSize: '2.5rem',
            fontWeight: 700,
        },
        h2: {
            fontSize: '2rem',
            fontWeight: 700,
        },  
        body1: {
            fontSize: '1rem',
        },
    },    
});

export default appTheme;
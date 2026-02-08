import { Container, Stack, Typography } from "@mui/material";
import YouTubeIcon from '@mui/icons-material/YouTube';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import EmailIcon from '@mui/icons-material/Email';
import Instagram from '@mui/icons-material/Instagram';

export function Footer() {
  return (
    <footer
      style={{
        textAlign: "center",
        padding: "1rem",
        marginTop: "2rem",
        borderTop: "1px solid #e0e0e0",
        color: "#6f6f6f",
      }}
    >
      © {new Date().getFullYear()} MusingVerse. All rights reserved.
      {/*  */}
    </footer>
  );
}
{/* <Container maxWidth="sm">
          <Stack direction="row" spacing={2} alignItems="center" sx={{ color: 'white' }}>
            <Typography variant="body1" >
              © 2026 MusingVerse
            </Typography>
            {/* <Typography variant="body2">
              Made with love
            </Typography> 
            <Typography variant="body2">
              {<YouTubeIcon />}
            </Typography>
            <Typography variant="body2">
              {<Instagram />}
            </Typography>
            <Typography variant="body2">
              {<EmailIcon />}
            </Typography>
            <Typography variant="body2">
              Feedback
            </Typography>
            <Typography variant="body2">
              Terms & Privacy
            </Typography>
          </Stack>
        </Container> */}
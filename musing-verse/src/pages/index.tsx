import {
  Box,
  Container,
  Card,
  CardContent,
  Typography,
  Button,
  MenuItem,
  TextField,
  Stack,
} from "@mui/material";

import UploadBox from "../component/UplodBox";
import Navbar from "@/component/Navbar";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import CheckroomOutlinedIcon from "@mui/icons-material/CheckroomOutlined";
import React from "react";
import { Footer } from "@/component/Footer";


export default function HomePage() {
  const [imageUrl, setImageUrl] = React.useState<string>(
    'fashion-ai.jpg'
  );
  return (
    <>
      <Navbar />

      <Container sx={{ mt: 10, mb: 10 }} >
        <Typography variant="h4" gutterBottom>
          Welcome to The Musing Verse ✨
        </Typography>

        <Typography color="text.secondary" mb={6}>
          Your one-stop destination for your personality and outfit design powered by AI.
        </Typography>

        <Stack direction={{ xs: "column", md: "row" }} spacing={4}>
          {/* LEFT CARD */}
          <Box flex={1}>
            <Card
              elevation={0}
              sx={{
                borderRadius: 4,
                boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Typography fontWeight={600} mb={3}>
                  Get started by filling in the details below:
                </Typography>

                <Stack spacing={3}>
                  <TextField select label="Select Your Age" fullWidth>
                    <MenuItem value="below18">below 18</MenuItem>
                    <MenuItem value="18-30">18 – 30</MenuItem>
                    <MenuItem value="30+">30+</MenuItem>
                  </TextField>

                  <TextField select label="Select Your Style" fullWidth>
                    <MenuItem value="casual">Casual</MenuItem>
                    <MenuItem value="formal">Formal</MenuItem>
                    <MenuItem value="streetwear">Streetwear</MenuItem>
                  </TextField>

                  <TextField select label="Select Your Skin Tone" fullWidth>
                    <MenuItem value="fair">Fair</MenuItem>
                    <MenuItem value="medium">Medium</MenuItem>
                    <MenuItem value="dark">Dark</MenuItem>
                  </TextField>

                  <UploadBox />

                  <Button
                    size="large"
                    variant="contained"
                    sx={{ mt: 2, py: 1.5, fontWeight: 600 }}
                    fullWidth
                  >
                    Generate My Outfit
                  </Button>
                </Stack>
              </CardContent>
            </Card>
          </Box>
          {/* RIGHT CARD */}
          <Box flex={1}>
            <Card
              elevation={0}
              sx={{
                borderRadius: 4,
                background: "#ffffff",
                boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Typography fontWeight={600} mb={2} fontSize={18}>
                  How it works
                </Typography>

                {/* MAIN IMAGE */}
                <Box
                  component="img"
                  src="/images/fashion-ai.jpg"
                  alt="AI fashion styling"
                  sx={{
                    width: "100%",
                    borderRadius: 3,
                    mb: 4,
                  }}
                />

                {/* STEPS */}
                <Stack spacing={0}>
                  {/* Step 1 */}
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Box
                      sx={{
                        width: 42,
                        height: 42,
                        borderRadius: "50%",
                        backgroundColor: "#f3e8dd",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <CloudUploadOutlinedIcon sx={{ color: "#C89B6D" }} />
                    </Box>

                    <Box>
                      <Typography fontWeight={600}>Upload Your Clothes</Typography>
                      <Typography variant="body2" color="text.secondary">
                        JPG, PNG
                      </Typography>

                    </Box>
                  </Stack>

                  {/* Step 2 */}
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Box
                      sx={{
                        width: 42,
                        height: 42,
                        borderRadius: "50%",
                        backgroundColor: "#f3e8dd",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <TuneOutlinedIcon sx={{ color: "#C89B6D" }} />
                    </Box>

                    <Box>
                      <Typography fontWeight={600}>Enter Your Preferences</Typography>
                    </Box>
                  </Stack>

                  {/* Step 3 */}
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Box
                      sx={{
                        width: 42,
                        height: 42,
                        borderRadius: "50%",
                        backgroundColor: "#f3e8dd",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <CheckroomOutlinedIcon sx={{ color: "#C89B6D" }} />
                    </Box>

                    <Box>
                      <Typography fontWeight={600}>Get Outfit Recommendations</Typography>
                    </Box>
                  </Stack>

                  {/* Step 4 */}
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Box
                      sx={{
                        width: 42,
                        height: 42,
                        borderRadius: "50%",
                        backgroundColor: "#f3e8dd",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <AutoAwesomeOutlinedIcon sx={{ color: "#C89B6D" }} />
                    </Box>

                    <Box>
                      <Typography fontWeight={600}>AI Styled Outfit</Typography>
                    </Box>
                  </Stack>
                </Stack>
              </CardContent>
            </Card>
          </Box>
        </Stack>
      </Container>
      <Footer />
    </>
  );
}

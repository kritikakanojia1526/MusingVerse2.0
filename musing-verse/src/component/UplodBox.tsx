"use client";

import { Box, Typography } from "@mui/material";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import { useRef, useState } from "react";

export default function UploadBox() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [files, setFiles] = useState<File[]>([]);

  const handleFiles = (fileList: FileList | null) => {
    if (!fileList) return;

    const incomingFiles = Array.from(fileList);

    setFiles((prevFiles) => {
      const combined = [...prevFiles, ...incomingFiles];
      return combined.slice(0, 5);
    });
  };

  return (
    <>
      <input
        ref={inputRef}
        type="file"
        multiple
        accept="image/png, image/jpeg"
        hidden
        onChange={(e) => handleFiles(e.target.files)}
      />

      <Box
        onClick={() => inputRef.current?.click()}
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={(e) => {
          e.preventDefault();
          setIsDragging(false);
          handleFiles(e.dataTransfer.files);
        }}
        sx={{
          border: "2px dashed",
          borderColor: isDragging ? "primary.main" : "#d6cfc9",
          borderRadius: 3,
          p: 3,
          textAlign: "center",
          bgcolor: "#faf7f3",
          cursor: "pointer",
        }}
      >
        <CloudUploadOutlinedIcon sx={{ fontSize: 42, color: "primary.main" }} />

        <Typography fontWeight={600} mt={1}>
          Upload up to 5 clothing items
        </Typography>

        <Typography variant="body2" color="text.secondary">
          Drag & drop clothes here, or click to upload
        </Typography>

        {files.length > 0 && (
          <Box mt={2}>
            {files.map((file, index) => (
              <Typography key={index} variant="caption" display="block">
                📄 {file.name}
              </Typography>
            ))}
          </Box>
        )}
      </Box>
    </>
  );
}

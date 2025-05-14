import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import Link from "next/link";
import LottieAnimation404 from "./LottieAnimation404";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hilir | 404",
  description: "Oops! Page not found.",
};

const NotFoundPage = () => {
  return (
    <Box>
      <Stack
        sx={{
          height: "100vh",
          backgroundColor: "#f0f4f8",
          textAlign: "center",
        }}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <LottieAnimation404 />
        <Typography variant="h5" sx={{ mb: 2, color: "#616161" }}>
          Oops! Page not found.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          href="/dashboard"
        >
          Go Back to Dashboard
        </Button>
      </Stack>
    </Box>
  );
};

export default NotFoundPage;

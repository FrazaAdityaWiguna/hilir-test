import type { Metadata } from "next";
import "../cssReset.css";
import "../globals.css";

import { Box, Stack } from "@mui/material";
import MainHeader from "@/components/header/MainHeader";
import MainNavigation from "@/components/navigation/MainNavigation";
import MobileNavigation from "@/components/navigation/MobileNavigation";

export const metadata: Metadata = {
  title: "Hilir | Dashboard",
  description: "Ad Performance Monitoring Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <MainHeader />

      <Stack direction="row">
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <MainNavigation />
        </Box>

        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <MobileNavigation />
        </Box>

        {children}
      </Stack>
    </>
  );
}

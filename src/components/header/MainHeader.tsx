"use client";

import { Stack, Box, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useLayout } from "@/context/LayoutContext";
import { useCallback } from "react";
import Image from "next/image";

export default function MainHeader() {
  const { dispatch } = useLayout();

  const handleClickIconMenu = useCallback(() => {
    dispatch({ type: "TOGGLE_NAV" });
  }, [dispatch]);

  return (
    <Box>
      <Stack
        component={"div"}
        sx={{ p: "15px 35px" }}
        direction={"row"}
        spacing={2}
        alignItems={"center"}
      >
        <IconButton
          onClick={handleClickIconMenu}
          sx={{ display: { sx: "block", md: "none" } }}
        >
          <MenuIcon sx={{ fontSize: "24px" }} />
        </IconButton>

        <Box>
          <Image
            src="/logo-hilir.png"
            alt="Logo"
            width={70}
            height={30}
            priority
          />
        </Box>
      </Stack>
    </Box>
  );
}

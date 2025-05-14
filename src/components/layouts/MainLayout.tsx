import React, { type FC, type ReactNode } from "react";
import { Box } from "@mui/material";

interface MainLayoutType {
  children: ReactNode;
}

const MainLayout: FC<MainLayoutType> = ({ children }) => {
  return (
    <Box
      sx={{
        p: "32px",
        bgcolor: "#FAFBFC",
        width: "100%",
        minHeight: "85vh",
        borderTopLeftRadius: "10px",
        overflow: "auto",
      }}
    >
      {children}
    </Box>
  );
};

export default MainLayout;

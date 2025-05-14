"use client";

import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  Drawer,
  ListItemText,
  Stack,
} from "@mui/material";
import { useLayout } from "@/context/LayoutContext";
import { menus } from "./menus";
import { useRouter } from "next/navigation";
import { MenuItem } from "@/type/data";
import Image from "next/image";

import CloseIcon from "@mui/icons-material/Close";

const MobileNavigation = () => {
  const router = useRouter();
  const { state, dispatch } = useLayout();

  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (menu: MenuItem) => {
    setSelectedIndex(menu.id);
    router.push("/dashboard");
    dispatch({ type: "TOGGLE_NAV" });
  };

  return (
    <Drawer
      open={state.isNavOpen}
      onClose={() => dispatch({ type: "TOGGLE_NAV" })}
      sx={{
        width: state.isNavOpen ? 240 : 0,
        flexShrink: 0,
        transition: "width 0.3s",
        "& .MuiDrawer-paper": {
          width: 240,
          boxSizing: "border-box",
        },
      }}
    >
      <Box sx={{ width: 240 }}>
        <Stack
          sx={{ p: "16px", mb: 2 }}
          direction={"row"}
          spacing={2}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Image
            src="/logo-hilir.png"
            alt="Logo"
            width={70}
            height={30}
            priority
          />

          <Box
            component={"span"}
            onClick={() => dispatch({ type: "TOGGLE_NAV" })}
          >
            <CloseIcon />
          </Box>
        </Stack>

        <List>
          {menus &&
            menus.map((menu) => (
              <ListItem disablePadding key={menu.id}>
                <ListItemButton
                  selected={selectedIndex === menu.id}
                  onClick={() => handleListItemClick(menu)}
                >
                  <Box sx={{ mr: "24px" }}>{menu.icon}</Box>
                  <ListItemText
                    sx={{ fontWeight: 600, fontSize: "18px" }}
                    primary={menu.name}
                  />
                </ListItemButton>
              </ListItem>
            ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default MobileNavigation;

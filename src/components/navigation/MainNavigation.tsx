"use client";

import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { menus } from "./menus";
import type { MenuItem } from "@/type/data";

const MainNavigation = () => {
  const router = useRouter();

  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (menu: MenuItem) => {
    setSelectedIndex(menu.id);
    router.push(menu.url);
  };

  return (
    <Box sx={{ width: "300px", height: "100%" }}>
      <nav aria-label="main navigation">
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
      </nav>
    </Box>
  );
};

export default MainNavigation;

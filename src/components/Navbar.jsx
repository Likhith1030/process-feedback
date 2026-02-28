import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Paper,
  MenuList,
  MenuItem,
  Container
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const navItems = [
  {
    label: "Student Tools",
    items: [
      "Start Writing",
      "Start Coding",
      "Google Docs Extension",
      "Canvas Extension",
      "All Extensions",
      "Student Guides"
    ]
  },
  {
    label: "Teacher Tools",
    items: ["Rubrics", "Feedback", "Analytics"]
  },
  {
    label: "Institutions",
    items: ["Partnerships", "Case Studies"]
  },
  {
    label: "About",
    items: ["Company", "Contact"]
  }
];

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: "#86AED4",
        paddingY: 1
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              color: "#1f2d3d",
              cursor: "pointer"
            }}
          >
            Process Feedback
          </Typography>

          <Box sx={{ display: "flex", gap: 4, position: "relative" }}>
            <Button
              sx={{ color: "#1f2d3d", textTransform: "none", fontWeight: 500 }}
            >
              Home
            </Button>

            {navItems.map((item, index) => (
              <Box
                key={item.label}
                onMouseEnter={() => setActiveMenu(index)}
                onMouseLeave={() => setActiveMenu(null)}
                sx={{ position: "relative" }}
              >
                <Button
                  endIcon={<ExpandMoreIcon />}
                  sx={{
                    color: "#1f2d3d",
                    textTransform: "none",
                    fontWeight: 500
                  }}
                >
                  {item.label}
                </Button>

                {activeMenu === index && (
                  <Paper
                    elevation={3}
                    sx={{
                      position: "absolute",
                      top: "100%",
                      left: 0,
                      mt: 1,
                      minWidth: 240,
                      borderRadius: 3,
                      backgroundColor: "#BFD3EA",
                      paddingY: 1
                    }}
                  >
                    <MenuList>
                      {item.items.map((subItem) => (
                        <MenuItem
                          key={subItem}
                          sx={{
                            fontSize: 18,
                            paddingY: 1.5,
                            paddingX: 3,
                            "&:hover": {
                              backgroundColor: "rgba(0,0,0,0.05)"
                            }
                          }}
                        >
                          {subItem}
                        </MenuItem>
                      ))}
                    </MenuList>
                  </Paper>
                )}
              </Box>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
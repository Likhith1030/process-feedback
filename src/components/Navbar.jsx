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
        backgroundColor: "#88c0f9",
        height: 80,
        justifyContent: "center"
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          {/* Logo + tagline */}
          <Box sx={{ display: "flex", flexDirection: "column", ml:6 }}>
            <Typography
              sx={{
                fontSize: 24,
                fontWeight: 700,
                color: "#243447",
                lineHeight: 1.2
              }}
            >
              Process Feedback
            </Typography>
            <Typography
              sx={{
                fontSize: 14,
                color: "#243447",
                opacity: 0.8
              }}
            >
              Every Student's Work Has a Story
            </Typography>
          </Box>

          {/* Nav Links */}
          <Box sx={{ display: "flex", gap: 1,mr:20 }}>
            {/* home button */}
            <Button
              sx={{
                fontSize: 16,
                fontWeight: 700,
                color: "#305674",
                textTransform: "none",
                "&:hover": {
                    backgroundColor: "#DAE8FE",
                    borderRadius: 3
                    }
              }}
            >
              Home
            </Button>

            {navItems.map((item, index) => (
              <Box
                key={item.label}
                onMouseEnter={() => setActiveMenu(index)}
                onMouseLeave={() => setActiveMenu(null)}
                sx={{ position: "relative", "&:hover": {
                              backgroundColor: "#DAE8FE",
                              borderRadius: 3,

                            } }}
              >
                {/* rest of the buttons */}
                <Button
                  endIcon={<ExpandMoreIcon sx={{ fontSize: 22 }} />}
                  sx={{
                    fontSize: 16,
                    fontWeight: 700,
                    color: "#305674",
                    textTransform: "none"
                  }}
                >
                  {item.label}
                </Button>

                {activeMenu === index && (
                  <Paper
                    elevation={0}
                    sx={{
                      position: "absolute",
                      top: "100%",
                      left: 0,
                      mt: 2,
                      minWidth: 40,
                      borderRadius: 4,
                      backgroundColor: "#DAE8FE",
                      border: "1px solid #5E9BFF",
                      boxShadow: "0 8px 24px rgba(0,0,0,0.15)"
                    }}
                  >
                    <MenuList sx={{ paddingY: 1 }}>
                      {item.items.map((subItem) => (
                        <MenuItem
                          key={subItem}
                          sx={{
                            fontSize: 16,
                            paddingY: 1,
                            paddingX: 3,
                            borderRadius: 3,
                            color: "#3B4A5A",
                            "&:hover": {
                              backgroundColor: "#ffffff"
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
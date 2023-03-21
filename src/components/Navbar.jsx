import React from "react";
import { Stack } from "@mui/system";
import { Link } from "react-router-dom";
import { Logo } from "../assets";
import { Box, Paper } from "@mui/material";

const Navbar = () => {
    return (
        <Stack
            direction="row"
            justifyContent="space-around"
            sx={{
                gap: { sm: "122px", xs: "40px" },
                marginTop: { sm: "32px", xs: "20px" },
                display: "flex",
                alignItems: "center",
                justifyContent: { lg: "start", xs: "center" },
                px: "20px",
                marginLeft: {sm:"50px", xs:"0"}
            }}
        >
            <Box sx={{ display: { lg: "block", xs: "none" } }}>
                <Link to="/">
                    <img
                        src={Logo}
                        alt="Logo"
                        style={{
                            width: "48px",
                            height: "48px",
                            margin: "0 20px 0 30px",
                        }}
                    />
                </Link>
            </Box>

            <Stack
                direction="row"
                gap="40px"
                fontSize="24px"
                alignItems="flex-end"
                sx={{ ml: { lg: "0", xs: "20px" } }}
            >
                <Link
                    to="/"
                    style={{
                        textDecoration: "none",
                        color: "#3A1212",
                        // borderBottom: "3px solid #a2634c",
                    }}
                >
                    Home
                </Link>
                <Box sx={{ display: { lg: "none", xs: "block" } }}>
                    <Link to="/">
                        <img
                            src={Logo}
                            alt="Logo"
                            style={{
                                width: "48px",
                                height: "48px",
                                margin: "0 20px 0 25px",
                            }}
                        />
                    </Link>
                </Box>
                <a
                    href="#exercises"
                    style={{ textDecoration: "none", color: "#3A1212" }}
                >
                    Exercises
                </a>
            </Stack>
        </Stack>
    );
};

export default Navbar;

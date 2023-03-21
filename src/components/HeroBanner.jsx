import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";

import { Banner } from "../assets";

const HeroBanner = () => {
    return (
        <Box
            sx={{
                mt: { lg: "212px", xs: "70px" },
                ml: { sm: "50px" },
                display:"flex",
                flexDirection:"column",
                alignItems: { lg: "start", xs: "center" },
                textAlign: {lg:'left', xs:"center"}
            }}
            position="relative"
            p="20px"
        >
            <Typography color="#a2634c" fontWeight="680" fontSize="26px">
                Fitness Advisor
            </Typography>
            <Typography
                fontWeight={700}
                sx={{ fontSize: { lg: "44px", xs: "40px" } }}
                mb="23px"
                mt="30px"
            >
                Push, Grind <br /> and Transform.
            </Typography>
            <Typography fontSize="22px" lineHeight="35px" mb={3}>
                Check out the most effective exercises
            </Typography>
            <Button
                variant="contained"
                href="#exercises"
                sx={{ backgroundColor: "#a2634c", padding: "10px", width:"250px", textAlign:"center" }}
                mb={4}
            >
                Explore Exercises
            </Button>

            <img src={Banner} alt="hero-Banner" className="hero-banner-img" />
        </Box>
    );
};

export default HeroBanner;

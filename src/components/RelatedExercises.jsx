import React from "react";
import { Typography, Box, Stack } from "@mui/material";

import HorizontalScrollbar from "./HorizontalScrollbar";
import Loader from "./Loader";

const RelatedExercises = ({ targetMuscleExercises, equipmentExercises }) => (
    <Box sx={{ marginTop: { lg: "100px", xs: "20px" } }}>
        <Typography
            sx={{
                fontSize: { lg: "44px", xs: "25px" },
                ml: "20px",
                textAlign: { lg: "left", xs: "center" },
            }}
            fontWeight={700}
            color="#000"
            mb="33px"
            mt="50px"
        >
            Similar{" "}
            <span style={{ color: "#a2634c", textTransform: "capitalize" }}>
                Target Muscle
            </span>{" "}
            exercises
        </Typography>
        <Stack direction="row" sx={{ p: 2, position: "relative" }}>
            {targetMuscleExercises.length !== 0 ? (
                <HorizontalScrollbar data={targetMuscleExercises} />
            ) : (
                <Loader />
            )}
        </Stack>
        <Typography
            sx={{
                fontSize: { lg: "44px", xs: "25px" },
                ml: "20px",
                textAlign: { lg: "left", xs: "center" },
            }}
            fontWeight={700}
            color="#000"
            mb="33px"
            mt="50px"
        >
            Similar{" "}
            <span style={{ color: "#a2634c", textTransform: "capitalize" }}>
                Equipment
            </span>{" "}
            exercises
        </Typography>
        <Stack direction="row" sx={{ p: 2, position: "relative" }}>
            {equipmentExercises.length !== 0 ? (
                <HorizontalScrollbar data={equipmentExercises} />
            ) : (
                <Loader />
            )}
        </Stack>
    </Box>
);

export default RelatedExercises;

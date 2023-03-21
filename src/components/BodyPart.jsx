import React from "react";
import { Stack, Typography } from "@mui/material";
import { Gym } from "../assets";

const BodyPart = ({ item, setBodyPart, bodyPart }) => (
    <Stack
        type="button"
        alignItems="center"
        justifyContent="center"
        className="bodyPart-card"
        sx={
            bodyPart === item
                ? {
                      borderTop: "4px solid #a2634c",
                      background: "#fff",
                      borderBottomLeftRadius: "20px",
                      width: "270px",
                      height: "282px",
                      cursor: "pointer",
                      gap: "47px",
                  }
                : {
                      background: "#fff",
                      borderBottomLeftRadius: "20px",
                      width: "270px",
                      height: "282px",
                      cursor: "pointer",
                      gap: "47px",
                  }
        }
        onClick={() => {
            setBodyPart(item);
            window.scrollTo({ top: 1200, behavior: "smooth" });
        }}
    >
        <img
            src={Gym}
            alt="dumbbell"
            style={{ width: "40px", height: "40px" }}
        />
        <Typography
            fontSize="24px"
            fontWeight="bold"
            fontFamily="Alegreya"
            color="#3A1212"
            textTransform="capitalize"
        >
            {" "}
            {item}
        </Typography>
    </Stack>
);

export default BodyPart;

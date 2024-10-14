import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Copyright = () => {
    return ( <
        Typography variant = "subtitle1"
        color = "text.secondary" >
        Copyright© 2024 { " " } <
        Link to = "/"
        color = "inherit" >
        Ben 's Social <
        /Link> <
        /Typography>
    );
};

export default Copyright;

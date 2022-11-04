import { Link as RouterLink } from "react-router-dom";
import { Box } from "@mui/material";
import logoImg from "../CoderSchoolLogo.png";

function Logo({ disabledLink = false }) {
    const logo = (
        <Box sx={{ width: 40, height: 40 }}>
            <img src={logoImg} alt="logo" width="100%" />
        </Box>
    );

    if (disabledLink) {
        return <>{logo}</>;
    }

    return <RouterLink to="/">{logo}</RouterLink>;
}

export default Logo;

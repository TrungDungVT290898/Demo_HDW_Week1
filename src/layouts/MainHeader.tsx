import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";


import useAuth from "../hooks/useAuth";
import { Button } from "@mui/material";
import Logo from "../components/Logo";

function MainHeader() {
    const { user, logout } = useAuth();

    return (
        <Box>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <Logo disabledLink={true} />
                    </IconButton>
                    <Typography variant="h6" color="inherit" component="div">
                        Book Store
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Typography variant="h6" color="inherit" component="div">
                        Welcome {user}!
                    </Typography>
                    <Button onClick={s => logout()} sx={{ color: "white", borderColor: "white", paddingLeft: 2 }}>Log out</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default MainHeader;

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme, styled } from '@mui/material/styles';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
export default function BookingDashboardNav() {
    const theme = createTheme({
        typography: {
            h3: {
                fontFamily: 'Montserrat',
                fontStyle: "normal",
                fontWeight: 500,
                fontSize: "26.238px",
                lineHeight: "32px",
                color: "#5E5873",
            },
        },
    });
    const ColorButton = styled(Button)(({ theme }) => ({
        background: "#62A5FF",
        borderRadius: "26.238px",
        fontFamily: 'Poppins',
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: "14px",
        lineHeight: "21px",
        textAlign: "center",
        letterSpacing: "0.4px",
        color: "#FFFFFF",
        textTransform: "none",
        mawWidth: "239.15px",
        maxHeight: "44.87px",
    }));

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <ThemeProvider theme={theme}>
                        <Typography variant="h3" component="div" sx={{ flexGrow: 1 }} >
                            Dashboard
                        </Typography>
                    </ThemeProvider>

                    <ColorButton variant="contained" startIcon={<AddCircleOutlineIcon />}>
                        Publier une annonce
                    </ColorButton>

                </Toolbar>
            </AppBar>
        </Box>
    );
}
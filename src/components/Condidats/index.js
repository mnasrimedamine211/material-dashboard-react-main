import * as React from 'react';
import { styled, ThemeProvider, createTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Avatar,
  CardHeader,
  IconButton,
} from '@mui/material';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import { condidatsTable } from "../../assets/utils/Condidats.js"
import "./Condidats.css"
export default function Condidats() {
  const condidats = condidatsTable;
  //style of button 
  const ColorButton = styled(Button)(({ theme }) => ({
    background: "#62A5FF",
    borderRadius: "5.46625px",
    fontFamily: 'Poppins',
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "14px",
    lineHeight: "21px",
    textAlign: "center",
    letterSpacing: "0.4px",
    color: "#FFFFFF",
    textTransform: "none",
    mawWidth: "173.83px",
    maxHeight: "26.75px",
    margin: "0 0 0 auto"
  }));
  //style of title card 
  const themeCardTitle = createTheme({
    typography: {
      h3: {
        fontFamily: 'Montserrat',
        fontStyle: "normal",
        fontWeight: 600,
        fontSize: "26.238px",
        lineHeight: "32px",
        color: "#5E5873",
      },
    },
  });
  //style of sub header card
  const themeCardSubheader = createTheme({
    typography: {
      h6: {
        fontFamily: 'Poppins',
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: "15.3055px",
        lineHeight: "23px",
        color: "#6E6B7B",

      },
    },
  });
  return (
    <div className='Condidats'>
      <h3 className='title'> Condidats</h3>
      <Grid container spacing={0} position="relative">
        {condidats && condidats.map((element, index) => (
          <Grid item xs={3}>
            <Card sx={{ display: 'flex', flexDirection: 'column', maxWidth: 320 }}
              style={{ border: "none", boxShadow: "none" }}>
              <CardHeader
                avatar={
                  <Avatar
                    style={{
                      margin: "10px",
                      background: "#F4F9FE",
                      border: '1px solid #62A5FF',
                    }}>
                    <IconButton>
                      <PeopleAltOutlinedIcon style={{ color: '#62A5FF' }} />
                    </IconButton>
                  </Avatar>
                }
                title={
                  <ThemeProvider theme={themeCardTitle}>
                    <Typography variant="h3" component="div" sx={{ flexGrow: 1 }} >
                      {element.nombre}
                    </Typography>
                  </ThemeProvider>
                }
                subheader={
                  <ThemeProvider theme={themeCardSubheader}>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} >
                      {element.title}
                    </Typography>
                  </ThemeProvider>
                }
              />
              <CardContent>
              </CardContent>
              <CardActions>
                <ColorButton>Voir les candidatures</ColorButton>
              </CardActions>
            </Card>
          </Grid>
        ))
        }
      </Grid>
    </div>
  );
}

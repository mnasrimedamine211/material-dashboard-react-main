import * as React from 'react';
import { annoncesTable } from 'assets/utils/Annonces';
import rightFlashIcon from "../../../../../assets//images/icons/AnnoncesIcons/rightFlashIcon.svg"
import "./Annonces.css"

export default function Annonces() {
    // get static data from utils 
    let annonces = annoncesTable;
    return (
        <div className='Annonces'>
            <label className='titre'>
                Annonces
            </label>
            {annonces && annonces.length > 0 &&
                annonces.map((element, index) => (
                    <div key={index} className='AnnonceContainer'>
                        <img src={element.icon} />
                        <div className='StatusContainer' >
                            <span className='nombre'>
                                {element.nombre}
                            </span>
                            <span className='status'>
                                {element.status}
                            </span>
                        </div>
                        <img src={rightFlashIcon} />
                    </div>
                ))
            }
        </div>

    );
}
/**
 *  <Box>
            <Card variant="outlined">
                <CardHeader title={
                    <ThemeProvider theme={themeCardTitle}>
                        <Typography variant="h3" component="div" sx={{ flexGrow: 1 }} >
                            Annonces
                        </Typography>
                    </ThemeProvider>
                } />
                <CardContent>
                    <Box style={{height: '100%' , widht: "100%"}}>
                        <StyledPaper >
                            <Grid container wrap="nowrap" spacing={0}>
                                <Grid item >
                                    <Avatar>W</Avatar>
                                </Grid>
                                <Grid item xs >
                                    <Typography >12</Typography>
                                    <Typography >aminovic</Typography>

                                </Grid>
                                <Grid item xs >
                                    <Typography noWrap>Aminovic</Typography>
                                </Grid>
                            </Grid>
                        </StyledPaper>
                        <StyledPaper
                            
                        >
                            <Grid container  spacing={2}>
                                <Grid item>
                                    <Avatar>W</Avatar>
                                </Grid>
                                <Grid item xs>
                                    <Typography noWrap>hello world</Typography>
                                </Grid>
                            </Grid>
                        </StyledPaper>
                        <StyledPaper
                        
                        >
                            <Grid container wrap="nowrap" spacing={2}>
                                <Grid item>
                                    <Avatar>W</Avatar>
                                </Grid>
                                <Grid item xs>
                                    <Typography>hello world</Typography>
                                </Grid>
                            </Grid>
                        </StyledPaper>
                    </Box>
                </CardContent>
            </Card>
        </Box>
 */
import React, { useState } from 'react'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';
import Grid from '@mui/material/Grid';
import { highlightData } from '../data/Highlight'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';


function Highlight({ isMobile }) {
    const slice = isMobile ? 1 : 4
    const [activeStep, setActiveStep] = useState(0);
    const handleNext = () => {
        setActiveStep((prevActiveStep) => (prevActiveStep + 1))
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => Math.max(prevActiveStep - 1, 0));
    };

    return (
        <Container maxWidth={isMobile ? 'xs' : 'xl'} >
            <Box sx={{ height: 'auto', color: '#000000', padding: '20px', }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <StarIcon />
                    <Typography style={{ fontSize: '20px', color: '#000000', fontWeight: '600' }} >
                        Highlight
                    </Typography>
                </Box>
                <Grid container spacing={2} sx={{ position: 'relative' }} >
                    {highlightData.slice(activeStep, activeStep + slice).map((data, index) => (
                        <Grid key={index} item sm={12} lg={3}>
                            <Card sx={{ height: '350px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', border: '1px solid #F6F5F5' }}>
                                <CardMedia
                                    sx={{ height: '270px', objectFit: 'cover' }}
                                    component="img"
                                    image={data.img}
                                    title={data.title}
                                />
                                <CardContent sx={{ height: '80px' }}>
                                    <Typography style={{ fontSize: '17px', color: '#000000', fontWeight: '500' }} >
                                        {data.title}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                    <>
                        <Button
                            onClick={() => handleNext()}
                            disabled={isMobile ? activeStep > highlightData.length - 2 : activeStep > highlightData.length / 5}
                            sx={{
                                color: '#000000',
                                position: 'absolute',
                                right: -10,
                                top: '50%',
                                transform: 'translateY(-50%)',
                                backgroundColor: '#ffffff',
                                zIndex: 2,
                                width: '40px',
                                height: '40px',
                                borderRadius: '50%',
                                border: '1px solid #ccc',
                                "&:hover": { // Style on hover state
                                    backgroundColor: '#ffffff',
                                    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)'
                                },
                                "&.MuiButton-root, &.MuiButtonBase-root": {
                                    fontSize: '20px',
                                    minWidth: 'auto',
                                },
                            }}
                        >
                            <KeyboardArrowRight />
                        </Button>
                        {activeStep !== 0 && ( // Check if activeStep is not 0 before rendering handleBack button
                            <Button
                                onClick={() => handleBack()}
                                sx={{
                                    color: '#000000',
                                    position: 'absolute',
                                    left: 5,
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    backgroundColor: '#ffffff',
                                    border: '1px solid #ccc',
                                    zIndex: 2,
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '50%',
                                    "&:hover": { // Style on hover state
                                        backgroundColor: '#ffffff',
                                        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)'
                                    },
                                    "&.MuiButton-root, &.MuiButtonBase-root": {
                                        fontSize: '20px',
                                        minWidth: 'auto',
                                    },
                                }}
                            >
                                <KeyboardArrowLeft />
                            </Button>
                        )}
                    </>
                </Grid>
            </Box>
        </Container>
    )
}

export default Highlight
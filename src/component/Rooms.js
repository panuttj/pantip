import { React, useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { RoomsData } from '../data/Rooms'
import Typography from '@mui/material/Typography';
import TuneIcon from '@mui/icons-material/Tune';
import Container from '@mui/material/Container';


function Rooms({ isMobile }) {
    const slice = isMobile ? 3 : 12
    const [activeStep, setActiveStep] = useState(0);
    const handleNext = () => {
        setActiveStep((prevActiveStep) => (prevActiveStep + 1))
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => Math.max(prevActiveStep - 1, 0));
    };


    return (
        <Container maxWidth={isMobile ? 'xs' : 'xl'} >
            <Box sx={{ display: 'flex', flexDirection: 'row', marginLeft: '40px', marginRight: '40px', justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', flexDirection: 'row', gap: '10px', justifyContent: 'center', position: 'relative', paddingLeft: '50px', paddingRight: '70px' }}>
                    {RoomsData.slice(activeStep, activeStep + slice).map((data, index) => (
                        <Box key={index} sx={{ display: 'flex', justifyContent: 'center', width: isMobile ? 'auto' : '80px' }}>
                            <Button sx={{ display: 'flex', flexDirection: 'column' }}>
                                {data.icon}
                                <Typography style={{ fontSize: '12px', color: '#000000' }}>
                                    {data.title}
                                </Typography>
                            </Button>
                        </Box>
                    ))}
                    <>
                        <Button
                            onClick={() => handleNext()}
                            disabled={activeStep > RoomsData.length / 5}
                            sx={{
                                color: '#000000',
                                position: 'absolute',
                                right: 25,
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
                </Box>
                {
                    !isMobile &&
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Button sx={{ width: '95px', gap: '5px', border: '1px solid #ccc', borderRadius: '13px', height: '40px' }}>
                            <TuneIcon sx={{ color: '#000000' }} />
                            <Typography style={{ fontSize: '12px', color: '#000000' }}>
                                ตัวกรอง
                            </Typography>
                        </Button>
                    </Box>
                }

            </Box>
        </Container >
    );
}

export default Rooms;

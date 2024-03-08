import React from 'react'
import { website } from '../data/Topics'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

function Websites() {
    return (
        <Box sx={{ border: '1px solid #FF385C', height: '300px', borderRadius: '20px', width: '320px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', backgroundColor: '#FF385C' }}>
            <Box sx={{ height: '50px', backgroundColor: '#FF385C', borderTopLeftRadius: '19px', borderTopRightRadius: '19px', border: '1px solid #FF385C', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Typography style={{ fontSize: '20px', color: '#ffffff', fontWeight: '500' }}>
                    เว็บในเครือ
                </Typography>
            </Box>
            <Grid container spacing={2} sx={{ padding: '20px' }}>
                {website.map((item, index) => (
                    <Grid key={index} item lg={6} >
                        <Box >
                            <img src={item.img} alt="Pantip Logo" height="40" />
                        </Box>
                    </Grid>
                ))}
            </Grid>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                <Button sx={{ border: '1px solid #ffffff ', width: '180px', borderRadius: '13px', height: '40px', color: '#ffffff' }}>
                    ติดต่อลงโฆษณาพันทิป
                </Button>
            </Box>

        </Box>
    )
}

export default Websites
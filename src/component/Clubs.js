import React from 'react';
import { club } from '../data/Topics';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';

function Clubs() {
    return (
        <Box sx={{ border: '1px solid #FF385C', height: '362px', borderRadius: '20px', width: '320px', overflowY: 'auto' }}>
            <Box sx={{ height: '50px', backgroundColor: '#FF385C', borderTopLeftRadius: '19px', borderTopRightRadius: '19px', border: '1px solid #FF385C', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0px 10px 0px 10px' }}>
                <Typography style={{ fontSize: '20px', color: '#ffffff', fontWeight: '500' }}>
                    คลับ
                </Typography>
                <Button sx={{ color: '#ffffff' }}>
                    ดูทั้งหมด
                </Button>
            </Box>
            {club.map((item, index) => (
                <Box key={index} >
                    <Button sx={{ fontSize: '18px', color: '#000000', fontWeight: '300', width: '100%', display: 'flex', justifyContent: 'flex-start', paddingLeft: '20px' }}>
                        {item}
                    </Button>
                    {index !== club.length - 1 && <Divider />}
                </Box>
            ))}
        </Box>
    );
}

export default Clubs;

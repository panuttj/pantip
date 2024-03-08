import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Skeleton from '@mui/material/Skeleton';

function TagHitskt() {
    return (
        <Box sx={{ border: '1px solid #FF385C', height: '500px', borderRadius: '20px', width: '320px' }}>
            <Box sx={{ height: '50px', backgroundColor: '#FF385C', borderTopLeftRadius: '19px', borderTopRightRadius: '19px', border: '1px solid #FF385C', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Skeleton variant="text" animation="wave" sx={{ fontSize: '1rem', width: '80px' }} />
            </Box>
            {Array.from(new Array(10)).map((item, index) => (
                <Box key={index}>
                    <Button sx={{ fontSize: '18px', color: '#000000', fontWeight: '300', width: '100%', display: 'flex', justifyContent: 'flex-start', paddingLeft: '20px' }}>
                        <Skeleton animation="wave" height={32} width="80%" />
                    </Button>
                    {index !== Array.from(new Array(10)).length - 1 && <Divider />}
                </Box>
            ))}
        </Box>
    )
}

export default TagHitskt
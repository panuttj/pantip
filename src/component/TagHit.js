import React from 'react'
import { tagHit } from '../data/Topics'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';

function TagHit() {
    return (
        <Box sx={{ border: '1px solid #FF385C', height: '500px', borderRadius: '20px', width: '320px' }}>
            <Box sx={{ height: '50px', backgroundColor: '#FF385C', borderTopLeftRadius: '19px', borderTopRightRadius: '19px', border: '1px solid #FF385C', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Typography style={{ fontSize: '20px', color: '#ffffff', fontWeight: '500' }}>
                    แท็กฮิต
                </Typography>

            </Box>
            {tagHit.map((item, index) => (
                <Box key={index}>
                    <Button sx={{ fontSize: '18px', color: '#000000', fontWeight: '300', width: '100%', display: 'flex', justifyContent: 'flex-start', paddingLeft: '20px' }}>
                        {item}
                    </Button>
                    {index !== tagHit.length - 1 && <Divider />}
                </Box>
            ))}
        </Box>
    )
}

export default TagHit
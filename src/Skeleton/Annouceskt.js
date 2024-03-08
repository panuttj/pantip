import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Skeleton from '@mui/material/Skeleton'
function Annouceskt({ isMobile }) {
    return (
        <Container maxWidth={isMobile ? 'xs' : 'xl'} >
            <Box sx={{ height: 'auto', color: '#000000', padding: '20px', }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <Skeleton variant="circular" animation="wave" width={40} height={40} />
                    <Skeleton variant="text" animation="wave" sx={{ fontSize: '1rem', width: '80px' }} />
                </Box>
                <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-between', gap: '5px' }}>
                    <Box>
                        <Skeleton variant="rounded" animation="wave" width={isMobile ? 350 : 440} height={isMobile ? 140 : 150} />
                    </Box>
                    <Box>
                        <Skeleton variant="rounded" animation="wave" width={isMobile ? 350 : 440} height={isMobile ? 140 : 150} />
                    </Box>
                    <Box>
                        <Skeleton variant="rounded" animation="wave" width={isMobile ? 350 : 440} height={isMobile ? 140 : 150} />
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}

export default Annouceskt
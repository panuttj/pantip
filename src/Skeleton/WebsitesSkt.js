import React from 'react'
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
function WebsitesSkt() {
    return (
        <Box sx={{ border: '1px solid #FF385C', height: '300px', borderRadius: '20px', width: '320px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', backgroundColor: '#FF385C' }}>
            <Skeleton sx={{ height: 300, borderRadius: '20px' }} animation="wave" variant="rectangular" />
        </Box>
    )
}

export default WebsitesSkt
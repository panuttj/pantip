import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';

export default function Contentskt({ title, contentData, icon, isMobile }) {
    const [showMore, setShowMore] = useState(false);
    const itemsToShow = showMore ? contentData.length : 3;

    return (
        <Container maxWidth={isMobile ? 'xs' : 'xl'}  >
            <Box sx={{ display: 'flex', flexDirection: 'column', marginBottom: '30px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '10px', justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', gap: '10px' }}>
                        <Skeleton animation="wave" variant="circular" width={40} height={40} />
                        <Skeleton variant="text" sx={{ fontSize: '1rem', width: '80px' }} />
                    </Box>
                    <Skeleton animation="wave" height={10} width="10%" />
                </Box>
                <Grid container spacing={2}>
                    {Array.from(new Array(6)).slice(0, itemsToShow).map((data, index) => (
                        <Grid key={index} item xs={12} lg={4}>
                            <Card sx={{ height: '450px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', border: '1px solid #F6F5F5' }}>
                                <Box sx={{ height: '300px', position: 'relative' }}>
                                    <Skeleton sx={{ height: 200 }} animation="wave" variant="rectangular" />
                                    <CardContent>
                                        <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
                                        <Skeleton animation="wave" height={10} width="80%" />
                                    </CardContent>
                                </Box>
                                <CardActions sx={{ marginLeft: '10px' }}>
                                    <Grid container spacing={1}>
                                        {Array.from(new Array(4)).map((items, index) => (
                                            <Grid key={index} item xs={4} lg={4} >
                                                <Skeleton animation="wave" height={10} width="80%" />                                            </Grid>
                                        ))}
                                    </Grid>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container >
    );
}

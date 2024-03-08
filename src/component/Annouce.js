import React from 'react'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { AnnouceData } from '../data/Annouce'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import CampaignIcon from '@mui/icons-material/Campaign';

function Annouce({ isMobile }) {
    return (
        <Container maxWidth={isMobile ? 'xs' : 'xl'} >
            <Box sx={{ height: 'auto', color: '#000000', padding: '20px', }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <CampaignIcon />
                    <Typography style={{ fontSize: '20px', color: '#000000', fontWeight: '600' }} >
                        Announce
                    </Typography>
                </Box>
                <Grid container spacing={2} >
                    {AnnouceData.map((data, index) => (
                        <Grid key={index} item sm={12} lg={4}>
                            <Card sx={{ minWidth: '100%', height: '150px', border: '1px solid #F6F5F5', display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
                                <CardContent>
                                    <Typography style={{ fontSize: '20px', color: '#FF385C', fontWeight: '500' }} >
                                        {data.title}
                                    </Typography>
                                    <Typography style={{ fontSize: '15px', color: '#000000' }} >
                                        {data.description}
                                    </Typography>
                                </CardContent>
                                <Box sx={{ marginTop: 'auto', display: 'flex', justifyContent: 'flex-end' }}>
                                    <Button>
                                        แสดงเพิ่มเติม
                                    </Button>
                                </Box>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    )
}

export default Annouce
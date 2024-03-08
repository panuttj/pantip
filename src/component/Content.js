import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

const noImg = 'https://upload.wikimedia.org/wikipedia/th/c/c5/Pantip_Logo.png';

export default function Content({ title, contentData, icon, isMobile, setRealtime }) {
    const [showMore, setShowMore] = useState(false);
    const itemsToShow = showMore ? contentData.length : 3;
    const handleLike = (i) => {
        const updateData = contentData.map((item, index) => {
            return i === index ? { ...item, like: item.like + 1, status: 1 } : { ...item }
        })
        setRealtime(updateData)
    }
    const handleUnlike = (i) => {
        const updateData = contentData.map((item, index) => {
            return i === index ? { ...item, like: item.like - 1, status: 0 } : { ...item }
        })
        setRealtime(updateData)
    }

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };
    return (
        <Container maxWidth={isMobile ? 'xs' : 'xl'}  >
            <Box sx={{ display: 'flex', flexDirection: 'column', marginBottom: '30px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '10px', justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', gap: '10px' }}>
                        {icon}
                        <Typography style={{ fontSize: '20px', color: '#000000', fontWeight: '600' }} >
                            {title}
                        </Typography>
                    </Box>
                    <Button onClick={toggleShowMore}>{showMore ? 'แสดงน้อยลง' : 'แสดงเพิ่มเติม'}</Button>
                </Box>
                <Grid container spacing={2}>
                    {contentData.slice(0, itemsToShow).map((data, index) => (
                        <Grid key={index} item xs={12} lg={4}>
                            <Card sx={{ height: isMobile ? '390px' : '450px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', border: '1px solid #F6F5F5' }}>
                                <Box sx={{ height: isMobile ? '230px' : '300px', position: 'relative' }}>
                                    <Box sx={{ position: 'absolute', top: '10px', right: '12px', display: 'flex', alignItems: 'center', gap: '5px' }} >
                                        <Typography style={{ fontSize: '10px', color: '#FF385C', fontWeight: '600' }} >
                                            {data.like}
                                        </Typography>
                                        {data.status ? <FavoriteIcon onClick={() => handleUnlike(index)} sx={{ color: '#FF385C' }} /> : <FavoriteBorderIcon onClick={() => handleLike(index)} sx={{ color: '#FF385C' }} />}
                                    </Box>
                                    <CardMedia
                                        sx={{ height: '200px', objectFit: 'cover' }}
                                        component="img"
                                        image={data.img ? data.img : noImg}
                                        title={data.title}
                                    />
                                    <CardContent>
                                        <Typography style={{ fontSize: '15px', color: '#A9A9A9' }}>
                                            {data.name}
                                        </Typography>
                                        <Typography style={{ fontSize: '18px', color: '#000000', fontWeight: '500' }}>
                                            {data.title}
                                        </Typography>
                                    </CardContent>
                                </Box>
                                <CardActions sx={{ marginLeft: '10px' }}>
                                    <Grid container spacing={1}>
                                        {data.hastag.map((items, index) => (
                                            <Grid key={index} item xs={4} lg={4} >
                                                <Button sx={{ padding: 0, margin: 0, display: 'flex', justifyContent: 'flex-start', color: '#C7C8CC' }}>{items.length > 10 ? items.slice(0, 10) + '....' : items}</Button>
                                            </Grid>
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

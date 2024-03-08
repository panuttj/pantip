import React, { useState, useEffect } from 'react'
import Annouce from './component/Annouce';
import Content from './component/Content';
import Navbar from './component/Navbar';
import Rooms from './component/Rooms';
import { pantipRealtime, pantipPick, pantipHitz } from './data/Topics'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TagHit from './component/TagHit';
import TimelineIcon from '@mui/icons-material/Timeline';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import Clubs from './component/Clubs';
import Websites from './component/Websites';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Annouceskt from './Skeleton/Annouceskt'
import Roomsskt from './Skeleton/Roomsskt';
import Contentskt from './Skeleton/Contentskt';
import TagHitskt from './Skeleton/TagHitskt';
import ClubsSkt from './Skeleton/ClubsSkt';
import WebsitesSkt from './Skeleton/WebsitesSkt';
import Highlight from './component/Highlight';
import HighlightSkt from './Skeleton/HighlightSkt';

function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [loading, setLoading] = useState(false)
  const [realtime, setRealtime] = useState(pantipRealtime)
  const [pick, setPick] = useState(pantipPick)
  const [hitz, setHitz] = useState(pantipHitz)

  useEffect(() => {
    setTimeout(() => {
      setLoading(!loading)
    }, 1000);
  }, [])

  return (
    <div style={{ margin: 0, padding: 0, boxSizing: 'border-box' }}>
      <Navbar />
      <div style={{ marginTop: isMobile ? '80px' : '170px' }}  >
        {loading ? <Annouce isMobile={isMobile} /> : <Annouceskt isMobile={isMobile} />}
        {loading ? <Rooms isMobile={isMobile} /> : <Roomsskt isMobile={isMobile} />}
        {loading ? <Highlight isMobile={isMobile} /> : <HighlightSkt isMobile={isMobile} />}
      </div>

      <Box sx={{ position: 'relative' }}>
        <Grid container spacing={1} >
          <Grid item lg={9} xs={12} >
            {loading ? <Content title={'Pantip Realtime'} contentData={realtime} icon={<TimelineIcon />} isMobile={isMobile} setRealtime={setRealtime} /> : <Contentskt isMobile={isMobile} />}
            {loading ? <Content title={'Pantip Pick'} contentData={pick} icon={<ThumbUpOffAltIcon />} isMobile={isMobile} setRealtime={setPick} /> : <Contentskt isMobile={isMobile} />}
            {loading ? <Content title={'Pantip Hitz'} contentData={hitz} icon={<WhatshotIcon />} isMobile={isMobile} setRealtime={setHitz} /> : <Contentskt isMobile={isMobile} />}
          </Grid>
          {
            !isMobile &&
            <Grid item lg={2} sx={{ marginTop: '45px' }} >
              <Box sx={{ marginBottom: '20px' }}>
                {loading ? <TagHit /> : <TagHitskt />}
              </Box>
              <Box sx={{ marginBottom: '20px' }}>
                {loading ? <Clubs /> : <ClubsSkt />}
              </Box>
              <Box>
                {loading ? <Websites /> : <WebsitesSkt />}
              </Box>
            </Grid>
          }
        </Grid>
      </Box>

    </div>
  );
}

export default App;

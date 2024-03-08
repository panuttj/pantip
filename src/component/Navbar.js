import React, { useState, useEffect, Fragment } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../assets/pantipLogo.png'
import AccountCircle from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Fade from '@mui/material/Fade';
import Search from './Search';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Drawer from './Drawer'

export default function Navbar() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [scrolled, setScrolled] = useState(true);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        if (scrollPosition >= 70) {
            setScrolled(false);
        } else {
            setScrolled(true);
        }
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleDrawerOpen = () => {
        setOpen(!open);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" elevation={0} sx={{ position: 'fixed', zIndex: '999' }} open={open} >
                <Toolbar sx={{ height: isMobile ? '60px' : (scrolled ? '150px' : '65px'), display: 'flex', flexDirection: 'column', backgroundColor: '#ffffff', transition: '0.5s' }}>
                    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '85px' }}>
                        <Box sx={{ display: 'flex', }}>
                            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={handleDrawerOpen}>
                                <MenuIcon sx={{ color: '#A9A9A9' }} />
                            </IconButton>
                            <img src={Logo} alt="Pantip Logo" height="40" />
                        </Box>
                        {!isMobile && (
                            <Fragment>
                                {scrolled ?
                                    <Fade in={scrolled} timeout={1000}>
                                        <Box sx={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
                                            <Typography style={{ color: '#000000' }} >
                                                ตั้งกระทู้
                                            </Typography>
                                            <Typography style={{ color: '#000000' }}>
                                                คอมมูนิตี้
                                            </Typography>
                                        </Box>
                                    </Fade>
                                    :
                                    <Fade in={!scrolled} timeout={500}>
                                        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', transition: '0.5s' }}>
                                            <Search paddingIcon={'5px'} paddingBox={'0px'} />
                                        </Box>
                                    </Fade>

                                }
                            </Fragment>
                        )}
                        <Box>
                            <Button variant="outlined"
                                sx={{
                                    color: '#A9A9A9',
                                    border: '1px solid #A9A9A9',
                                    borderRadius: '20px',
                                    "&:hover": {
                                        border: '1px solid #A9A9A9',
                                        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)'
                                    }
                                }}
                                onClick={handleOpenUserMenu}
                            >
                                <AccountCircle />
                            </Button>
                            <Menu
                                sx={{ mt: scrolled ? '40px' : '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                <MenuItem onClick={handleCloseUserMenu}>เข้าสู่ระบบ</MenuItem>
                                <Divider variant="middle" />
                                <MenuItem onClick={handleCloseUserMenu}>สมัครสมาชิก</MenuItem>
                            </Menu>
                        </Box>
                    </Box>
                    {!isMobile && (
                        <Fade in={scrolled}>
                            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                                <Search paddingIcon={'15px'} paddingBox={'5px'} />
                            </Box>
                        </Fade>)}
                </Toolbar>
                <Divider sx={{ backgroundColor: '#A9A9A9' }} />
            </AppBar>
            <Drawer open={open} marginTop={isMobile ? '60px' : (scrolled ? '150px' : '65px')} heightDrawer={isMobile ? '100%' : '70%'} onMouseLeave={() => setOpen(false)} />

        </Box >
    );
}
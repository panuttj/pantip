import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { menuDrawerFeed, menuDrawerPoint, menuDrawerRules, menuDrawerSocial } from '../data/Menu.js'
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'

const drawerWidth = 250;


export default function PersistentDrawerLeft({ open, marginTop, onMouseLeave, heightDrawer }) {

    return (
        <Box sx={{ display: 'flex' }}>
            <Drawer
                onMouseLeave={onMouseLeave}
                sx={{
                    width: drawerWidth,
                    height: '100%',
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        marginTop: marginTop,
                        transition: '0.5s'
                    },

                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <Divider sx={{ backgroundColor: '#A9A9A9' }} />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Box sx={{ height: heightDrawer, overflowY: 'scroll' }}>
                        <List>
                            {menuDrawerFeed.map((menu, index) => (
                                <ListItem key={index} disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            {menu.icon}
                                        </ListItemIcon>
                                        <ListItemText primary={menu.title} />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                        <Divider />
                        <List>
                            {menuDrawerPoint.map((menu, index) => (
                                <ListItem key={index} disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            {menu.icon}
                                        </ListItemIcon>
                                        <ListItemText primary={menu.title} />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                        <Divider />
                        <List sx={{ display: 'flex', flexDirection: 'column' }}>
                            {menuDrawerRules.map((menu, index) => (
                                <ListItem key={index} disablePadding>
                                    <Link sx={{
                                        marginLeft: '16px',
                                        fontSize: '15px', color: '#A9A9A9',
                                        textDecoration: 'none',
                                        "&:hover": {
                                            textDecoration: 'underline',
                                            textDecorationColor: '#A9A9A9'
                                        }
                                    }
                                    }
                                    >
                                        {menu}
                                    </Link>
                                </ListItem>
                            ))}

                        </List>
                    </Box>
                    <Box>
                        <Typography style={{ marginLeft: '16px', fontSize: '13px', color: '#A9A9A9' }} >
                            © 2024 Internet Marketing co., ltd
                        </Typography>
                        <Divider />
                        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <Box sx={{ display: 'flex', height: 'auto' }}>
                                <Typography style={{ margin: '0px 10px 0px 16px', fontSize: '13px', color: '#A9A9A9' }} >
                                    ติดตาม
                                </Typography>
                            </Box>

                            {menuDrawerSocial.map((menu, index) => (
                                <Button key={index} sx={{ display: 'flex', flexDirection: 'row', minWidth: 'unset' }}>
                                    {menu}
                                </Button>
                            ))}
                        </Box>
                    </Box>
                </Box>

                <Divider />
            </Drawer>
        </Box >
    );
}
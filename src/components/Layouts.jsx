import {
    AppBar,
    Avatar,
    CssBaseline,
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Toolbar,
    Typography
} from '@mui/material'
import React from 'react'
import SubjectIcon from '@mui/icons-material/Subject';
import CreateIcon from '@mui/icons-material/Create';
import { useHistory, useLocation } from 'react-router';
import { Box } from '@mui/system';
import { PhotoCamera } from '@mui/icons-material';
import BookIcon from '@mui/icons-material/Book';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

const drawerWidth = "240px"


function Layouts({ children }) {
    const history = useHistory()
    const location = useLocation()

    const menuItem = [
        {
            text: "Notes",
            icon: <SubjectIcon />,
            path: "/"
        },
        {
            text: "Create",
            icon: <CreateIcon />,
            path: "/create"
        },
        {
            text: "Album Site",
            icon: <PhotoCamera />,
            path: "/album"
        },
        {
            text: "Blog Site",
            icon: <BookIcon />,
            path: "/blog"
        },
        {
            text: "Employee Site",
            icon: <AccountBalanceIcon />,
            path: "/employee"
        }
    ]
    return (
        <Box sx={{ display: 'flex' }}>
            {/* // App Bar */}
            <CssBaseline />
            <AppBar
                elevation={0}
                position="fixed"
                sx={{
                    width: `calc(100% - ${drawerWidth})`, ml: `${drawerWidth}`,
                    background: '#f9f5faeb',
                    color: 'purple',
                }}
            >
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        {
                            menuItem.map(item => {
                                if (item.path === location.pathname) {
                                  return  item.text
                                }
                            })
                        }
                    </Typography>
                    <Typography variant="body2" mr={1}>Touhid</Typography>
                    <Avatar src="/img/user.png" p={2}></Avatar>
                </Toolbar>
            </AppBar>


            {/* // Side Bar Drawer*/}
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <Typography variant="h5" color="text.secondary" align="center" p={2}> MUI Learning</Typography>
                <Divider />
                <List>
                    {
                        menuItem.map(item => (
                            <ListItem button key={item.text} onClick={() => history.push(item.path)}>
                                <ListItemIcon> {item.icon}</ListItemIcon>
                                <ListItemText primary={item.text} />
                            </ListItem>
                        )
                        )
                    }
                </List>
            </Drawer>

            {/* //Children */}
            <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
            >
                <Toolbar />
                <>
                    {children}
                </>
            </Box>
        </Box>
    )
}

export default Layouts

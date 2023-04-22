import { AppBar, Avatar, Badge, InputBase, MenuItem, styled, Toolbar, Typography,Menu } from '@mui/material'
import React, { useState } from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailIcon from '@mui/icons-material/Mail';
import image from  './image.png'
import { Box } from '@mui/system';




function NavBar() {
    const [open, setopen] = useState(false)
    const StyledToolBar=styled(Toolbar)({
        display:"flex",
        justifyContent:"space-between"
    })
    const Search=styled("div")(({theme})=>({
        backgroundColor:"white",
        padding:"0 10px",
        borderRadius:"5px",
        width:"40%"
    }))
        const Iconcont=styled(Box)(({theme})=>({
        gap:"20px",
            display:"none",
        allignItems:"center",
        [theme.breakpoints.up("sm")]:{
            display:"flex"
      }
    }))
      const UserBox=styled(Box)(({ theme })=>({
        gap:"10px",
         display:"flex",
     allignItems:"center",
    [theme.breakpoints.up("sm")]:{
        display:"none"
    }
       }))
  return (
    <AppBar position="sticky">
        <StyledToolBar>
            <TwitterIcon sx={{display:{xs:"block",sm:"none"}}}/>
         <Typography sx={{display:{xs:"none",sm:"block"}}}>TWITTER</Typography>
         <Search><InputBase placeholder='search....'/></Search>
         <Iconcont>
         <Badge badgeContent={4} color="error">
           <MailIcon  />
         </Badge>
         <Badge badgeContent={12} color="error">
          <NotificationsIcon/>
         </Badge>
         <Avatar sx={{width:"30px",height:"30px"}} 
         onClick={(e=>setopen(true))}
         src={image}/>
         </Iconcont>
         <UserBox onClick={(e=>setopen(true))}>
         <Avatar sx={{width:"30px",height:"30px"}} src={image} />
         <Typography variant='span'>ARJUN</Typography>
         </UserBox>
        </StyledToolBar>    <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e=>setopen(false))}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>

    </AppBar>
  )
}

export default NavBar

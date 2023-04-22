import { Avatar, AvatarGroup, Box, ImageList, ImageListItem, Typography } from '@mui/material'
import React from 'react'
import Breakfasr from './Breakfasr.avif'
import Burger from './Burger.avif'
import Honey from './Honey.avif'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';



function RightBar() {
  return (
    <Box  flex={2} p={2} sx={{display:{xs:"none",sm:"block"}}}>
      <Box position="fixed" width={300}>
         <Typography variant="h6" fontweigth={100} mt={2} mb={2}>Online Friends</Typography>
         <AvatarGroup max={6}>
  <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
  <Avatar alt="Travis Howard" src="https://mui.com/static/images/avatar/2.jpg" />
  <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/3.jpg" />
  <Avatar alt="Agnes Walker" src="https://mui.com/static/images/avatar/4.jpg" />
  <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/5.jpg" />
  <Avatar alt="Agnes Walker" src="https://mui.com/static/images/avatar/4.jpg" />
  <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/5.jpg" />
</AvatarGroup>
<Typography variant="h6" fontweigth={100} mt={2} mb={2}> 
  Latest Posts
</Typography>
<ImageList cols={3} rowHeight={100} gap={2}>
  <ImageListItem >
      <img
        src={Breakfasr}
        alt="hii"
      />
    </ImageListItem>
    <ImageListItem >
      <img
        src={Burger}
        alt="hii"
      />
    </ImageListItem>
    <ImageListItem >
      <img
        src={Honey}
        alt="hii"
      />
    </ImageListItem>
</ImageList>
<Typography variant="h6" fontweigth={100} mt={2} mb={2}> 
 Latest Conversations
</Typography>
<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="https://mui.com/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
      </Box>
    </Box>
  )
}

export default RightBar

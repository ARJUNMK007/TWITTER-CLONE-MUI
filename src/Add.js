import React, { useState } from 'react'
import { Tooltip,Fab, Box, Modal, styled, Typography, Avatar, TextField, ButtonGroup, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Stack } from '@mui/system';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import GroupIcon from '@mui/icons-material/Group';
import DateRangeIcon from '@mui/icons-material/DateRange';


function Add() {
    const StyledModal=styled(Modal)({
        display:"flex",
       justifyContent:"center",
       alignItems:"center"
    })
    const UserBox=styled(Box)({
        display:"flex",
        alignItems:"center",
        gap:"10px",
        marginBottom:"20px"
    })
    const [open, setopen] = useState(false)
  return (
    <>
      <Tooltip  onClick={(e=>setopen(true))}  title="Add" sx={{position:"fixed",bottom:20,left:{xs:"calc(50%-25px)",md:30}}}>
        <Fab color="primary" aria-label="add">
           <AddIcon />
        </Fab>
       </Tooltip>
<StyledModal
  open={open}
  onClose={(e=>setopen(false))}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box width={300} height={284} p={3} borderRadius={5}  bgcolor={"background.default"} color={"text.primary"}>
   <Typography variant='h6' color="grey" textAlign='center'>Create Post</Typography>
   <UserBox>
   <Avatar src="https://mui.com/static/images/avatar/3.jpg"  sx={{width:30, height:30}}/>
   <Typography color='black' fontWeight={500} variant='span'>Cindy Baker</Typography>
   </UserBox>
   <TextField 
           sx={{width:"100%"}}
          id="standard-multiline-static"
          multiline
          rows={3}
          placeholder="What's on your mind"
          variant="standard"
        />
        <Stack direction="row" gap={3} mb={3} mt={3}>
             <EmojiEmotionsIcon color='primary'/>
             <AddAPhotoIcon color='secondary'/>
             <VideoCallIcon color='violet'/>
             <GroupIcon color='error'/>
        </Stack>
        <ButtonGroup
        fullWidth
        
         variant="contained" aria-label="outlined button group" >
            <Button sx={{width:"250px"}}>POST</Button>
            <Button sx={{width:"150px"}}><DateRangeIcon/></Button>
       </ButtonGroup>
  </Box>
</StyledModal>
    </>
  )
}

export default Add

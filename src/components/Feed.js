import { Box } from '@mui/system'
import React from 'react'
import Post from './Post'
import Fish from './Fish.png'
import Tree from './Tree.png'
import River from './River.png'
import Stone from './Stone.png'



const Feed = () => {
  return (
    <Box flex={4} p={2}>
      <Post title="ALBERT" image={Fish}/>
      <Post title="JHON" image={Tree}/>
      <Post title="CATHERINE" image={River}/>
      <Post title="ALEXANDRA" image={Stone}/>
   </Box>
  )
}

export default Feed

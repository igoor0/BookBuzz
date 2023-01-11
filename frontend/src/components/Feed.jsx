import React, { useEffect } from 'react'
import { Box, } from '@mui/material'
import Post from './Post';
import { useState } from 'react';
import FetchBooks from './FetchBooks';


  


function Feed(props) {
  return (
    <Box flex={4} p={5}>
      <Post props={[props.dataDocs]}/>
    </Box>    
  )
}
export default Feed


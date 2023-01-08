import { Avatar, Button, ButtonGroup, Fab, Modal, TextField, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Add as AddIcon, DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack } from '@mui/icons-material'
import { Box, Stack } from '@mui/system'
import styled from '@emotion/styled'

const StyledModal = styled(Modal)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
});
const UserBox = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '20px',

})

const Add = () => {
    const [open, setOpen] = useState(false);
  return (
    <>
        <Tooltip onClick={e=>setOpen(true)}
        title="Add" sx={{position:'fixed', bottom:20, left: {xs:'calc(50% - 25px)', md:30}}}>
            <Fab color='primary' aria-label='add'>
                <AddIcon />
            </Fab>
        </Tooltip>
        <StyledModal
        open={open}
        onClose={e=>setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box width={400} height={280} bgcolor='white' p={3} borderRadius={5}>
            <Typography variant='h5' sx={{textAlign:'center'}}>Add a Post</Typography>
            <UserBox>
                <Avatar sx={{width: 40, height: 40}}/>
                <Typography variant='h6' fontWeight={400}>John Doge</Typography>

            </UserBox>
            <TextField
            sx={{width:'100%'}}
          id="standard-multiline-static"
          multiline
          rows={3}
          placeholder="What's on your mind?"
          variant="standard"
        />
        <Stack direction='row' gap={1} mt={2} mb={3}>
            <EmojiEmotions color='primary' />
            <Image color='secondary' />
            <VideoCameraBack color='success' />
            <PersonAdd color='error' />
        </Stack>
        <ButtonGroup 
            fullWidth
            variant="contained" 
            aria-label="outlined primary button group">
            <Button>Post</Button>
            <Button sx={{width:'100px'}}>
                <DateRange/>
            </Button>
        </ButtonGroup>
        </Box>
        </StyledModal>
    </>
  )
}

export default Add
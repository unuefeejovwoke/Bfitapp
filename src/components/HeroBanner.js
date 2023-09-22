import React from 'react'
import {Box, Stack, Typography, Button} from '@mui/material';
import HeroBannerImage from '../assets/images/banner.png'

const HeroBanner = () => {
    return (
        <Box sx={{
          mt : {lg: '212px', xs: '70px'},
          ml : {sm : '50px'}
        }} position='relative' p='20px'>
          <Typography color='#ff940a' fontWeight='600' fontSize='26px'>
            Physiotherapy Club
          </Typography>
          <Typography fontWeight={700} sx={{fontSize: {lg: '44px', xs: '40px'}}} mb='23px' mt='30px'>
            Hit the Nerves <br /> and Rest
          </Typography>
          <Typography fontSize='22px' lineHeight='35px' mb={4}>
            Check out the most effective exercises
          </Typography>
    
          <Button
            variant='contained'
            sx={{
              backgroundColor: '#ff940a', padding: '10px' // Set the background color here
            }}
          >
            Explore Exercises
          </Button>
          <Typography fontWeight={600} color='#ff940a' sx={{ opacity: 0.1, display: {lg : 'block', xs: 'none'}}} fontSize='200px'>
          Exercise</Typography>
          <img src={HeroBannerImage} alt="hero banner" className='hero-banner-img' />
    
        </Box>
      )
}

export default HeroBanner

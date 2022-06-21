import { useAuth0 } from '@auth0/auth0-react';
import { Box, Typography } from '@mui/material';
import React from 'react'
import Buttons from './Components/atoms/Button';


function LoginPage() {
    const { loginWithRedirect } = useAuth0();
  return (
    <Box position={"absolute"} top={"25%"} width={"100%"}>
      
      <Box display={"flex"} justifyContent="center">
      <Box width="35%" height={"80%"} display={"flex"} justifyContent={"flex-start"}>
      <Box component={"img"} width="90%" height={"70%"}  src="images/loginImage1.png" alt={"Login Image"}>
        
      </Box>
      </Box>

      <Box width="60%" >
        <Box width={"80%"} padding={"5% 10%"}>
        <Typography fontSize={"36px"} fontWeight={700} lineHeight={"45.25px"} width={"50%"} padding={"0% 25%"} textAlign={"left"}>
         BLINKIST 
        </Typography>
        <Typography fontSize={"20px"} fontWeight={400} lineHeight={"25px"} width={"50%"} padding={"30px 25%"} textAlign={"left"}>
        Blinkist is a professional book summary service that allows you to understand the key insights from the world's best non-fiction books in 15 minutes or less.
        </Typography>
        <Box display={"flex"} justifyContent={"left"} padding={"10px"} marginLeft={"23.5%"}>
        <Buttons name={"Log in"} onClick={() => loginWithRedirect()} classing={'connect'} icon={undefined} end={undefined} />
        </Box>
        </Box>
        </Box>
      
      </Box>
    </Box>
  )
}

export default LoginPage;
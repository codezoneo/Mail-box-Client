import {Button} from '@mui/material'
import React from 'react'
import social from './images/social.png'
import {signInWithPopup} from 'firebase/auth'
import {auth, googleProvider} from '../firebase/setup'

const Signin = function Signin() {

const googleSignin = async ()=>{
    try{
        await signInWithPopup(auth,googleProvider);

    }catch(err){
        console.log(err)

    }

}

  return (
    <div style={{position:"absolute",top:"25%",left:"30%",padding:"110px"}}>
      <div style={{border:"1px soild green",padding:"20px",textAlign:"center",borderRadius:"6px",minheight :"350px"}}>
        <img style={{width:"70px"}} src={social} />
        <h1 style={{ fontWeight: "190" }}>Create your Google Account</h1>
        <h3 style={{ fontWeight: "190" }}>Click the signin button</h3>
        <Button onClick={googleSignin} variant="contained">Signin with google</Button>
      </div>
    </div>
  );
}

export default Signin;
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from '@mui/material/Menu';
import { Avatar, Grid } from "@mui/material";
import mail from './images/mail.png';
import lens from './images/lens.png';
import {auth} from '../firebase/setup';

export default function Navbar() {
  return (
    <Grid container>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar elevation={0} position="static" sx={{ backgroundColor: "#F9F9F9",minHeight:"6vw",minWidth:"100vw",paddingTop:"7px",paddingRight:"30px"}}>
          <Toolbar variant="dense">
            <Grid item xs={2}>
              <div style={{display:"flex",alignItems:"center"}}>
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr:"2vw", color: "#3C3C3C" }}
                >
                  <MenuIcon sx={{width:"2vw"}}/>
                </IconButton>
                <img style={{ width: "2vw" }} src={mail} />
                <Typography
                  sx={{ color: "#3C3C3C", marginLeft: "3vw",fontSize:"1.6vw" }}
                  variant="h6"
                  color="inherit"
                  component="div"
                >
                  Mail-box
                </Typography>
              </div>
            </Grid>
            <Grid item xs={9}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  borderRadius: "40px",
                  backgroundColor: "#E4EFFA",
                  
                }}
              >
                <img
                  src={lens}
                  style={{
                    width: "1.3vw",
                    height: "2vw",
                    alignItems: "center",
                    marginLeft: "15px",
                  }}
                />
                <input
                  placeholder="Search mail"
                  style={{
                    marginLeft: "3vw",
                    height: "3vw",
                    width: "60vw",
                    backgroundColor: "#E4EFFA",
                    border: "none",
                  }}
                />
              </div>
            </Grid>
            <Grid item xs={1}>
              <Avatar sx={{marginLeft:"7.5vw",width:"3vw",height:"3vw"}} src={auth.currentUser?.photoURL}/>
            </Grid>
          </Toolbar>
        </AppBar>
      </Box>
    </Grid>
  );
}

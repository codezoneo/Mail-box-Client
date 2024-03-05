import { Grid } from '@mui/material'
import React from 'react'
import Navbar from './Navbar';
import LeftPanel from "./Leftpanel";


function Main() {
  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
            <Navbar />
        </Grid>
        <Grid item xs={2}>
          <LeftPanel />
        </Grid>
      </Grid>
    </div>
  );
}

export default Main
import { Paper,List,ListItem } from '@mui/material';
import React from 'react';
import star from './images/star.png'
import refresh from './images/refresh.png'

function Middle() {
  return (
    <div style={{ marginLeft: "4.5vw", width: "75vw" }}>
      <img
        src={refresh}
        style={{
          width: "1.5vw",
          heihght: "1.5vw",
          marginLeft: "1.5vw",
          marginTop: "2vw",
        }}
      />
      <Paper
        elevation={0}
        style={{
          backgroundColor: "#F6FBFF",
          borderBottom: "1px solid lightgrey",
          borderTop: "1px solid lightgrey",
          marginTop: "1.5vw",
        }}
      >
        <List>
          <ListItem>
            <img src={star} style={{ width: "1.3vw", height: "1.4vw" }} />
            <span
              style={{
                fontSize: "1.2vw",
                marginLeft: "1.2vw",
                fontWeight: "500",
              }}
            >
              HGTJGGKks
            </span>
            <span style={{ marginLeft: "4.5vw", fontWeight: "200" }}>
              itooton
            </span>
          </ListItem>
        </List>
      </Paper>
      <Paper
        elevation={0}
        style={{
          backgroundColor: "#F6FBFF",
          borderBottom: "1px solid lightgrey",
          borderTop: "1px solid lightgrey",
        }}
      >
        <List>
          <ListItem>
            <img src={star} style={{ width: "1.3vw", height: "1.4vw" }} />
            <span
              style={{
                fontSize: "1.2vw",
                marginLeft: "1.2vw",
                fontWeight: "500",
              }}
            >
              HRGJGJKhh
            </span>
            <span style={{ marginLeft: "4.5vw", fontWeight: "200" }}>
              KIDJJDJ
            </span>
          </ListItem>
        </List>
      </Paper>
      <Paper
        elevation={0}
        style={{
          backgroundColor: "#F6FBFF",
          borderBottom: "1px solid lightgrey",
          borderTop: "1px solid lightgrey",
        }}
      >
        <List>
          <ListItem>
            <img src={star} style={{ width: "1.3vw", height: "1.4vw" }} />
            <span
              style={{
                fontSize: "1.2vw",
                fontSize: "1.2vw",
                marginLeft: "1.2vw",
                fontWeight: "500",
              }}
            >
              hdjfjkkg
            </span>
            <span style={{ marginLeft: "4.5vw", fontWeight: "200" }}>
              lorem10
            </span>
          </ListItem>
        </List>
      </Paper>
      <Paper
        elevation={0}
        style={{
          backgroundColor: "#F6FBFF",
          borderBottom: "1px solid lightgrey",
          borderTop: "1px solid lightgrey",
        }}
      >
        <List>
          <ListItem>
            <img src={star} style={{ width: "1.3vw", height: "1.4vw" }} />
            <span
              style={{
                fontSize: "1.2vw",
                marginLeft: "1.2vw",
                fontWeight: "500",
              }}
            >
              hshjs
            </span>
            <span style={{ marginLeft: "4.5vw", fontWeight: "200" }}>
              hdhhd
            </span>
          </ListItem>
        </List>
      </Paper>
    </div>
  );
}

export default Middle
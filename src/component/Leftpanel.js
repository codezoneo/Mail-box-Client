import React from 'react'
import pen from './images/pen.png';
import inbox from './images/inbox.png'
import send from './images/send.png';
import snooze from './images/snooze.png';
import star from './images/star.png';

const LeftPanel = ()=>{
  return (
    <div
      style={{
        backgroundColor: "#F9F9F9",
        minHeight: "100vh",
        paddingTop: "1vw",
      }}
    >
      <div
        style={{
            height:"4.66vw",
          marginLeft: "1vw",
          width: "12vw",
          display: "flex",
          alignItems: "center",
          borderRadius: "20px",
          backgroundColor: "#66CDAA",
        }}
      >
        <img src={pen} style={{ width: "1.2vw", marginLeft: "2vw" }} />
        <h4 style={{ marginLeft: "1.6vw", fontWeight: "400", fontSize: "1.3vw" }}>
          Compose
        </h4>
      </div>
      <div
        style={{
          marginTop: "1vw",
          marginLeft: "0.8vw",
          width: "12vw",
          display: "flex",
          alignItems: "center",
        }}
      >
        <img src={inbox} style={{ width: "1.2vw", marginLeft: "2vw" }} />
        <span
          style={{ marginLeft: "1.6vw", fontWeight: "400", fontSize: "1.3vw" }}
        >
          Inbox
        </span>
      </div>
      <div
        style={{
          marginTop: "1vw",
          marginLeft: "0.8vw",
          width: "12vw",
          display: "flex",
          alignItems: "center",
        }}
      >
        <img src={star} style={{ width: "1.2vw", marginLeft: "2vw" }} />
        <span
          style={{ marginLeft: "1.6vw", fontWeight: "400", fontSize: "1.3vw" }}
        >
          Starred
        </span>
      </div>
      <div
        style={{
          marginTop: "1vw",
          marginLeft: "0.8vw",
          width: "12vw",
          display: "flex",
          alignItems: "center",
        }}
      >
        <img src={snooze} style={{ width: "1.2vw", marginLeft: "2vw" }} />
        <span
          style={{ marginLeft: "1.6vw", fontWeight: "400", fontSize: "1.3vw" }}
        >
          Snoozed
        </span>
      </div>
      <div
        style={{
          marginTop: "1vw",
          marginLeft: "0.8vw",
          width: "12vw",
          display: "flex",
          alignItems: "center",
        }}
      >
        <img src={send} style={{ width: "1.2vw", marginLeft: "2vw" }} />
        <span
          style={{ marginLeft: "1.6vw", fontWeight: "400", fontSize: "1.3vw" }}
        >
          Send
        </span>
      </div>
    </div>
  );
}

export default LeftPanel;
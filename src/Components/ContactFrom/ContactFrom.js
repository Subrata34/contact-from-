import { Button } from "@mui/material";
import React from "react";

const ContactFrom = () => {
  return (
    <div>
      <div style={{backgroundColor:"#FF0000"}} >
        <h2>Contact</h2>
        <br />
        <br />
        <h3>FEEL FREE TO <br /> CONTACT WITH OUR <br /> IT AGENCY</h3>
      </div>
      <div style={{marginTop:"60px"}}>
          <form>
              <input type="text" placeholder="Name" />
              <br />
              <br />
              <input type="email" placeholder="Email Address" />
              <br />
              <br />
              <input type="text" placeholder="Phone Number" />
              <br />
              <br />
              <input type="text" placeholder="Write Comments" />
              <br />
              <br />
              <Button style={{marginRight:"75px"}} variant="contained">Submit</Button>
          </form>
      </div>
    </div>
  );
};

export default ContactFrom;

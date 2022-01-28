/*import React from "react";
import Box from "@mui/material/Box";
import { useState } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function WelcomingModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        className="submit-form"
        onClick={handleOpen}
        style={{ color: "black", backgroundColor: "indianred" }}
      >
        Register
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={style}
          style={{
            color: "indianred",
            backgroundColor: "BurlyWood",
            borderRadius: "30px",
            width: "200px",
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <div>
              <center>Welcome in Freelance</center>
              <center style={{ fontSize: "20px" }}>&#128512;</center>
            </div>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
*/

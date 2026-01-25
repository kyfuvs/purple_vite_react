import React from 'react'
import styles from "./Submit_Form.module.css"
import IconButton from '@mui/material/IconButton'
import SendIcon from '@mui/icons-material/Send'
// import { usePurple } from "../../../context/PurpleContext";
// import { usePurple } from "../../../../../context/PurpleContext";
import { usePurple } from "../../context/PurpleContext";

export default function Submit_Form() {
     const { 
      showForm, setShowForm,
      // userId, setUserId
      } = usePurple();

    const handleSubmit = () => {
        setShowForm(false);
        // setUserId(0); 
    }

  return (
    <div className={styles["box-in-hover"]}>
      <IconButton
        aria-label="submit"
        size="small"
        // color="primary"
        sx={{
            backgroundColor: 'primary.main',
            color: 'white',
            '&:hover': {
            backgroundColor: 'primary.dark',
            },
        }}
        // onClick={() => console.log('Submit')}
       onClick={handleSubmit}

      >
        <SendIcon />
      </IconButton>
    </div>
  )
}

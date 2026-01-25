import React from 'react'
// import styles from "./Form_submit.module.css"
import IconButton from '@mui/material/IconButton'
import ReplayIcon from '@mui/icons-material/Replay'
// import { usePurple } from "../../../context/PurpleContext";
import { usePurple } from "../context/PurpleContext";

export default function Reset_Btn() {
     const { showForm, setShowForm,
    userId, setUserId,
    animal_12, setAnimal_12

      } = usePurple();

    const handleReset = () => {
        setShowForm(true);
        setUserId(0); // reset to first user
        setAnimal_12('');
    }

  return (
    // <div className={styles["box-in-hover"]}>
    <div>
      <IconButton
        aria-label="reset"
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
       onClick={handleReset}

      >
        <ReplayIcon />
      </IconButton>
    </div>
  )
}

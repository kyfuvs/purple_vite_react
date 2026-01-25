<DatePicker
  value={nuDOB}
  onChange={(newValue) => setNuDOB(newValue)}
  format="YYYY-MM-DD"
  label={null}
  slotProps={{
    textField: {
      size: "small",
      inputProps: {
        'aria-label': 'Date of Birth',
      },
      InputProps: {
        sx: {
          width: 36,
          '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
          '& input': { display: 'none' },
        },
      },
    },

    popper: {
      sx: {
        '& .MuiPaper-root': {
          width: 260,              // 🖥 desktop default
        },

        // 📱 mobile screens
        '@media (max-width:600px)': {
          '& .MuiPaper-root': {
            width: 220,
          },
        },
      },
      placement: "bottom-start",
    },
  }}
/>

import { Snackbar, Alert, Button, Box } from '@mui/material'

export default function MUI_messageBox({ open, onClose, message }) {
  return (
    <Snackbar
      open={open}
      onClose={onClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      sx={{
        // keep some space from screen edges on mobile
        px: { xs: 1, sm: 0 },
      }}
    >
      <Alert
        severity="info"
        variant="filled"
        sx={{
          width: '100%',
          maxWidth: {
            xs: '95vw', // 📱 almost full width on mobile
            sm: 400,    // 💻 fixed width on larger screens
          },
        }}
        action={
          <Button
            onClick={onClose}
            sx={{
              border: '1px solid black',
              backgroundColor: '#0a2a66',
              color: 'white',
              minWidth: '48px',
              padding: '2px 10px',
              '&:hover': { backgroundColor: '#08306b' },
            }}
          >
            OK
          </Button>
        }
      >
        {/* Scrollable message */}
        <Box
          sx={{
            maxHeight: {
              xs: 100, // 📱 smaller height on mobile
              sm: 150, // 💻 larger height on desktop
            },
            overflowY: 'auto',
            whiteSpace: 'pre-line',
            pr: 1, // space for scrollbar
          }}
        >
          {message}
        </Box>
      </Alert>
    </Snackbar>
  )
}

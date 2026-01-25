import React, { useEffect } from 'react'
import { usePurple } from "../../context/PurpleContext"
import styles from './Input_4_HOB.module.css'
import {
  Select,
  MenuItem,
  FormControl,
  Box,
  ThemeProvider,
  createTheme
} from '@mui/material'


export default function Input_4_HOB() {
  const { nuHOB, setNuHOB } = usePurple()

  // Generate 00:00 – 23:30 (30-minute steps)
  const times = Array.from({ length: 24 }, (_, hour) =>
    [0, 30].map(min => {
      const hh = hour.toString().padStart(2, '0')
      const mm = min.toString().padStart(2, '0')
      return `${hh}:${mm}`
    })
  ).flat()

  // Default value
  useEffect(() => {
    if (!nuHOB) setNuHOB('00:00')
  }, [nuHOB, setNuHOB])

  // Minimal MUI theme (light/dark safe)
  const muiTheme = createTheme({
    palette: {
      mode: 'dark', // works even inside Tailwind dark mode
    },
    components: {
      MuiMenuItem: {
        styleOverrides: {
          root: {
            fontSize: '0.65rem',
            minHeight: 24,
            paddingTop: 2,
            paddingBottom: 2,
          },
        },
      },
    },
  })

  return (
    <ThemeProvider theme={muiTheme}>
      <Box
        sx={{
          display: 'inline-flex',
          alignItems: 'center',
        }}
      >
        <FormControl
          size="small"
          sx={{
                minWidth: 56,              // default (mobile)
                '@media (min-width: 640px)': {
                minWidth: 64,            // sm
                },
                '@media (min-width: 768px)': {
                minWidth: 72,            // md
                },
                '@media (min-width: 1024px)': {
                minWidth: 80,            // lg
                },
            }}
        >
        <div className={styles["box-in-hover"]}>
          <Select
            value={nuHOB}
            onChange={(e) => setNuHOB(e.target.value)}
            displayEmpty
            sx={{
              fontSize: '0.65rem',
              minHeight: 28,
              paddingY: 0,
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: 'divider',
              },
            }}
            MenuProps={{
              PaperProps: {
                sx: {
                maxHeight: 140,
                width: 72,

                /* ===== Scrollbar (Chrome, Edge, Safari) ===== */
                '&::-webkit-scrollbar': {
                    // width: '6px',
                    width: '2px',
                },
                '&::-webkit-scrollbar-track': {
                    // background: '#e5e7eb',  
                    background: '#2b2c2e', 
                    borderRadius: '4px',
                },
                '&::-webkit-scrollbar-thumb': {
                    // background: '#9ca3af', 
                    background: '#070707',  
                    borderRadius: '4px',
                },
                '&::-webkit-scrollbar-thumb:hover': {
                    background: '#6b7280',
                },

                /* ===== Scrollbar (Firefox) ===== */
                scrollbarWidth: 'thin',
                // scrollbarColor: '#9ca3af #e5e7eb',
                scrollbarColor: '#0d0e0e #2b2c2e',
                },
              },
            }}
          >
            {times.map(time => (
              <MenuItem key={time} value={time}>
                {time}
              </MenuItem>
            ))}
          </Select>
        </div>
        </FormControl>
      </Box>
    </ThemeProvider>
  )
}

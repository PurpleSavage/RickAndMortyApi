import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function CircularIndeterminate() {
  return (
    <div className='fixed z-50 top-0 bottom-0 right-0 left-0 bg-slate-200 bg-opacity-75 flex justify-center items-center'>
        <Box sx={{ display: 'flex' }}>
            <CircularProgress />
        </Box>
    </div>
  );
}
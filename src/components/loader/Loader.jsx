import React, { memo } from 'react';

import {
  CircularProgress,
  Box,
} from '@mui/material/';

function Loader() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
  );
}

export default memo(Loader);


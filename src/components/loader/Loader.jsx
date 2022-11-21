import { React, memo } from 'react';

import {
  CircularProgress,
  Box,
} from '@mui/material/';

export default memo(() => (
  <Box sx={{ display: 'flex' }}>
    <CircularProgress />
  </Box>
));

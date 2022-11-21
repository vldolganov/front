import { React, memo } from 'react';

import { Alert, Stack } from '@mui/material';

export default memo(({ message, severity }) => (
  <Stack sx={{ width: '100%' }} spacing={2}>
    <Alert severity={severity}>{message}</Alert>
  </Stack>
));

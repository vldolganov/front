import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { Alert, Stack } from '@mui/material';

function AlertError({ message, severity }) {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity={severity}>{message}</Alert>
    </Stack>
  );
}

AlertError.propTypes = {
  message: PropTypes.string.isRequired,
  severity: PropTypes.string.isRequired,
};

export default memo(AlertError);

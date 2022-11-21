import axios from 'axios';
import { memo } from 'react';

const api = axios.create({ baseURL: process.env.REACT_APP_URL });

export default memo(api);

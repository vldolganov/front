import React, { memo } from 'react';
import { useLocation } from 'react-router-dom';

import Auth from '../../components/auth/Auth';
import { signInType, signUpType } from '../../constants/authType';

function AuthPage() {
  const location = useLocation();
  const path = location.pathname === '/auth/signup';
  const array = path ? signUpType : signInType;
  const textOnButton = path ? 'signUp' : 'signIn';

  return (
    <div>
      <Auth array={array} textOnButton={textOnButton} condition={path} />
    </div>
  );
}

export default memo(AuthPage);

import React, { memo } from 'react';

import Auth from '../../components/auth/Auth';
import { signInType, signUpType } from '../../constants/authType';

function AuthPage({ modalType }) {
  const path = modalType === 'signUp';
  const array = path ? signUpType : signInType;
  const textOnButton = path ? 'signUp' : 'signIn';

  return (
    <div>
      <Auth array={array} textOnButton={textOnButton} condition={path} />
    </div>
  );
}

export default memo(AuthPage);


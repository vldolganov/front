import { React, memo } from 'react';

import Header from './components/header/Header';
import MainPage from './components/main-page/MainPage';

function App() {
  return (
    <div>
      <Header />
      <MainPage />
    </div>

  );
}
export default memo(App);

import { Outlet } from 'react-router-dom';

import Directory from '../../components/directory/directory.component';

import BottomInfo from '../../components/bottom-info/bottom-info.component';

const Home = () => {
  return (
    <div>
      <Outlet />
      <Directory />
      <BottomInfo />
    </div>
  );
};

export default Home;

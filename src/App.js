import React from 'react';
import RegisterUser from './Components/RegisterUser';
import LatestUsers from './Components/LatestUsers';

const App = () => {
  return (
    <div>
      <h1>User Registry</h1>
      <RegisterUser />
      <LatestUsers />
    </div>
  );
};

export default App;
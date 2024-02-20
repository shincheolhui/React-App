import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>홈페이지</h1>
      {/* navigate 를 이용한 url 이동 */}
      <button onClick={() => navigate('/login/20')}>/login/20</button>
      <button onClick={() => navigate('/login/30')}>/login/30</button>
      <hr />
      <Button variant='primary' className='me-1'>Primary</Button>
      <Button variant='secondary' className='me-1'>secondary</Button>
      <Button variant='success' className='me-1'>success</Button>
      <Button variant='warning' className='me-1'>warning</Button>
      <Button variant='danger' className='me-1'>danger</Button>
      <Button variant='info' className='me-1'>info</Button>
      <Button variant='light' className='me-1'>light</Button>
      <Button variant='dark' className='me-1'>dark</Button>
      <Button variant='link' className='me-1'>link</Button>
    </div>
  );
};

export default Home;

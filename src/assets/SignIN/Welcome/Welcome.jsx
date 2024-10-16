import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getData } from '../../redux/feature/register/registerSlice';

const Welcome = () => {
  const { id } = useParams();
  const [name, setName] = useState('');

  const dispatch = useDispatch();
  const { value, loading } = useSelector((state) => state.register);

  useEffect(() => {
    dispatch(getData());
  }, []);

  useEffect(() => {
    if (!loading) {  
      const user = value.find(user => user.id == id);
      if (user) {
        setName(user.username);
      }
    }
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1 style={{textAlign:"center"}}>Welcome, {name}!</h1>
      <Link style={{textAlign:"center"}} to='/signIn' >Back to Sign In</Link>
    </div>
  );
};

export default Welcome;

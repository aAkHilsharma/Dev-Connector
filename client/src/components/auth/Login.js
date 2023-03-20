import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    console.log('SUCCESS');
  };
  return (
    <>
      <section className='container'>
        <div className='alert alert-danger'>Invalid Credentials</div>
        <h1 className='large text-primary'>Sign In</h1>
        <p className='lead'>
          <i className='fas fa-user'></i>
          Sign Into Your Account
        </p>
        <form action='dashboard.html' onSubmit={onSubmit} className='form'>
          <div className='form-group'>
            <input
              type='email'
              name='email'
              placeholder='Email Address'
              value={email}
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              name='password'
              placeholder='Password'
              minLength='6'
              value={password}
              onChange={onChange}
            />
          </div>
          <input type='submit' value='Login' className='btn btn-primary' />
          <p className='my-1'>
            Don't have an account? <Link to='/register'>Sign Up</Link>
          </p>
        </form>
      </section>
    </>
  );
};

export default Login;

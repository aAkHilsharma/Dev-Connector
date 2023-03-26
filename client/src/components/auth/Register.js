import { Link } from 'react-router-dom';
import { useState } from 'react';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import PropTypes from 'prop-types';
import Alert from '../layout/Alert';
import { register } from '../../actions/auth';

const Register = ({ setAlert, register }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    cpassword: '',
  });

  const { name, email, password, cpassword } = formData;
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== cpassword) {
      setAlert('Passwords do not match', 'danger');
    } else {
      register({ name, email, password });
    }
  };

  return (
    <>
      <section className='container'>
        <Alert />
        <h1 className='large text-primary'>Sign Up</h1>
        <p className='lead'>
          <i className='fas fa-user'></i>
          Create Your Account
        </p>
        <form action='dashboard.html' className='form' onSubmit={onSubmit}>
          <div className='form-group'>
            <input
              type='text'
              placeholder='Name'
              name='name'
              value={name}
              required
              onChange={handleChange}
            />
          </div>
          <div className='form-group'>
            <input
              type='email'
              name='email'
              placeholder='Email Address'
              value={email}
              required
              onChange={handleChange}
            />
            <small className='form-text'>
              This site uses gravatar , so if you want a profile image, use a
              gravatar email
            </small>
          </div>
          <div className='form-group'>
            <input
              type='password'
              placeholder='Password'
              name='password'
              value={password}
              onChange={handleChange}
              minLength={'6'}
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              placeholder='Confirm Password'
              name='cpassword'
              value={cpassword}
              onChange={handleChange}
              minLength={'6'}
            />
          </div>
          <input type='submit' value='Register' className='btn btn-primary' />
          <p className='my-1'>
            Already have an account? <Link to='/login'>Sign In</Link>
          </p>
        </form>
      </section>
    </>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
};

export default connect(null, { setAlert, register })(Register);

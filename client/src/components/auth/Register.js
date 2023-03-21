import { Link } from 'react-router-dom';
import { useState } from 'react';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import PropTypes from 'prop-types';

const Register = ({ setAlert }) => {
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
      setAlert('Passwords donot match', 'danger');
    } else {
      console.log('Success');
    }
  };

  return (
    <>
      <section className='container'>
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
              required
              value={name}
              onChange={handleChange}
            />
          </div>
          <div className='form-group'>
            <input
              type='email'
              name='email'
              placeholder='Email Address'
              value={email}
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
              minLength='6'
              value={password}
              onChange={handleChange}
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              placeholder='Confirm Password'
              name='cpassword'
              minLength='6'
              value={cpassword}
              onChange={handleChange}
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
};

export default connect(null, { setAlert })(Register);

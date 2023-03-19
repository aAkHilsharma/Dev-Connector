const Login = () => {
  return (
    <section className='container'>
      <div className='alert alert-danger'>Invalid Credentials</div>
      <h1 className='large text-primary'>Sign In</h1>
      <p className='lead'>
        <i className='fas fa-user'></i>
        Sign Into Your Account
      </p>
      <form action='dashboard.html' className='form'>
        <div className='form-group'>
          <input type='email' placeholder='Email Address' />
        </div>
        <div className='form-group'>
          <input type='password' placeholder='Password' minlength='6' />
        </div>
        <input type='submit' value='Login' className='btn btn-primary' />
        <p className='my-1'>
          Don't have an account? <a href='register.html'>Sign Up</a>
        </p>
      </form>
    </section>
  );
};

export default Login;

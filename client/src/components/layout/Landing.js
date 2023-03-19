const Landing = () => {
  return (
    <section className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <h1 className='x-large'>Developer Connector</h1>
          <p className='lead'>
            Create developer profile/portfolio, share posts and get help from
            other developers
          </p>
          <div>
            <a className='btn btn-primary' href='register.html'>
              Sign Up
            </a>
            <a className='btn' href='login.html'>
              Login
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;

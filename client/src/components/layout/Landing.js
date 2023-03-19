import { Link } from 'react-router-dom';

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
            <Link className='btn btn-primary' to='/register'>
              Sign Up
            </Link>
            <Link className='btn' to='/login'>
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;

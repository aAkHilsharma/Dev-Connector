import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentUserProfile, deleteAccount } from '../../actions/profile';
import { Link } from 'react-router-dom';
import DashActions from './DashActions';
import Experience from './Experience';
import Education from './Education';
import Spinner from '../layout/Spinner';

const Dashboard = ({
  getCurrentUserProfile,
  auth: { user },
  profile: { profile, loading },
}) => {
  useEffect(() => {
    getCurrentUserProfile();
  }, [getCurrentUserProfile]);
  return loading && profile === null ? (
    <Spinner />
  ) : (
    <>
      <section className='container'>
        <h1 className='large text-primary'>Dashboard</h1>
        <p className='lead'>
          <i className='fa fa-user'></i> Welcome {user && user.name}
        </p>
        {profile !== null ? (
          <>
            <DashActions />
            <Experience experience={profile.experience} />
            <Education education={profile.education} />

            <div className='my-2'>
              <button
                onClick={() => deleteAccount()}
                className='btn btn-danger'
              >
                <i className='fas fa-user-minus'></i> Delete My Account
              </button>
            </div>
          </>
        ) : (
          <>
            <p>You have not yet setup a profile, please add some info</p>
            <Link to='/create-profile' className='btn btn-primary my-1'>
              Create Profile
            </Link>
          </>
        )}
      </section>
    </>
  );
};

Dashboard.propTypes = {
  getCurrentUserProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, {
  getCurrentUserProfile,
  deleteAccount,
})(Dashboard);

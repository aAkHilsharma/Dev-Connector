import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProfiles } from '../../actions/profile';
import Spinner from '../layout/Spinner';
import ProfileItem from './ProfileItem';

const Profiles = ({ getProfiles, profile: { profiles, loading } }) => {
  useEffect(() => {
    getProfiles();
  }, [getProfiles]);

  return (
    <section className='container'>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <h1 className='large text-primary'>DEVELOPERS</h1>
          <p className='lead'>
            <i className='fab fa-connectdevelop'></i>
            Browse and connect with developers
          </p>
          <div className='profiles'>
            {profiles.length > 0 ? (
              profiles.map((profile) => (
                <ProfileItem key={profile._id} profile={profile} />
              ))
            ) : (
              <h4>No Profiles found...</h4>
            )}
          </div>
        </>
      )}
    </section>
  );
};

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapToStateProps = (state) => ({
  profile: state.profile,
});

export default connect(mapToStateProps, { getProfiles })(Profiles);

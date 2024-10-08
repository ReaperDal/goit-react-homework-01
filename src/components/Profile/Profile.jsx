import PropTypes from 'prop-types';
import styles from './Profile.module.css';


const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={styles.profile}>
        <div>
            <img
              className={styles.profileImage}
              src={image}
              alt={`${name} avatar`} 
            />
            <p className={styles.name}>{name}</p>
            <p className={styles.tag}>@{tag}</p>
            <p className={styles.location}>{location}</p>
        </div>

        <ul className={styles.stats}>
            <li className={styles.statItem}>
                <span className={styles.statLabel}>Followers</span>
                <span className={styles.statValue}>{stats.followers}</span>
            </li>
            <li className={styles.statItem}>
                <span className={styles.statLabel}>Views</span>
                <span className={styles.statValue}>{stats.views}</span>
            </li>
            <li className={styles.statItem}>
                <span className={styles.statLabel}>Likes</span>
                <span className={styles.statValue}>{stats.likes}</span>
            </li>
        </ul>
    </div>
  )
}

Profile.propTypes = {
     name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number,
        views: PropTypes.number,
        likes: PropTypes.number,
  })
};

export default Profile

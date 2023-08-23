import clsx from 'clsx';
import css from './FriendListItem.module.css';
import PropTypes from 'prop-types';
export const FriendListItem = ({ friend }) => (
  <li className={css.item}>
    <span
      className={clsx(
        css.status,
        friend.isOnline ? css.statusOnLine : css.statusOffLine
      )}
    >
      &#x00B7;
    </span>
    <img
      className={css.avatar}
      src={friend.avatar}
      alt="User avatar"
      width="48"
    />
    <p className={css.name}>{friend.name}</p>
  </li>
);

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};

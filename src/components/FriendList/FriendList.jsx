import css from './FriendList.module.css';
import clsx from 'clsx';

export const FriendListItem = ({ friends }) => {
  return (
    <>
      {friends.map(friend => (
        <li key={friend.id} className={css.item}>
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
      ))}
    </>
  );
};
export const FriendlyList = ({ friends }) => {
  return (
    <>
      <ul className={css.friendList}>
        <FriendListItem friends={friends}></FriendListItem>
      </ul>
    </>
  );
};

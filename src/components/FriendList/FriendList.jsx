import css from './FriendList.module.css';

import { FriendListItem } from '../../components';

export const FriendlyList = ({ friends }) => {
  return (
    <>
      <ul className={css.friendList}>
        {friends.map(friend => (
          <FriendListItem
            key={friend.id}
            name={friend.name}
            avatar={friend.avatar}
            isOnline={friend.isOnline}
          />
        ))}
      </ul>
    </>
  );
};

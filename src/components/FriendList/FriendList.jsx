export const FriendListItem = ({ stats }) => {
  //   console.log(
  //     friends.map(friend => {
  //       <>
  //         <li className="item">
  //           <span className="status">{friend.isOnline}</span>
  //           <img
  //             className="avatar"
  //             src={friend.avatar}
  //             alt="User avatar"
  //             width="48"
  //           />
  //           <p className="name">{friend.name}</p>
  //           <span>elo</span>
  //         </li>
  //       </>;
  //     })
  //   );

  console.log(
    stats.map(status => {
      return stats.name;
    })
  );
  return;
};

export const FriendlyList = stats => {
  return (
    <>
      <ul className="friend-list">
        <FriendListItem stats={stats}></FriendListItem>
      </ul>
    </>
  );
};

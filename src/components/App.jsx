import user from '../data/user';
import data from '../data/data';
import dataFriends from '../data/friends';
import dataTransaction from '../data/transactions';
import {
  Profile,
  Statistics,
  FriendlyList,
  TransactionHistory,
} from 'components';

const appStyle = {
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'spaceAround',
  margin: '50px',
  alignItems: 'center',
  fontSize: 40,
  color: '#010101',
  gap: '20px',
};

export const App = () => {
  //console.log(dataFriends.map(ob => ob.name));
  return (
    <div style={appStyle}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendlyList friends={dataFriends} />
      <TransactionHistory dataTransaction={dataTransaction} />
    </div>
  );
};

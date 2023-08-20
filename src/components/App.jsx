import user from '../data/user';
import data from '../data/data';
import dataFriends from '../data/friends';
import dataTransaction from '../data/transactions';
import {
  Profile,
  Statistics,
  FriendList,
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
  return (
    <div style={appStyle}>
      <Profile user={user} />
      <Statistics title="Upload stats" data={data} />
      <Statistics data={data} />
      <FriendList friends={dataFriends} />
      <TransactionHistory dataTransaction={dataTransaction} />
    </div>
  );
};

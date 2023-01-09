// props
import users from "data/user.json";
import data from "data/data.json";
import friends from "data/friends.json";
import transactions from "data/transactions.json";
// components
import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statis';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div
      style={{

        display: 'grid',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile users={users} />
      <Statistics title="Upload stats" statis={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div >
  );
};



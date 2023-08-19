import css from './TransactionHistory.module.css';
import { TransactionItem } from '../../components';

export const TransactionHistory = ({ dataTransaction }) => {
  return (
    <>
      <table className={css.transactionHistory}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>
          {dataTransaction.map((transaction, index) => (
            <TransactionItem
              key={transaction.id}
              type={transaction.type}
              amount={transaction.amount}
              currency={transaction.currency}
              index={index}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

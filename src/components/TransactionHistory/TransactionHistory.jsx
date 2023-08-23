import css from './TransactionHistory.module.css';
import { TransactionItem } from '../../components';
import PropTypes from 'prop-types';

export const TransactionHistory = ({ dataTransaction }) => (
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
          transaction={transaction}
          index={index}
        />
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  dataTransaction: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

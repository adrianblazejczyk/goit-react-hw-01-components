import css from './TransactionItem.module.css';
import PropTypes from 'prop-types';
export const TransactionItem = ({ transaction, index }) => (
  <tr className={index % 2 ? css.bgcGray : css.bgcWhite}>
    <td>{transaction.type}</td>
    <td>{transaction.amount}</td>
    <td>{transaction.currency}</td>
  </tr>
);

TransactionItem.propTypes = {
  index: PropTypes.number.isRequired,
  transaction: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }),
};

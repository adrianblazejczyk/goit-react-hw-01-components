import css from './TransactionItem.module.css';
import PropTypes from 'prop-types';
export const TransactionItem = ({ type, amount, currency, index }) => {
  return (
    <>
      <tr className={index % 2 ? css.bgcGray : css.bgcWhite}>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
    </>
  );
};

TransactionItem.propTypes = {
  index: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

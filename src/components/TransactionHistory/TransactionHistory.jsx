import css from './TransactionHistory.module.css';

export const ItemTransaction = ({ transactions }) => {
  return (
    <>
      {transactions.map(transaction => (
        <tr key={transaction.id}>
          <td>{transaction.type}</td>
          <td>{transaction.amount}</td>
          <td>{transaction.currency}</td>
        </tr>
      ))}
    </>
  );
};

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
          <ItemTransaction transactions={dataTransaction} />
        </tbody>
      </table>
    </>
  );
};

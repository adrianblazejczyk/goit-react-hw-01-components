import css from './StatisticsItem.module.css';
import clsx from 'clsx';
import PropTypes from 'prop-types';

export const StatisticsItem = ({ id, label, percentage }) => (
  <li
    className={clsx(
      css.item,
      label === '.pdf' && css.pdf,
      label === '.docx' && css.docx,
      label === '.mp3' && css.mp3,
      label === '.psd' && css.psd
    )}
  >
    <span className={css.label}>{label}</span>
    <span className={css.percentage}>{percentage}%</span>
  </li>
);

StatisticsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

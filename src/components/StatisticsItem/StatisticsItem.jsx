import css from './StatisticsItem.module.css';
import clsx from 'clsx';
import PropTypes from 'prop-types';

export const StatisticsItem = ({ data }) => (
  <li
    className={clsx(
      css.item,
      data.label === '.pdf' && css.pdf,
      data.label === '.docx' && css.docx,
      data.label === '.mp3' && css.mp3,
      data.label === '.psd' && css.psd
    )}
  >
    <span className={css.label}>{data.label}</span>
    <span className={css.percentage}>{data.percentage}%</span>
  </li>
);

StatisticsItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};

import css from './Statistics.module.css';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { StatisticsItem } from '../../components';

export const Statistics = ({ title, data }) => (
  <section className={clsx(css.statistics, !title && css.heightSmall)}>
    {title && <h2 className={css.title}>{title}</h2>}

    <ul className={css.statList}>
      {data.map((data, index) => (
        <StatisticsItem key={data.id} data={data} />
      ))}
    </ul>
  </section>
);

Statistics.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

import css from './Statistics.module.css';
import clsx from 'clsx';
import { StatisticsItem } from '../../components';

export const Statistics = ({ title, data }) => (
  <section className={clsx(css.statistics, !title && css.heightSmall)}>
    {title && <h2 className={css.title}>{title}</h2>}

    <ul className={css.statList}>
      {data.map((data, index) => (
        <StatisticsItem
          key={data.id}
          label={data.label}
          percentage={data.percentage}
        />
      ))}
    </ul>
  </section>
);

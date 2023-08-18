import css from './Statistics.module.css';
import clsx from 'clsx';
export const Statistics = ({ title, stats }) => {
  return (
    <>
      <section className={clsx(css.statistics, !title && css.heightSmall)}>
        {title && <h2 className={css.title}>{title}</h2>}

        <ul className={css.statList}>
          {stats.map((stats, index) => (
            <li
              key={stats.id}
              className={clsx(
                css.item,
                stats.label === '.pdf' && css.pdf,
                stats.label === '.docx' && css.docx,
                stats.label === '.mp3' && css.mp3,
                stats.label === '.psd' && css.psd
              )}
            >
              <span className={css.label}>{stats.label}</span>
              <span className={css.percentage}>{stats.percentage}%</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

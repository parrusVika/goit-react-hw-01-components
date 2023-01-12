import PropTypes from "prop-types";
import css from './Statistics.module.css';

export function Statistics({ title, statis }) {
    return (
        <div className={css.title}>
            {title && <h2 className="title">{title}</h2>}

            <ul className={css.statlist}>
                {statis.map(({ id, label, percentage }) => (
                    <li className={css.statitem} key={id}>
                        <span className={css.label}>{label}</span>
                        <span className={css.percentage}>{percentage}%</span>
                    </li>

                ))}
            </ul>
        </div>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    statis: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    ),
};



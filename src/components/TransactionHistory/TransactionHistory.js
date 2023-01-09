import PropTypes from "prop-types";
import css from "./TransactionHistory.module.css";

export function TransactionHistory({ items }) {
    return (<table className={css.transaction}>

        <thead>

            <tr >
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </thead>
        {items.map(({ id, type, amount, currency }) => (

            <tbody>
                <tr key={id}>
                    <td>{type}</td>
                    <td>{amount}</td>
                    <td>{currency}</td>
                </tr>

            </tbody>))}
    </table>)

}


TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    ),
};
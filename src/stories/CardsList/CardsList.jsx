import PropTypes from "prop-types";
import './CardsList.scss';

function CardsList({ children, spacing = 2, column = 2 }) {
  const style = {
    display: "grid",
    gridTemplateColumns: `repeat(${column}, 1fr)`,
    gridRowGap: `${spacing * 0.25}rem`,
    alignContent: "space-around",
    justifConteny: "space-between",
  }

  return(
    <div className="page-container">
      <section className="section-container">
        <div className="section-container__content">
            <div style={style}>{children}</div>
        </div>
      </section>
    </div>
  )
}

CardsList.propTypes = {
  children: PropTypes.number,
  spacing: PropTypes.number,
  column: PropTypes.number,
}

CardsList.defaultProps = {
  children: 4,
  spacing: 10,
  column: 2,
};

export default CardsList;
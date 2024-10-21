import PropTypes from 'prop-types';
import './Bottle.css'
const Bottle = ({ bottle, handleAddCart }) => {

    const { name, img, price } = bottle
    return (
        <div className="bottle">
            <img src={img} alt="" />
            <h3>Name: {name}</h3>
            <h3>Price: {price}$</h3>
            <button onClick={() => handleAddCart(bottle)}>Perches</button>
        </div>
    );
};

Bottle.propTypes = {
    bottle: PropTypes.object.isRequired,
    handleAddCart: PropTypes.func.isRequired
}


export default Bottle;
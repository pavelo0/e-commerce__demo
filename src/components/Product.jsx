const Product = ({ id, title, price, thumbnail }) => {
    return (
        <div key={id} style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
            <h3>{title}</h3>
            <h4>${price}</h4>
            <img src={thumbnail} alt={title} />
            <button>Add to cart</button>
        </div>
    );
};

export default Product;

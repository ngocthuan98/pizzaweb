function MenuItem({ image, name, price }) {
    return (
        <div className="menuItem">
            <div className="menu-top">
                <div className="image" style={{ backgroundImage: `url(${image})` }}></div>
                <div className="buy">Buy Now</div>
            </div>
            <h1>{name}</h1>
            <p>${price}</p>
        </div>
    );
}

export default MenuItem;

import '../style/Home.css';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="homepage">
            <div className="headerContainer">
                <h1>Pedro's Pizzeria</h1>
                <p>PIZZA TO FIT ANY TASTE</p>
                <Link to="/menu">
                    <button>ORDER</button>
                </Link>
            </div>
        </div>
    );
}

export default Home;

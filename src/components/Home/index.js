import {Link} from "react-router-dom";
import './index.css';

const Home = () => {
    return (
        <div className="home">
            <Link to="/Productpage"><button className="home-button">Dynamic Layout (Task1)</button></Link>
            <Link to="/nestedcheckbox"><button className="home-button">Nested checkboxes (Task 2)</button></Link>
        </div>
    )
}

export default Home;
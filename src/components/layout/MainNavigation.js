import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css"; //deci e o variabile js

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>My Trips Planner</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Trips</Link>
          </li>
          <li>
            <Link to="/favourites">Favourites</Link>
          </li>
          <li>
            <Link to="/new-trip">Add New Trip</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;

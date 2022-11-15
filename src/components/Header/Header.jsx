import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.container}>
      <div>
        <img src="" alt="" />
      </div>
      <nav>
        <ul className={styles.menu}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Header;

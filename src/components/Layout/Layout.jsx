import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import styles from "./Layout.module.css";

const Layout = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
export default Layout;

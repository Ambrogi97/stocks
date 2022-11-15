import styles from "./styles/Home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.team}>
        <h1>Teams</h1>
        <p>Juan Ambrogi</p>
        <p>Fransisco Bondino</p>
      </div>
      <div className={styles.image}>
        <img
          src="https://startupsmagazine.co.uk/sites/default/files/2020-11/AdobeStock_291895827ed.jpg"
          alt="hero"
        />
      </div>
    </div>
  );
};
export default Home;

import Design from "../Design";
import Header from "../Header/Header";
import styles from "./Homepage.module.css";

// import bgImage from "./paper.jpg";

function HomePage() {
  return (
    <div
      className={styles.homePage}
      // style={{
      //   backgroundImage: `url(${bgImage})`,
      //   backgroundRepeat: "no-repeat",
      //   backgroundSize: "cover",
      // }}
    >
      <Header />
      <div className={styles.line1}></div>
      <div className={styles.line2}></div>
      <div className={styles.bg}>
        <Design />
      </div>
    </div>
  );
}

export default HomePage;

import Design from "../Design";
import Header from "../Header/Header";
import styles from "./Homepage.module.css";
import Footer from "../Footer/Footer";

// import bgImage from "./paper.jpg";

function HomePage() {
  return (
    <div className="container">
      <div className="content">
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
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;

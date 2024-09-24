import styles from "./quote.module.css";
import { Quotation } from "../../assets/images";

export default function Quote() {
  return (
    <div className={styles.portfolioContainer}>
      <aside className={styles.asideContainer}>
        <div className={styles.topSide}>
          <img src={Quotation} alt="Quotes" />
          <p>Mass moves mass, Mass moves mass</p>
          <img src={Quotation} alt="Quotes" />
        </div>
        <div className={styles.bottomSide}>
          <p>- Newtons' Law</p>
        </div>
      </aside>
    </div>
  );
}

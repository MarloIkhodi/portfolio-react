import styles from "./quote.module.css";
import { Quotation } from "../../assets/images";

export default function Quote() {
  return (
    <div className={styles.portfolioContainer}>
      <aside className={styles.asideContainer}>
        <div>
          <img src={Quotation} alt="Quotes" />
          <p>Mass moves mass</p>
          <img src={Quotation} alt="Quotes" />
        </div>
        <div>
          <p>- Newtons' Law</p>
        </div>
      </aside>
    </div>
  );
}

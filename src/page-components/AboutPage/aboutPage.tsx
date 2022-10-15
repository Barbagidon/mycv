import { NumbersList } from "../../components/NumbersList/NumbersList";
import styles from "./aboutPage.module.css";

export function AboutPage(): JSX.Element {
  return (
    <div className={styles.aboutpage}>
      <NumbersList className={styles.numberlist} number={62}></NumbersList>
      <div className={styles.codetextWrapper}>
        <div className={styles.textInner}>
          <span className={styles.const}>const</span>
          <span className={styles.varname}>myName</span>
          <span className={styles.equals}>=</span>
          <span className={styles.text}>'Денис'</span>
        </div>

        <div className={styles.textInner}>
          <span className={styles.const}>const</span>
          <span className={styles.varname}>mySurname</span>
          <span className={styles.equals}>=</span>
          <span className={styles.text}>'Штиллер'</span>
        </div>
      </div>
    </div>
  );
}

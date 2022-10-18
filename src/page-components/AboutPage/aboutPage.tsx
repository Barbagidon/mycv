import { AboutObjects } from "../../components/AboutObjects/AboutObjects";
import { VarText } from "../../components/VarText/VarText";
import { aboutPageProps } from "./aboutPage.props";
import styles from "./aboutPage.module.css";

export function AboutPage({ ...props }: aboutPageProps): JSX.Element {
  return (
    <div {...props}>
      <VarText varname={"myName"} text={`'Денис'`}></VarText>
      <VarText varname={"mySurname"} text={`'Штиллер'`}></VarText>
      <VarText varname={"university"} text={`'SPBGASU'`}></VarText>
      <VarText
        varname={"myGitHub"}
        text={
          <a target={"_blank"} href="https://github.com/Barbagidon">
            <span className={styles.gitlink}>github.com/Barbagidon</span>
          </a>
        }
      ></VarText>
      <AboutObjects />
    </div>
  );
}

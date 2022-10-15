import { AboutObjects } from "../../components/AboutObjects/AboutObjects";
import { VarText } from "../../components/VarText/VarText";
import { aboutPageProps } from "./aboutPage.props";

export function AboutPage({ ...props }: aboutPageProps): JSX.Element {
  return (
    <div {...props}>
      <VarText varname={"myName"} text={"Денис"}></VarText>
      <VarText varname={"mySurname"} text={"Штиллер"}></VarText>
      <VarText varname={"university"} text={"SPBGASU"}></VarText>
      <AboutObjects />
    </div>
  );
}

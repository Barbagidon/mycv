import cn from "classnames";

import { SkillsProps } from "./Skills.props";
import styles from "./Skills.module.css";

export const Skills = ({ className, ...props }: SkillsProps): JSX.Element => {
  return (
    <ul {...props} className={cn(className, styles.skilllist)}>
      <li>MY_SKILLS</li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  );
};

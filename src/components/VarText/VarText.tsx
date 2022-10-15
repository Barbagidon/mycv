import cn from "classnames";

import { VarTextProps } from "./VarText.props";
import styles from "./Htag.module.css";

export const VarText = ({
  varname,
  text,
  className,
  ...props
}: VarTextProps): JSX.Element => {
  return (
    <div {...props} className={cn(styles.textInner, className)}>
      <span className={styles.variable}>const</span>
      <span className={styles.varname}>{varname}</span>
      <span className={styles.equals}>=</span>
      <span className={styles.text}>{text}</span>
    </div>
  );
};

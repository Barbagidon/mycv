import cn from "classnames";

import { NumberListProps } from "./NumbersList.props";
import styles from "./NumbersList.module.css";
import { numberGeneration } from "../../helpers/numberGeneration";

export const NumbersList = ({
  number,
  className,
  ...props
}: NumberListProps): JSX.Element => {
  const stringNumber = numberGeneration(number);

  return (
    <ul {...props} className={cn(styles.numberlist, className)}>
      {stringNumber.map((item) => {
        return (
          <li className={styles.numberItem} key={item}>
            {item}
          </li>
        );
      })}
    </ul>
  );
};

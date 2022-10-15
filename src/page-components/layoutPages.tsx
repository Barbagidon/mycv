import { NumbersList } from "../components/NumbersList/NumbersList";
import styles from "./layoutPages.module.css";
import cn from "classnames";
import { FunctionComponent } from "react";

export function LayoutPages({ num, children, ...props }): JSX.Element {
  return (
    <div {...props} className={cn(styles.aboutpage)}>
      <NumbersList className={styles.numberlist} number={num}></NumbersList>
      <div className={styles.codetextWrapper}>{children}</div>
    </div>
  );
}

export const layoutForPagesContent = <T extends Record<string, unknown>>(
  Component: FunctionComponent<T>,
  num: number
) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <LayoutPages num={num}>
        <Component {...props} />
      </LayoutPages>
    );
  };
};

import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface NumberListProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {
  number: number;
}

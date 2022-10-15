import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface VarTextProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  varname: string;
  text: string;
}

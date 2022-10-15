import { NavigationProps } from "./NavigationProps.props";
import { NavBtn } from "../../components/NavBtn/NavBtn";
import styles from "./Navigation.module.css";
import { btnText } from "../../helpers/textBtn";
import Link from "next/link";
import { useRouter } from "next/router";

export const Navigation = ({
  className,
  ...props
}: NavigationProps): JSX.Element => {
  const router = useRouter();
  return (
    <nav {...props} className={styles.nav}>
      {btnText.map((item) => (
        <Link key={item.text} href={item.link}>
          <NavBtn
            active={item.link === router.pathname ? "active" : "notactive"}
          >
            {item.text}
          </NavBtn>
        </Link>
      ))}
    </nav>
  );
};

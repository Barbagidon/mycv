import { SidebarProps } from "./Sidebar.props";
import styles from "./Sidebar.module.css";
import cn from "classnames";
import { Htag } from "../../components/Htag/Htag";
import { Skills } from "../../components/Skills/Skills";

export const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
  return (
    <div {...props} className={cn(styles.sidebar, className)}>
      <div className={styles.avatarwrapper}>
        <img src="./avatar.png" alt="avatar" />
        <Htag tag="h3" className={styles.name}>
          Денис Штиллер
        </Htag>
        <div className={styles.hello}>Hello world!✋</div>
        <div className={styles.frontend}>Frontent-developer</div>
      </div>

      <hr className={styles.line} />

      <Skills></Skills>
    </div>
  );
};

import cn from "classnames";
import { SkillsProps } from "./Skills.props";
import styles from "./Skills.module.css";
import { Htag } from "../Htag/Htag";

import FolderIcons from "./Icons/folder.svg";
import CloseFolderIcon from "./Icons/closeFolder.svg";
import NextIcon from "./Icons/nextIcon.svg";
import ReactIcon from "./Icons/reactIcon.svg";
import ReduxIcon from "./Icons/reduxIcon.svg";
import TsIcon from "./Icons/tsicon.svg";
import JavascriptIcon from "./Icons/javascriptIcon.svg";
import CSSIcon from "./Icons/CssIcon.svg";
import SassIcon from "./Icons/SassIcon.svg";
import HTMLIcon from "./Icons/HTMLIcon.svg";
import GitIcon from "./Icons/GitIcon.svg";
import ArrowIcon from "./Icons/arrowIcon.svg";
import { useAppDispatch } from "../../hooks";
import { useSelector } from "react-redux";
import { selectShowLists } from "../../features/Lists/list-selectors";
import { showSkillsList } from "../../features/Lists/lists-slice";
import { PayloadAction } from "@reduxjs/toolkit";

export const Skills = ({ className, ...props }: SkillsProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const { skillsList: visibleSkillsList } = useSelector(selectShowLists);

  return (
    <div
      className={cn(styles.listwrapper, {
        [styles.withoutscroll]: !visibleSkillsList,
      })}
    >
      <div className={styles.headerItem}>
        <button
          onClick={(): PayloadAction<boolean> =>
            dispatch(showSkillsList(!visibleSkillsList))
          }
          className={styles.arrowbutton}
        >
          <ArrowIcon
            className={cn(styles.arrowicon, {
              [styles.active]: visibleSkillsList,
              [styles.notactive]: !visibleSkillsList,
            })}
          />
        </button>
        {visibleSkillsList ? <FolderIcons /> : <CloseFolderIcon />}
        <Htag className={styles.listheader} tag="h3">
          MY_SKILLS
        </Htag>
      </div>
      <ul
        {...props}
        className={cn(className, styles.skilllist, {
          [styles.notactiveitem]: !visibleSkillsList,
        })}
      >
        <li
          className={cn(styles.listItem, {
            [styles.activeItem]: visibleSkillsList,
            [styles.notactiveitem]: !visibleSkillsList,
          })}
        >
          <NextIcon />
          <span className={styles.listItemText}>Next.js</span>
        </li>
        <li
          className={cn(styles.listItem, {
            [styles.activeItem]: visibleSkillsList,
            [styles.notactiveitem]: !visibleSkillsList,
          })}
        >
          <ReactIcon />
          <span className={styles.listItemText}>React.js</span>
        </li>
        <li
          className={cn(styles.listItem, {
            [styles.activeItem]: visibleSkillsList,
            [styles.notactiveitem]: !visibleSkillsList,
          })}
        >
          <ReduxIcon />
          <span className={styles.listItemText}>Redux-toolkit</span>
        </li>
        <li
          className={cn(styles.listItem, {
            [styles.activeItem]: visibleSkillsList,
            [styles.notactiveitem]: !visibleSkillsList,
          })}
        >
          <TsIcon />
          <span className={styles.listItemText}>Typescript</span>
        </li>
        <li
          className={cn(styles.listItem, {
            [styles.activeItem]: visibleSkillsList,
            [styles.notactiveitem]: !visibleSkillsList,
          })}
        >
          <JavascriptIcon />
          <span className={styles.listItemText}>Javascript</span>
        </li>
        <li
          className={cn(styles.listItem, {
            [styles.activeItem]: visibleSkillsList,
            [styles.notactiveitem]: !visibleSkillsList,
          })}
        >
          <CSSIcon />
          <span className={styles.listItemText}>CSS</span>
        </li>
        <li
          className={cn(styles.listItem, {
            [styles.activeItem]: visibleSkillsList,
            [styles.notactiveitem]: !visibleSkillsList,
          })}
        >
          <SassIcon />
          <span className={styles.listItemText}>Sass</span>
        </li>
        <li
          className={cn(styles.listItem, {
            [styles.activeItem]: visibleSkillsList,
            [styles.notactiveitem]: !visibleSkillsList,
          })}
        >
          <HTMLIcon />
          <span className={styles.listItemText}>HTML</span>
        </li>
        <li
          className={cn(styles.listItem, {
            [styles.activeItem]: visibleSkillsList,
            [styles.notactiveitem]: !visibleSkillsList,
          })}
        >
          <GitIcon />
          <span className={styles.listItemText}>git</span>
        </li>
      </ul>
    </div>
  );
};

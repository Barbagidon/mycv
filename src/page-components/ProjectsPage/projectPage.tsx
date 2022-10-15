import { VarText } from "../../components/VarText/VarText";
import styles from "./projectPage.module.css";
import { ProjectPageProps } from "./projectPage.props";

import { ProjectsObjects } from "../../components/ProjectsObjects/ProjectsObjects";

export function ProjectPage({ ...props }: ProjectPageProps): JSX.Element {
  return (
    <div {...props}>
      <VarText
        text={`"Marvel information portal"`}
        varname="projectName"
      ></VarText>
      <VarText
        varname={"projectLink"}
        text={
          <a
            className={styles.link}
            target={"_blank"}
            href="https://marvelnext1.vercel.app/characters/1"
          >
            "PRESS"
          </a>
        }
      ></VarText>
      <VarText
        varname={"projectCodeLink"}
        text={
          <a
            className={styles.link}
            target={"_blank"}
            href="https://github.com/Barbagidon/marvelnext"
          >
            "PRESS"
          </a>
        }
      ></VarText>

      <ProjectsObjects
        varName={"aboutproject"}
        projectTitle={`'Веб приложение с героями Marvel'`}
        projectDescription={`'Помимо вывода списка персонажей, реализовал возможность получения случайного героя, поиска героя по имени и просмотра информации о нем'`}
        stackTitle={`'Стек проекта'`}
        stackDescr={`'Next.js + Typescript'`}
      ></ProjectsObjects>

      <VarText text={`"Owltop courses"`} varname="projectName"></VarText>
      <VarText
        varname={"projectLink"}
        text={
          <a
            className={styles.link}
            target={"_blank"}
            href="https://topapp-two.vercel.app/courses/graphic-design"
          >
            "PRESS"
          </a>
        }
      ></VarText>
      <VarText
        varname={"projectCodeLink"}
        text={
          <a
            className={styles.link}
            target={"_blank"}
            href="https://github.com/Barbagidon/topapp"
          >
            "PRESS"
          </a>
        }
      ></VarText>

      <ProjectsObjects
        varName={"aboutproject"}
        projectTitle={`'Веб приложение с многоуровневым меню для поиска и выбора курса'`}
        projectDescription={`'Реализован рейтинг и формы отзывов с валидацией,
        реализована доступность для скринридеров и клавиатуры'`}
        stackTitle={`'Стек проекта'`}
        stackDescr={`'Next.js + Typescript'`}
      ></ProjectsObjects>

      <VarText text={`"Country Flags"`} varname="projectName"></VarText>
      <VarText
        varname={"projectLink"}
        text={
          <a
            className={styles.link}
            target={"_blank"}
            href="https://countries-rtk-typescript.vercel.app/"
          >
            "PRESS"
          </a>
        }
      ></VarText>
      <VarText
        varname={"projectCodeLink"}
        text={
          <a
            className={styles.link}
            target={"_blank"}
            href="https://github.com/Barbagidon/countries-rtk-typescript"
          >
            "PRESS"
          </a>
        }
      ></VarText>

      <ProjectsObjects
        varName={"aboutproject"}
        projectTitle={`'Веб приложение со списком стран мира'`}
        projectDescription={`'Реализован роутинг, вывод детальной информации о каждой стране, фильтры и смена темы'`}
        stackTitle={`'Стек проекта'`}
        stackDescr={`'React.js + Typescript + Redux Toolkit'`}
      ></ProjectsObjects>
    </div>
  );
}

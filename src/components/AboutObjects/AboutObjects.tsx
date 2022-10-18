import cn from "classnames";

import { AboutObjectsProps } from "./AboutObjects.props";
import styles from "./AboutObjects.module.css";
import { VarText } from "../VarText/VarText";
import { ObjectText } from "../ObjectText/ObjectText";

export const AboutObjects = ({
  className,
  ...props
}: AboutObjectsProps): JSX.Element => {
  return (
    <>
      <div {...props} className={cn(styles.variablesInner, className)}>
        <VarText varname={"aboutMe"} />
        <span className={styles.literall}>{"{"}</span>
      </div>

      <ul className={cn(styles.objecttextwrapper, styles.about)}>
        <li className={styles.objecttext}>
          <ObjectText
            objKey={`'Очень люблю учиться и очень люблю фронтенд'`}
            objValue={`'Обучаюсь от 4 часов в день и даже веду телеграм канал об этом, чтобы следить за своими успехами и мотивировать других. Вот ссылка: `}
          >
            <a
              className={styles.tlglink}
              target="_blank"
              href="https://t.me/disajs"
            >
              https://t.me/disajs
            </a>
          </ObjectText>
        </li>
        <li className={styles.objecttext}>
          <ObjectText
            objKey={`'Готов изучать новое'`}
            objValue={`'До того, как я начал погружаться во Frontend разработку, я вообще ничего не знал про мир IT, а сейчас ищу работу по этому профилю. Очень горжусь тем , что смог переквалифицироваться.'`}
          ></ObjectText>
        </li>
        <li className={styles.objecttext}>
          <ObjectText
            objKey={`'Умею правильно распределять время'`}
            objValue={`'У меня есть тудулист(приложение habitica), где я контролирую выполнение всех поставленных на день задач. Долго приучал себя, но это того стоило.'`}
          ></ObjectText>
        </li>
        <li className={styles.objecttext}>
          <ObjectText
            objKey={`'Не люблю недоделанную работу'`}
            objValue={`'В учебных проектах стараюсь довести код до максимально возможного для меня идеального состояния. Очень не люблю, когда что - то остается недоделанным.'`}
          ></ObjectText>
        </li>
        <li className={styles.objecttext}>
          <ObjectText
            objKey={`'Легко уживаюсь в любом коллективе'`}
            objValue={`'Работал в продажах и ни разу не сталкивался с конфликтными ситуациями. Мне нравится, когда дружелюбно и весело.'`}
          ></ObjectText>
        </li>
        <li className={styles.objecttext}>
          <ObjectText
            objKey={`'Очень люблю обучать'`}
            objValue={`'На одном из предыдущих мест работы сам сделал ряд обучающих видео для пользователей и сотрудников. Это решило частые вопросы от первых и значительно облегчило начало пути в компании для вторых.'`}
          ></ObjectText>
        </li>
      </ul>
      <span className={styles.literall}>{"}"}</span>

      <div {...props} className={cn(styles.variablesInner, className)}>
        <VarText varname={"placesOfWork"} />
        <span className={styles.literall}>{"{"}</span>
      </div>
      <div className={cn(styles.objecttextwrapper, styles.placeofworkwrapper)}>
        <div className={styles.objectkey}>{"cryptoCurrencyExchange: {"}</div>
        <ul className={cn(styles.secondkeyswrapper, styles.placesOfWork)}>
          <li className={cn(styles.secondkeyskeys)}>
            <ObjectText
              objKey={`'Писал тз для разработчиков по результатам анализа других криптопроектов'`}
              objValue={`'Анализировал конкурентов, смотрел, что есть у них, чего нет у нас, составлял тз и отправлял разработчикам.'`}
            ></ObjectText>
          </li>
          <li className={styles.secondkeyskeys}>
            <ObjectText
              objKey={`'Работал с админкой биржи'`}
              objValue={`'Контроль торгов, поведения юзеров, выводов, депозитов рубля и криптовалюты.'`}
            ></ObjectText>
          </li>
          <li className={styles.secondkeyskeys}>
            <ObjectText
              objKey={`"Анализ блокчейна"`}
              objValue={`"Следил за транзакциями в блокчейне для анализа реферальных структур и поведения юзеров."`}
              className={styles.secondkeyskeys}
            ></ObjectText>
          </li>
          <li className={styles.secondkeyskeys}>
            <ObjectText
              objKey={`"Сделал ряд обучающих видеоуроков для пользователей"`}
              objValue={`'Тем самым решил большую часть однотипных вопросов юзеров'`}
              className={styles.secondkeyskeys}
            ></ObjectText>
          </li>
          <li className={styles.secondkeyskeys}>
            <ObjectText
              objKey={`'Писал инструкции для новых сотрудников и обучал их'`}
              objValue={`"Очень люблю обучать!"`}
              className={styles.secondkeyskeys}
            ></ObjectText>
          </li>
          <li className={styles.secondkeyskeys}>
            {" "}
            <ObjectText
              objKey={`"Оперативно решал вопросы клиентов(Zendesk, Telegram)"`}
              objValue={`'Начиная от того "как зарегистрироваться" , заканчивая вопросами по депозитам и выводам'`}
              className={styles.secondkeyskeys}
            ></ObjectText>
          </li>
        </ul>
        <span className={styles.literallInObject}>{"},"}</span>
      </div>
      <div className={styles.objecttextwrapper}>
        <div className={styles.objectkey}>{"levisShop: {"}</div>
        <ul className={styles.secondkeyswrapper}>
          <li className={cn(styles.secondkeyskeys)}>
            <ObjectText
              objKey={`'Работал с клиентами'`}
              objValue={`'Прямые продажи'`}
            ></ObjectText>
          </li>
          <li className={styles.secondkeyskeys}>
            <ObjectText
              objKey={`'Работал с KPI'`}
              objValue={`'Выполнение показателей плана продаж'`}
            ></ObjectText>
          </li>
        </ul>
        <span className={styles.literallInObject}>{"},"}</span>
      </div>
      <span className={styles.literall}>{"}"}</span>

      <div {...props} className={cn(styles.variablesInner, className)}>
        <VarText varname={"myCourses"} />
        <span className={styles.literall}>{"["}</span>
      </div>

      <ul className={styles.coursesWrapper}>
        <li className={styles.coursestext}>
          <a
            target={"_blank"}
            href="https://www.udemy.com/course/javascript_full/"
          >
            'Полный курс по JavaScript + React - с нуля до результата',
          </a>
        </li>
        <li className={styles.coursestext}>
          <a
            target={"_blank"}
            href="https://www.udemy.com/course/react-from-scratch/"
          >
            'React с нуля для начинающих',
          </a>
        </li>
        <li className={styles.coursestext}>
          <a
            target={"_blank"}
            href="https://www.udemy.com/course/react-nextjs/"
          >
            'React + Next.js - с нуля. TypeScript, Hooks, SSR и CSS Grid',
          </a>
        </li>
        <li className={styles.coursestext}>
          <a target={"_blank"} href="https://www.udemy.com/course/redux-react/">
            'Redux для управления состоянием React-приложений'
          </a>
        </li>
      </ul>
      <span className={styles.literall}>{"]"}</span>
    </>
  );
};

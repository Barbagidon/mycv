import { VarText } from "../../components/VarText/VarText";
import styles from "./contactsPage.module.css";
import { ContactsPageProps } from "./contactsPage.props";

export function ContactsPage({ ...props }: ContactsPageProps): JSX.Element {
  return (
    <div className={styles.contactswrapper} {...props}>
      <VarText
        text={
          <a
            className={styles.link}
            target={"_blank"}
            href="mailto:shtiller8@gmail.com"
          >
            shtiller8@gmail.com
          </a>
        }
        varname="myMail"
      />

      <VarText
        text={
          <a className={styles.link} target={"_blank"} href="tel:+77073640594">
            +77073640594
          </a>
        }
        varname="myPhone"
      />
      <VarText
        text={
          <a
            className={styles.link}
            target={"_blank"}
            href="https://t.me/bit_Makar"
          >
            @bit_Makar
          </a>
        }
        varname="myTelegram"
      />
      <VarText
        text={
          <a
            className={styles.link}
            target={"_blank"}
            href="https://join.skype.com/invite/m6dJ1xdOw3AW"
          >
            link
          </a>
        }
        varname="mySkype"
      />
    </div>
  );
}

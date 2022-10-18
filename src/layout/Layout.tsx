import { LayoutProps } from "./Layout.props";
import styles from "./Layout.module.css";
import { Header } from "./Header/Header";
import { FunctionComponent } from "react";
import { Sidebar } from "./Sidebar/Sidebar";
import { Provider } from "react-redux";
import { store } from "../features/store";
import { Navigation } from "./Navigation/Navigation";

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <Header className={styles.header} />
      <Sidebar className={styles.sidebar}></Sidebar>
      <Navigation className={styles.nav}></Navigation>
      <main className={styles.body}>{children}</main>
    </div>
  );
};

export const withLayout = <T extends Record<string, unknown>>(
  Component: FunctionComponent<T>
) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <Provider store={store}>
        <Layout>
          <Component {...props} />
        </Layout>
      </Provider>
    );
  };
};

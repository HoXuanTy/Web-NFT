import React, { ReactNode } from 'react';
import Header from '../Header';
import styles from '../../scss/LoginLayout.module.scss';

interface LoginLayoutProps {
    children: ReactNode;
  }

function LoginLayout({ children }: LoginLayoutProps) {
    return (
        <div className={styles.wrapper}>
        <Header />
            <div className={styles.container}>
                <div className={styles.content}>{children}</div>
            </div>
        </div>
    );
  }
  export default LoginLayout;
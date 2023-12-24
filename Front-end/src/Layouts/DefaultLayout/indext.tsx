import React, { ReactNode } from 'react';
import Sidebar from '../Sidebar';
import TopSide from '../TopSide';

import styles from '../../scss/DefaultLayout.module.scss';

interface DefaultLayoutProps {
    children: ReactNode;
  }

function DefaultLayout({ children }: DefaultLayoutProps) {
    return (
        <div className={styles.wrapper}>
        <TopSide />
        <Sidebar/>
            <div className={styles.container}>
                <div className={styles.content}>{children}</div>
            </div>
        </div>
    );
  }
  export default DefaultLayout;
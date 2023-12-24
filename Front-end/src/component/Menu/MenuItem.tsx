import React from 'react';
import { SidebarModel } from '../../models/SidebarModel';
import styles from '../../scss/MenuSidebar.module.scss'

const MenuItem: React.FC<SidebarModel> = ({icons, title}) => {
  return (
    <div className={styles.container}>
        <span className={styles.icon}>{icons}</span>
        <span >{title}</span>
    </div>
  )
}


export default MenuItem 
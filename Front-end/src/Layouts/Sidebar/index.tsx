import React from 'react';
import styles from '../../scss/Sidebar.module.scss';
import { MdVerified } from "react-icons/md";
import MenuItem from '../../component/Menu/MenuItem';
import { MenuData } from '../../component/Menu/MenuData';
import { RiChat1Line  } from "react-icons/ri";

function Sidebar() {
  return (
    <div className={styles.wapper}>
      <div className={styles.Logo}>
        <img src={require('../../asset/image/Logo.png')} alt="Logo" />
      </div>

      <div>
        <img src={require('../../asset/image/avatar.jpg')} className={styles.avatarImg} />
        <div className={styles.Name}>Ho Xuan Ty</div>
        <div className={styles.verified}>
          <div className={styles.text}>verified</div>
          <MdVerified size={15} color='#0CAF60' />
        </div>
      </div>
      <nav className={styles.menuItem}>
        {
          MenuData.map((menuItem, index) => (
            <MenuItem  key={index} title={menuItem.title} icons={menuItem.icons} />
          ))
        }
        <div className={styles.insignt}>
          <span className={styles.title}>Insignts</span>
          <div className={styles.icon}>
            <MenuItem title='Inbox' icons={<RiChat1Line size={24} />}/>
          </div>
        </div>

      </nav>

    </div>
  )
}

export default Sidebar
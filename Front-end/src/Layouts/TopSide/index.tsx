import React, {useState} from 'react';
import { CgMenuGridR } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import { RiWalletLine, RiNotificationLine, RiArrowDropDownLine  } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import styles from '../../scss/TopSide.module.scss';


function TopSide() {

    const [Open , setOpen] = useState(false);

    const toggleDropdown = () => {
        setOpen(!Open);
      };

    return (
        <div className={styles.wapper}>
            <div className={styles.topLeft}>
                <div className={styles.iconMenu}>
                    <CgMenuGridR size={24} />
                </div>
                <div className={styles.searchBox}>
                    <div className={styles.search}>
                        <CiSearch size={20} />
                        <input type='text' placeholder='Search in dashboard...' />
                    </div>
                </div>
            </div>
            <div className={styles.topRight}>
                <div className={styles.language} >
                    <div className={styles.dropdownLang} onClick={toggleDropdown}>
                        <img src="https://cdn.countryflags.com/thumbs/united-kingdom/flag-round-250.png" className={styles.flag} />
                        <div className={styles.selected}>English</div>
                    </div>
                    <RiArrowDropDownLine  size={24} />
                    {Open &&(
                    <div className={styles.listDropdown}>
                        <div className={styles.item}>
                            <img src="https://cdn.countryflags.com/thumbs/vietnam/flag-round-250.png" className={styles.flag} />
                            <div className={styles.selected}>Vietnamese</div>
                        </div>
                    </div>
                    )}
                </div>
                <div className={styles.iconWallet}>
                    <RiWalletLine size={24} />
                </div>
                <div className={styles.iconSetting}>
                    <IoSettingsOutline size={24} />
                </div>
                <div className={styles.iconNotify}>
                    <RiNotificationLine size={24} />
                </div>
            </div>
        </div>
    )
}

export default TopSide;
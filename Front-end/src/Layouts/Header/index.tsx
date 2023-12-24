import React, { useState } from 'react';
import { CgMenuGridR } from "react-icons/cg";

import {  RiArrowDropDownLine } from "react-icons/ri";
import styles from '../../scss/Header.module.scss';


function Header() {

    const [Open, setOpen] = useState(false);

    const toggleDropdown = () => {
        setOpen(!Open);
    };

    return (
        <header className={styles.wapper}>
            <div className={styles.Logo}>
                <img src={require('../../asset/image/Logo.png')} alt="Logo" />
            </div>
            <nav className={styles.topLeft}>
                <div className={styles.iconMenu}>
                    <CgMenuGridR size={24} />
                </div>
                <ul className={styles.topLeft_nav}>
                    <li><a href="#">Buy Crypto</a></li>
                    <li><a href="#">Market</a></li>
                    <li><a href="#">NFT</a></li>
                    <li><a href="#">Promotion</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Blog</a></li>
                </ul>
            </nav>
            <div className={styles.topRight}>
                <div className={styles.language} >
                    <div className={styles.dropdownLang} onClick={toggleDropdown}>
                        <img src="https://cdn.countryflags.com/thumbs/united-kingdom/flag-round-250.png" className={styles.flag} />
                        <div className={styles.selected}>English</div>
                    </div>
                    <RiArrowDropDownLine size={24} />
                    {Open && (
                        <div className={styles.listDropdown}>
                            <div className={styles.item}>
                                <img src="https://cdn.countryflags.com/thumbs/vietnam/flag-round-250.png" className={styles.flag} />
                                <div className={styles.selected}>Vietnamese</div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    )
}

export default Header;
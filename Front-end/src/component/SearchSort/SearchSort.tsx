import React from 'react'
import styles from '../../scss/SearchSort.module.scss'
import { CiSearch } from "react-icons/ci";
import { MdFilterList } from "react-icons/md";
import ButtonProps from '../Button/Buttons';

const SearchSort: React.FC =() =>{
    const handleClick = () => {
        console.log('Button clicked');
    };


    return (
        <div className={styles.container}>
            <div className={styles.searchBox}>
                <div className={styles.search}>
                    <CiSearch size={20} />
                    <input type='text' placeholder='Search in dashboard...' />
                </div>
            </div>
            <div className={styles.sort}>
                <MdFilterList />
                <span>Sort</span>
            </div>
            <div className={styles.view}>
                <ButtonProps onClick={handleClick} children={'All'} className={styles.custom}/>
                <ButtonProps onClick={handleClick} children={'Low'} className={styles.custom}/>
                <ButtonProps onClick={handleClick} children={'Hight'} className={styles.custom}/>
                <ButtonProps onClick={handleClick} children={'Popular'} className={styles.custom}/>
                   
            </div>
          
        </div>
    )
}

export default SearchSort
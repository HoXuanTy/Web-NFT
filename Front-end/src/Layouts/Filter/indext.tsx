import React from 'react'
import styles from '../../scss/Filter.module.scss'


function Filter() {
  return (
    <aside className={styles.Container}>
       <div className={styles.Filters}>
        <span>Filters</span>
        <div>
          <span>Applied filters</span>
          
        </div>
            
       </div>

    </aside>
  )
}

export default Filter;
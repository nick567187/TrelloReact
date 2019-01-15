import React from 'react';
import styles from './nav.css'

const Nav = () => {
  return (
    <React.Fragment> 
	    <nav className={styles.nav}>
	      <ul className={styles.list}>
	        <li className={styles.listItem}><a href="#">+ New Board</a></li>
	      </ul>
	    </nav>
    </React.Fragment>
  )
}

export default Nav;
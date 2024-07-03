// Navbar.js
import React from 'react';
import styles from './Navbar.module.css';
import Navpic from '../Landing Page Images/download.png';

function Navbar() {
  return (
    <div>



{/* 
<nav className={styles.navbar}>
  <div className={styles.navbarBrand}><img src={Navpic} alt="" /></div>
  <ul className={styles.navLinks}>
    <li>
      <a href="#" className={styles.navLink}>
        Home
      </a>
    </li>
    <li>
      <a href="#" className={styles.navLink}>
        Page
      </a>
    </li>
    <li>
      <a href="#" className={styles.navLink}>
        Courser
      </a>
    </li>
    <li>
      <a href="#" className={styles.navLink}>
        Blog
      </a>
    </li>
    <li>
      <a href="#" className={styles.navLink}>
        Contect
      </a>
    </li>
  </ul>

  <form className={styles.searchForm}>
    <input
      style={{ border: "1px solid black", marginRight: "10px" }}
      type="search"
      placeholder="Search"
      aria-label="Search"
      className={styles.searchInput}
    />
    <button type="submit" className={styles.searchBtn}>
      Search
    </button>
  </form>
</nav> */}




      <div className='container'>

    <nav className={styles.navbar }>
      <div className={styles.navbarBrand}><img src={Navpic} alt="" /></div>
     
      <ul className= {styles.navLinks  } style={{gap:"30px", paddingLeft:"180px"}} >
        <li>
          <a href="#" className={styles.navLink} style={{color:"red"}}>
            Home
          </a>
        </li>
        <li>
          <a href="#" className={styles.navLink}>
            Page
          </a>
        </li>
          <li>
          <a href="#" className={styles.navLink}>
            Courser
          </a>
        </li>
        <li>
          <a href="#" className={styles.navLink}>
            Blog
          </a>
        </li>
        <li>
          <a href="#" className={styles.navLink}>
            Contect
          </a>
        </li>
      </ul>

      <form className={styles.searchForm}>
        <input  style={{border:"1px solid black" , marginRight:"10px"}}
          type="search"
          placeholder="Search"
          aria-label="Search"
          className={styles.searchInput}
          />
        <button type="submit" className={styles.searchBtn}>
          Search
        </button>
      </form>
    </nav>
          </div>
          </div>
  );
}

export default Navbar;
import { useNavigate } from 'react-router-dom'
import Button from '../Button/Button'
import styles from './Header.module.css'

function Header() {
  const navigate = useNavigate()

  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <div className={styles.headerLeft}>
          <a href="/" className={styles.logoWithme} onClick={(e) => { e.preventDefault(); navigate('/'); }}>
            <img src="/assets/images/logo-withme.png" alt="imaavy withMe" className={styles.logoWithmeImg} />
          </a>

          <span className={styles.logoDivider}></span>

          <a href="/" className={styles.logoBrand} onClick={(e) => { e.preventDefault(); navigate('/'); }}>
            <img src="/assets/images/logo-imaavy.svg" alt="imaavy (nipocalimab-aahu)" className={styles.logoBrandImg} />
          </a>
        </div>

        <div className={styles.headerRight}>
          <a href="#" className={styles.headerLink}>Important Safety Information</a>
          <a href="#" className={styles.headerLink}>Full Prescribing Information</a>
          <Button variant="signin">Sign In</Button>
        </div>
      </div>
    </header>
  )
}

export default Header

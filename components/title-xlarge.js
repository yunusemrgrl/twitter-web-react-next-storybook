import styles from './title-xlarge.module.css'

function titleXLarge({ children }) {
  return <h2 className={styles.titleXLargeBold}>{children}</h2>
}
export default titleXLarge

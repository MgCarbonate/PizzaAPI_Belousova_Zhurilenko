import styles from './Footer.module.css'
import NavPizza from './NavPizza/NavPizza'
import NavHelp from './NavHelp/NavHelp'

function Footer() {

  return (
    <>
      <div className={styles.Footer}>
        <div className={styles.FooterLeft}>
          <img src="/image/logo.svg" alt="" />
          <p className={styles.FooterLogoTxt}>Куда пицца</p>
        </div>
        <NavPizza />
        <NavHelp />
        <div className={styles.FooterRight}>
          <p className={styles.FooterContacts}>Контакты</p>
          <div className={styles.FooterContInfo}>
            <img src="/image/phone.svg" alt="" />
            <p>+7 (926) 223-10-11</p>
          </div>
          <div className={styles.FooterContInfo}>
            <img src="/image/Location.svg" alt="" />
            <p>Москва, ул. Юных Ленинцев, д.99</p>
          </div>
          <div className={styles.FooterSocMedias}>
            <div className={styles.FooterSocMedia}>
              <img src="/image/facebook.svg" alt="" />
              <p>Facebok</p>
            </div>
            <div className={styles.FooterSocMedia}>
              <img src="/image/inst.svg" alt="" />
              <p>Instagram</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
import styles from './Nav.module.css'

function Nav() {

    return (
        <>
            <nav className={styles.Nav}>
                <ul className={styles.Ul}>
                    <li className={styles.Li}>
                        <img src="/image/Fire.svg" alt="" />
                        <p className={styles.LiTxtRed}>Акции</p>
                    </li>
                    <li className={styles.Li}>
                        <img src="/image/Pizza.svg" alt="" />
                        <p className={styles.LiTxt}>Пицца</p>
                    </li>
                    <li className={styles.Li}>
                        <img src="/image/Sushi.svg" alt="" />
                        <p className={styles.LiTxt}>Суши</p>
                    </li>
                    <li className={styles.Li}>
                        <img src="/image/Drink.svg" alt="" />
                        <p className={styles.LiTxt}>Напитки</p>
                    </li>
                    <li className={styles.Li}>
                        <img src="/image/Snacks.svg" alt="" />
                        <p className={styles.LiTxt}>Закуски</p>
                    </li>
                    <li className={styles.Li}>
                        <img src="/image/Combo.svg" alt="" />
                        <p className={styles.LiTxt}>Комбо</p>
                    </li>
                    <li className={styles.Li}>
                        <img src="/image/Dessert.svg" alt="" />
                        <p className={styles.LiTxt}>Десерты</p>
                    </li>
                    <li className={styles.Li}>
                        <img src="/image/Sauce.svg" alt="" />
                        <p className={styles.LiTxt}>Соусы</p>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Nav
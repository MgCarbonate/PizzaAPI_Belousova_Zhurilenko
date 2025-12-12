import styles from './Header.module.css'

function Header() {

    return (
        <>
            <div className={styles.Header}>
                <div className={styles.HeaderTop}>
                    <div className={styles.TopLeft}>
                        <div className={styles.HeaderLocation}>
                            <img src="/image/Location.svg" alt="Иконка геолокации" />
                            <p className={styles.TopTxt}>Москва</p>
                            <img src="/image/Arrow Down.svg" alt="" />
                        </div>
                        <p className={styles.TopTxt}>Проверить адрес</p>
                        <p className={styles.TopTxt}>Среднее время доставки*: <b>00:24:19</b> </p>
                    </div>
                    <div className={styles.TopRight}>
                        <p className={styles.TopTxt}>Время работы: с 11:00 до 23:00</p>
                        <div className={styles.TopProfile}>
                            <img src="/image/Account.svg" alt="" />
                            <p className={styles.TopTxt}>Войти в аккаунт</p>
                        </div>
                    </div>
                </div>
                <hr className={styles.Hr} />
                <div className={styles.HeaderBottom}>
                    <div className={styles.BottomLeft}>
                        <img src="/image/logo.svg" alt="" />
                        <p className={styles.BottomTxt}>Куда пицца</p>
                    </div>
                    <div className={styles.BottomRight}>
                        <img src="/image/cart.svg" alt="" />
                        <p className={styles.BottomRightTxt}>0 ₽</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
import styles from './Adress.module.css'

function Adress() {

    return (
        <>
            <div className={styles.Adress}>
                <p className={styles.AdressTxt}>Проверить адрес доставки</p>
                <div className={styles.AdressField}>
                    <img src="/image/Location.svg" alt=""/>
                    <p>Адрес</p>
                </div>
                <button className={styles.ButProver}>Проверить</button>
            </div>
        </>
    )
}

export default Adress
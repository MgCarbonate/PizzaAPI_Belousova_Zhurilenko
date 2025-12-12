import styles from './Sushi.module.css'

function Sushi() {

    return (
        <>
            <div className={styles.Sushi}>
                <img src="/image/Sushi.webp" alt="Суши Супер Филадельфия" loading='lazy' />
                <div className={styles.SushiPodrob}>
                    <p className={styles.SushiName}>Супер Филадельфия</p>
                    <p className={styles.SushiOpis}>Действительно много семги, сливочный сыр, рис, огурец...</p>
                    <div className={styles.SushiBottom}>
                        <button className={styles.ButSelect}>Выбрать</button>
                        <p className={styles.SushiPrice}>от 399 ₽</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sushi
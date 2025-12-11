import styles from './Snacks.module.css'

function Snacks() {

    return (
        <>
            <div className={styles.Snacks}>
                <img src="/image/Snacks.webp" alt="Картофель фри" loading='lazy' />
                <div className={styles.SnacksPodrob}>
                    <p className={styles.SnacksName}>Картофель фри</p>
                    <p className={styles.SnacksOpis}>Жареный во фритюре картофель со специями...</p>
                    <div className={styles.SnacksBottom}>
                        <button className={styles.ButSelect}>Выбрать</button>
                        <p className={styles.SnacksPrice}>от 399 ₽</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Snacks
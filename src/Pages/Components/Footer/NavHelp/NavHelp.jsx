import styles from './NavHelp.module.css'

function NavHelp() {

    return (
        <>
            <div className={styles.NavHelp}>
                <p className={styles.Name}>Помощь</p>
                <nav className={styles.Nav}>
                    <ul className={styles.Ul}>
                        <li className={styles.Li}>Ресторан</li>
                        <li className={styles.Li}>Контакты</li>
                        <li className={styles.Li}>Поддержка</li>
                        <li className={styles.Li}>Отследить заказ</li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default NavHelp
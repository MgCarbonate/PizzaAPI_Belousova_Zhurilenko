import styles from './NavPizza.module.css'

function NavPizza() {

    return (
        <>
            <div className={styles.NavPizza}>
                <p className={styles.Name}>Куда пицца</p>
                <nav className={styles.Nav}>
                    <ul className={styles.Ul}>
                        <li className={styles.Li}>О компании</li>
                        <li className={styles.Li}>Пользовательское соглашение</li>
                        <li className={styles.Li}>Условия гарантии</li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default NavPizza
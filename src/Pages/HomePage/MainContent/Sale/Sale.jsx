import styles from './Sale.module.css'

function Sale() {

    return (
        <>
            <div className={styles.Sales}>
                <div className={styles.SaleOne}>
                    <p className={styles.SaleOpis}>3 средние пиццы <br /> от 999 рублей</p>
                </div>
                <div className={styles.SaleTwo}>
                    <p className={styles.SaleOpis}>Кэшбек 10% <br /> на самовывоз (доставка)</p>
                </div>
                <div className={styles.SaleOne}>
                    <p className={styles.SaleOpis}>3 средние пиццы <br /> от 999 рублей</p>
                </div>
                <div className={styles.SaleTwo}>
                    <p className={styles.SaleOpis}>Кэшбек 10% <br /> на самовывоз (доставка)</p>
                </div>
            </div>
        </>
    )
}

export default Sale
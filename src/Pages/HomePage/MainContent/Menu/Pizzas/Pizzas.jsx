import styles from './Pizzas.module.css'

function Pizzas({ product }) {

    return (
        <>
            <div className={styles.Pizzas}>
                <img className={styles.PizzaImg} src={product.images[0]} alt={product.name} loading='lazy' />
                <div className={styles.PizzaPodrob}>
                    <p className={styles.PizzaName}>{product.name && product.name.length > 16
                        ? product.name.substring(0, 16) + "..."
                        : product.name || "Наименование отсутствует"}</p>
                    <p className={styles.PizzaOpis}>{product.description && product.description.length > 50
                        ? product.description.substring(0, 50) + "..."
                        : product.description || "Описание отсутствует"}</p>
                    <div className={styles.PizzaBottom}>
                        <button className={styles.ButSelect}>Выбрать</button>
                        <p className={styles.PizzaPrice}>от 399 ₽</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Pizzas
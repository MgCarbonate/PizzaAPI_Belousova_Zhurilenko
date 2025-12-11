import Sushi from './Sushi/Sushi'
import Pizzas from './Pizzas/Pizzas'
import Snacks from './Snacks/Snacks'
import styles from './Menu.module.css'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

function Menu() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(
                    "https://torguisam.ru/api/product/oksei-all-products"
                );
                setProducts(response.data.slice(0, 4)); 
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    if (loading) {
        return <div>Загрузка товаров...</div>;
    }
    if (error) {
        return <div>Ошибка: {error}</div>;
    }

    return (
        <>
            <div className={styles.MenuZag}>
                <h1 className={styles.PizzaH1}>Пицца</h1>
                <button className={styles.Filter}>
                    <img src="/image/Filter.svg" alt="" />
                    <p>Фильтры</p>
                </button>
            </div>
            <div className={styles.Pizzas}>
                {products.map((product) => (
                    <Pizzas key={product.id} product={product} />
                ))}
            </div>
            <div className={styles.MenuZag}>
                <h1 className={styles.PizzaH1}>Суши</h1>
                <button className={styles.Filter}>
                    <img src="/image/Filter.svg" alt="" />
                    <p>Фильтры</p>
                </button>
            </div>
            <div className={styles.Sushi}>
                {products.map((product) => (
                    <Pizzas key={product.id} product={product} />
                ))}
            </div>
            <div className={styles.MenuZag}>
                <h1 className={styles.PizzaH1}>Закуски</h1>
                <button className={styles.Filter}>
                    <img src="/image/Filter.svg" alt="" />
                    <p>Фильтры</p>
                </button>
            </div>
            <div className={styles.Snacks}>
                {products.map((product) => (
                    <Pizzas key={product.id} product={product} />
                ))}
            </div>
        </>
    )
}

export default Menu
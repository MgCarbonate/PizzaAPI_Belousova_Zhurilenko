import Pizzas from './Pizzas/Pizzas'
import styles from './Menu.module.css'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Forma from './Forma/Forma';

function Menu() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showCreateForm, setShowCreateForm] = useState(false);
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

    const refreshProducts = async () => {
        try {
            setLoading(true);
            const response = await axios.get(
                "https://torguisam.ru/api/product/oksei-all-products"
            );
            setProducts(response.data.slice(0, 4));
            setLoading(false);
        } catch (err) {
            console.error("Ошибка при обновлении товаров:", err);
            setError(err.message);
            setLoading(false);
        }
    };

    const handleProductCreated = (newProduct) => {
        refreshProducts();
        setShowCreateForm(false);
    };
    if (loading) return <div className="loading">Загрузка товаров...</div>;
    if (error) return <div className="error">Ошибка: {error}</div>;

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

            <div className={styles.Meow}>
                <button
                    className={styles.ILoveYou}
                    onClick={() => setShowCreateForm(!showCreateForm)}
                >
                    {showCreateForm ? "Скрыть форму" : "Создать новый товар"}
                </button>
            </div>
            {showCreateForm && (
                <Forma onProductCreated={handleProductCreated} />
            )}
        </>
    )
}

export default Menu
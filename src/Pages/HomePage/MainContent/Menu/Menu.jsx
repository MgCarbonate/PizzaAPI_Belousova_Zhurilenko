import Pizzas from './Pizzas/Pizzas'
import styles from './Menu.module.css'
import { useState } from 'react';
import { useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import axios from 'axios';
import Forma from './Forma/Forma';

function Menu() {

    const [isVisible, setIsVisible] = useState(true);
    const [selectedItem, setSelectedItem] = useState(null);
    const [count, setCount] = useState(0);
    // Пример 1: Базовая анимация появления
    const fadeInVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };
    // Пример 2: Анимация при наведении
    const hoverVariants = {
        hover: {
            scale: 1.05,
            rotate: 2,
            boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
            transition: { type: "spring", stiffness: 300 },
        },
    };
    // Пример 3: Сложная анимация с keyframes
    const complexVariants = {
        animate: {
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 180, 360],
            borderRadius: ["10%", "50%", "10%"],
            transition: {
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
            },
        },
    };
    // Пример 4: Stagger animation (поочередная анимация)
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.2,
                staggerChildren: 0.1,
            },
        },
    };
    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 100 },
        },
    };
    // Пример 5: Layout animation
    const layoutVariants = {
        expanded: { width: 300, height: 200 },
        collapsed: { width: 100, height: 100 },
    };
    // Пример 6: Gesture-based animation
    const dragVariants = {
        drag: { scale: 1.1, cursor: "grabbing" },
    };
    const items = ["Item 1", "Item 2", "Item 3", "Item 4"];

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
                <motion.h1 className={styles.PizzaH1} nitial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >{Array.from("Пицца").map((char, index) => (
                    <motion.span
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.5,
                            delay: index * 0.1,
                            type: "spring",
                        }}
                    >
                        {char === " " ? "\u00A0" : char}
                    </motion.span>
                ))}

                </motion.h1>
                <button className={styles.Filter}>
                    <img src="/image/Filter.svg" alt="" />
                    <p>Фильтры</p>
                </button>
            </div>
            <motion.div className={styles.Pizzas} variants={fadeInVariants}
                initial="hidden"
                animate="visible">
                {products.map((product) => (
                    <Pizzas key={product.id} product={product} />
                ))}
            </motion.div>
            <div className={styles.MenuZag}>
                <motion.h1 className={styles.PizzaH1} nitial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >{Array.from("Сусси").map((char, index) => (
                    <motion.span
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.5,
                            delay: index * 0.1,
                            type: "spring",
                        }}
                    >
                        {char === " " ? "\u00A0" : char}
                    </motion.span>
                ))}

                </motion.h1>
                <button className={styles.Filter}>
                    <img src="/image/Filter.svg" alt="" />
                    <p>Фильтры</p>
                </button>
            </div>
            <motion.div className={styles.Sushi}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}>
                {products.map((product) => (
                    <Pizzas key={product.id} product={product} />
                ))}
            </motion.div>
            <div className={styles.MenuZag}>
                <motion.h1 className={styles.PizzaH1} nitial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >{Array.from("Закусочки").map((char, index) => (
                    <motion.span
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.5,
                            delay: index * 0.1,
                            type: "spring",
                        }}
                    >
                        {char === " " ? "\u00A0" : char}
                    </motion.span>
                ))}

                </motion.h1>
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
                    onClick={event => 
                        { setShowCreateForm(!showCreateForm);
                        setCount(count + 1);
                    }} 
                    whileTap={{ scale: 0.95 }}

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
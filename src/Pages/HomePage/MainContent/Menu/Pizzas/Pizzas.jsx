import { useState } from 'react';
import styles from './Pizzas.module.css'
import { motion, AnimatePresence } from "framer-motion";

function Pizzas({ product }) {

    const [isVisible, setIsVisible] = useState(true);
    const [selectedItem, setSelectedItem] = useState(null);
    const [count, setCount] = useState(0);

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


    return (
        <>
            <div className={styles.Pizzas}>
                <img className={styles.PizzaImg} src={product.image} alt={product.name} loading='lazy' />
                <div className={styles.PizzaPodrob}>
                    <p className={styles.PizzaName}>{product.name && product.name.length > 16
                        ? product.name.substring(0, 16) + "..."
                        : product.name || "Наименование отсутствует"}</p>
                    <p className={styles.PizzaOpis}>{product.description && product.description.length > 50
                        ? product.description.substring(0, 50) + "..."
                        : product.description || "Описание отсутствует"}</p>
                    <div className={styles.PizzaBottom}>
                        <motion.button className={styles.ButSelect} variants={hoverVariants}
                            whileHover="hover">Выбрать</motion.button>
                        <motion.p className={styles.PizzaPrice} variants={complexVariants}
                            animate="animate"
                        >от 399 ₽</motion.p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Pizzas
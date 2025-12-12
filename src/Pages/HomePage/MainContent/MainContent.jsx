import styles from './MainContent.module.css'
import Nav from './Nav/Nav'
import Sale from './Sale/Sale'
import Adress from './Adress/Adress'
import Menu from './Menu/Menu'

function MainContent() {

    return (
        <>
            <main className={styles.MainContent}>
                <Nav />
                <Sale />
                <Adress />
                <Menu />
            </main>
        </>
    )
}

export default MainContent
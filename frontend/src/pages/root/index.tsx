import { useState } from "react"
import { Link } from "react-router-dom";

import Header from "../../components/Header";
import olhadinhaName from "../../assets/OlhadinhaName.svg"
import styles from "./index.module.css"
import lupaIcon from "../../assets/LupaIcon.png"
import logoIcon from "../../assets/LogoIcon.svg"

export default function RootPage() {
    document.title = "Olhadinha Cashback";
    const [inputValue, setInputValue] = useState("");

    return (
        <>
            <Header />
            <main className={styles.RootMain}>
                <div className={styles.RootContent}>
                    <div className={styles.text}>
                        <span className="">Dê uma <img src={olhadinhaName} alt="Olhadinha" /> no melhor cashback</span>
                        <span>disponível sua loja favorita de compras.</span>
                    </div>
                    <div className={styles.searchBar}>
                        <div className={styles.wrapperInput}>
                            <img src={lupaIcon} alt="Lupa Icon" />
                            <input type="text" id="inputName" placeholder="Procurar loja..." onChange={(e) => setInputValue(e.target.value)} />
                        </div>
                        <Link to={`/search/${inputValue}`} className={styles.searchButton}>
                            <img src={logoIcon} alt="Logo Olhadinha Icon" />
                        </Link>
                    </div>
                </div>
            </main >
        </>
    );
}
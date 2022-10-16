import styles from '../styl.css'
const MainArticle = () => {
    return (
        <article className="center">
            <h2>Wypełnij test i porównaj swoje poglądy</h2>
            <p>Sprawdź poglądy i przekonaj się, do kogo jest Ci najbliżej w wyborach parlamentarnych 2023.</p>
            <a href="/test"><button className="button1">Wypełnij test</button></a>
            <a href="/test2"><button className="button2">O Projekcie(testowanie bazy)</button></a>
            <img src="seo_illustrations_7.png" alt="Ilustracja monitora" width="20%" height="20%" />
        </article>
    );
}

export default MainArticle;
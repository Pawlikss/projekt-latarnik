import styles from '../styl.css'
const About = () => {
    return (
        <article>
            <h1 class="mainh1">Jak działa aplikacja?</h1>
            <div className="flexBox">

                <div className="flexElement">
                    <p>

                        <h3 className="title">Przygotowujemy zestaw ustaw</h3>
                        <span className="paragraph">Zagłosuj na ustawy. Możesz przerwać w każdej chwili.</span>
                    </p>
                </div>
                <div className="flexElement">
                    <p>
                        <h3 className="title">Porównujemy twoje poglądy</h3>
                        <span className="paragraph"> Dzięki danym publicznym możemy porównać twoje odpowiedzi do odpowiedzi kandydatów.</span>
                    </p>
                </div>
                <div className="flexElement">
                    <p>
                        <h3 className="title"> Wyświetlamy twoje dopasowania</h3>
                        <span className="paragraph"> Sprawdź do jakich polityków zbliżone są twoje poglądy.</span>
                    </p>
                </div>
            </div>
        </article>
    );
}

export default About;
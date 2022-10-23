const About = () => {
    return (
        <article>
            <h2 className="mainh1">Jak działa aplikacja?</h2>
            <div className="flexBox">

                <div className="flexElement">
                    <h3 className="title">Przygotowujemy zestaw pytań</h3>
                    <span>Wyraź swoje zdanie na temat kwestii politycznych, możesz przerwać w każdej chwili.</span>
                </div>
                <div className="flexElement">
                    <h3 className="title">Porównujemy twoje poglądy</h3>
                    <span> Dzięki danym publicznym możemy porównać twoje odpowiedzi do odpowiedzi posłów.</span>
                </div>
                <div className="flexElement">
                    <h3 className="title"> Wyświetlamy twoje dopasowania</h3>
                    <span> Sprawdź do jakich polityków zbliżone są twoje poglądy.</span>
                </div>
            </div>
        </article>
    );
}

export default About;
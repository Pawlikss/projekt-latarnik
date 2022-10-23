const FAQ = () => {
    return (
        <article>
            <div className='container'>
                <div className="cen"><img className='img' src="faq.jpg" alt="FAQ" /></div>

                <div className="text">
                    <span className="weight"> Co się dzieje z odpowiedziami użytkowników?</span><br />
                    Zbierane dane podczas wypełniania testu po wyświetleniu dopasowań są kasowane.<br></br>
                    <span className="question"> Jak oblicza się stopień zgodności odpowiedzi użytkownika z poglądami polityków? </span>
                    Na każde ze stwierdzeń użytkownicy oraz komitety wyborcze udzielają jednej z odpowiedzi i na tej podstawie obliczane jest dopasowanie.
                </div>
            </div>
        </article>
    );
}

export default FAQ;
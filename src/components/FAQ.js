const FAQ = () => {
    return (
        <article>
            <div className='container'>
                <div className="cen"><img className='img' src="faq.jpg" alt="FAQ" /></div>

                <div className="text">
                    <span className="weight"> Co się dzieje z odpowiedziami użytkowników?</span><br />
                    Zbierane dane podczas wypełniania testu po wyświetleniu dopasowań są kasowane.
                    <span className="question"> Jak oblicza się stopień zgodności odpowiedzi użytkownika z poglądami polityków? </span>
                    Na każde ze stwierdzeń użytkownicy oraz komitety wyborcze udzielają jednej z odpowiedzi: "Zgadzam się", "Nie zgadzam się", "Nie mam zdania". Za poszczególne kombinacje odpowiedzi użytkownika i danego komitetu do każdego ze stwierdzeń przypisuje się następującą liczbe punktów,jeżeli:
                    <ul>
                        <li>Zarówno użytkownik, jak i komitet odpowiedzą "Zgadzam się" albo "Nie zgadzam się" - 3 punkty</li>
                        <li>użytkownik i komitet odpowiedzą "nie mam zdania" - 2 punkty</li>
                        <li>użytkownik albo komitet odpowie "Zgadzam się" albo "Nie zgadzam się", a druga strona odpowie "Nie mam zdania" - 1 punkt</li>
                        <li>jedna strona odpowie "Zgadzam się", a druga "Nie zgadzam się" - 0 punktów</li>
                    </ul>
                    Kolejnym krokiem jest dodanie punktów przypisanych do poszczególnych stwierdzeń - dla każdego z komitetów. Następnie uzyskane w ten sposób sumy punktów są dzielone przez maksymalną możliwą do zdobycia liczbe punktów.<br />
                    Otrzymane w ten sposób wyniki są przedstawiane w postaci wykresu procentowej zgodności odpowiedzi użytkownika z odpowiedziami każdego z komitetów wyborczych.
                </div>
            </div>
        </article>
    );
}

export default FAQ;
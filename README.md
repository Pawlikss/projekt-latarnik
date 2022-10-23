# Projekt obywatel

## 1. Opis projektu:

#### 1.1 Tytuł projektu:
**Latarnik wyborczy**
#### 1.2 Cel projektu:
Pomoc obywatelom w wyborach parlamentu 2023.  
Projekt może dotyczyc wszystkich obywateli mających prawa wyborcze lub tych młodszych, którzy interesują się polityką.Pozwoli to na zweryfikowanie własnych preferencji wyborczych z rzeczywistymi kandydatami w wyborach.

## 2. Opis techniczny:

Aplikacja wykonana jest zgodnie z zasadami responsywności, dostosuje się automatycznie zarówno do urządzeń desktopowych jak i mobilnych.  Grafika w przygotowanej Aplikacji w obecnej formie pełni rolę makiety, która będzie rozbudowywana wraz z rozwojem aplikacji.  Wyniki głosowania poszczególnych posłów dotyczące konkretnych tematów głosowań pobierane w postaci dokumentu pdf z którego następnie wyciągane są potrzebne nam dane.
#### 2.1 Technologie użyte:
React z bibliotekami bootstrap i firebase,  
JSX,  
Python 3.10.X,  
Firebase Realtime Database,  
Sejm API  
####  2.2 Narzędzia użyte:
Firebase – kompletny system backendowy aplikacji(baza danych, hosting, analizy i statystyki)  
## 3. Wymagania:
#### 3.1 Korzystanie online:
Do poprawnego korzystania z naszej strony internetowej potrzebna będzie przeglądarka, z włączonym javascriptem.  
Preferowane przeglądarki to:  
FireFox  
Chrome  
Edge  
#### 3.2 Instalowanie strony internetowej na serwer lokalny(rozwiązanie self-hosted):
Pobieramy node.js, klonujemy [repozytorium](https://github.com/Pawlikss/projekt-latarnik)  
```
git clone https://github.com/Pawlikss/projekt-latarnik
```  
i Za pomocą Node Package Menager instalujemy je ```npm install```.  Gotowe, teraz możemy ją zbudować :  
```
npm run build
serve -s build
```
albo włączyć na serwerze lokalnym za pomocą komendy:
```npm start```  

## 4. Wstęp:

#### 4.1 Tematyka:
Strona jest w interaktywnym quizem pozwalający jego użytkownikom pomoc w wyborze kandydata na wybory parlamentarne w roku 2023.Aplikacja pozwoli na zweryfikowanie własnych preferencji wyborczych z programem wyborczym poszczególnego kandydata.
#### 4.2 Strona główna:
W nagłówku znajduje się nazwa naszego projektu, w głównej częściprzycisk rozpocznij test, przenoszący nas na stronę testu
#### 4.3 Podstrona "test":
Na niej znajdujemy główny przycisk który wysyła kwerendę do bazy żeby dostać pytania, po czym użytkownik dostaje do wyboru w którą stronę chce przesunąć dane pytania, w prawo jeżeli zgadza się z danym stwierdzeniem lub lewo jeżeli nie.

#### 4.4 Funkcjonalność:
Na podstronie Test, znajduje się główna Funkcjonalność w postaci quizu. Działa on na bazie zapisywania odpowiedzi użytkownika i porównywania ich z głosowaniem posłów na dany temat, po czym wyświetla najbardziej dopasowanych posłów, na których mógłby głosować dany użytkownik. 
Strona w domyśle nie zapisuje odpowiedzi użytkownika poza pamięcią lokalną przeglądarki-ochrona prywatności.

## 4. Dalszy rozwój:

Nasza strona ma duży potencjału rozwoju.Można w prosty sposób dzięki sejm API i naszej aplikacji CLI Dodawać na bieżąco nowe pytania.W przyszłości, moglibyśmy dodać newsletteru do strony, który wysyłałby maile osobom które się na niego zapiszą, jak w sejmie są omawiane ustawy związane z daną osobą, np. nauczyciel mógłby dostawać powiadomienia w związku z przyszłymi zmianami płac, lub tematami interesującymi dana osobę.Moglibyśmy dodać za pomocą firebase możliwość logowania dzięki której użytkownik mógłby oświadczyć czy wyraża zgodę, żeby jego dane posłużyły celom statystycznym. Dzięki zebranym danym w aplikacji wyświetlać można by było m.in. najpopularniejszych kandydatów, najbardziej interesujące ludzi problemy.

## 5. Ewentualne ryzyka, zagrożenia:

W obecnej formie, wyzwaniem może okazać się duża popularność aplikacji. Na chwilę obecną aplikacja potrafi obsłużyć do 100 połączeń wykonanych jednocześnie na bazie, lub pobrania z niej danych ~500 razy. Zwiększając budżet przeznaczony na utrzymanie aplikacji ograniczenia stopniowo zostaną zniwelowane.
Sprawne działanie aplikacji uzależnione jest od właściwego działania API sejmu i strony sejmu.

## 6. Narzędzia:

Kod pisaliśmy w językach: Python, html, javascript, jsx,css, noSql
Source i version controll za pomocą GitHuba
Firebase jako hosting serwera wraz z dostępem do bazy danych z czasem rzeczywistym i narzędzia związane z statystyką oraz analiza.

## 7. Informacje o zespole:

#### Nazwa drużyny: 
***TBA***
#### Nazwa szkoły: 
Zespół Szkół Energetycznych Technikum Energetyczno-informatyczne w Lublinie
#### Członkowie zespołu:
Paweł Hrabia programista i grafik.  
Dawid Rej programista i projektant  
Mikołaj Grymuza programista i tester oprogramowania  
Ksawier Czerniak programista i grafik  
Bartosz Szczepaniak Projektant i grafik
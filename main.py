import io
import os
from collections import defaultdict
import json
os.system("pip install pymupdf")
os.system("pip install requests")
import requests
import fitz





#wczytaj wczytuje nam link do pdf'a i zwraca nam pdf'a w postaci stringa
def wczytaj(url):
    response = requests.get(url)
    pdf = io.BytesIO(response.content)
    with fitz.open(stream=pdf) as doc:
        text = ""
        for page in doc:
            text += page.get_text()
    return text


# to funkcja wyświetlająca nam temat danego głosowania, a potem decyduje czy chcemy mieć dane pytanie w bazie
# i jak tak to zapisujące wynik do pliku .json
def tematy(x,posiedzenie,imiona):
    tablica = x.values()
    
    
    for i in tablica:
        pytania= defaultdict(dict)
        tablica2 = (wczytaj(f"http://orka.sejm.gov.pl/Glos9.nsf/dok?OpenAgent&{posiedzenie}_{i}")).split("\n")
        # wyświetlanie tematu (niektóre dokumenty maja mniej/więcej tekstu więc wyświetla dopkuni nie znajdzie w nastepnęj linijce 1 wyników głosowania(PiS))
        os.system('cls')
        for j in range(10):
            # to jest temat
            print(tablica2[7+j])
            if "PiS(" in tablica2[7+j+1]:
                        break
        # część odpowiedzielna za kontrolowanie czy dany temat znajdzie się w bazie
        odpowiedz=input("dodać do bazy?(n\y)\n")
        if(odpowiedz=="n"):
            continue
        else:
            for o in range(j,len(tablica2)):
                if tablica2[o].strip() in imiona:
                    if tablica2[o+1].strip()=="za":
                        pytania[odpowiedz][tablica2[o]] = True
                    else:
                        pytania[odpowiedz][tablica2[o]] = False
        # zapisuje nam odpowiedzi na dane pytania
            with open("odpowiedzi.json", "a" , encoding="utf-8") as outfile:
                outfile.write(json.dumps(pytania,ensure_ascii=False))
                outfile.write("\n")
    os.system('cls')
    print(f"zakonczono sprawdzanie sejmu {posiedzenie}\n")
    #zapisuje ze dane sejm jest za nami
    with open("sprawdzoneSejmy.txt","a") as f:
        f.write(f"{posiedzenie}\n")

def aplikacja(posiedzenie):
    glosowanie=1
    punkt=[]
    najnowsze={}
    while(1):
        url =f"http://orka.sejm.gov.pl/Glos9.nsf/dok?OpenAgent&{posiedzenie}_{glosowanie}"
        try:
                tablica= wczytaj(url).split("\n")
                for i in range(10):
                    if "Pkt" in tablica[7+i]:
                        res = [idx for idx in range(len(tablica[7+i])) if tablica[7+i][idx].isupper()]
                        if ((tablica[7+i][4:res[1]-1]).strip()).replace(".","") not in punkt:
                            punkt.append(((tablica[7+i][4:res[1]-1]).strip()).replace(".",""))
                            najnowsze[((tablica[7+i][4:res[1]-1]).strip()).replace(".","")]=glosowanie
                        else:
                            najnowsze[((tablica[7+i][4:res[1]-1]).strip()).replace(".","")]=glosowanie



                    if "PiS(" in tablica[7+i+1]:
                        break
                
                glosowanie+=1
                
                
        except:
            
            print(f"koniec sejmu {posiedzenie}")
            return(najnowsze)
        
def main():
    os.system("cls")
    od=int(input("podaj od jakiego sejmu chcesz sprawdzać\n"))
    do=int(input("podaj do ktorego sejmu chcesz sprawdzać ostatni był 62\n"))
    imionaUrl = 'https://raw.githubusercontent.com/Pawlikss/projekt-latarnik/main/imiona.txt'
    
    imiona=requests.get(imionaUrl)
    tablicaImion=((imiona.text).replace("\r","")).split("\n")
    for i in range(len(tablicaImion)):
        tablicaImion[i]=((tablicaImion[i]).split())
        tablicaImion[i]=str(tablicaImion[i][1]+" "+tablicaImion[i][0]).upper()
    
    tablica=[]
    
    
    with open("sprawdzoneSejmy.txt","r") as f:
        for line in f:
            tablica.append(line.strip())

    
    
    print(tablica)
    sejmyDoSprawdzenia= [str(i) for i in range(od,do+1)]
    sprawdzone=[]
    for x in range(len(sejmyDoSprawdzenia)):
        
        if str(sejmyDoSprawdzenia[x]) not in tablica:
            
            sprawdzone.append(sejmyDoSprawdzenia[x])
    print(sprawdzone)



    for posiedzenie in sprawdzone:
        tematy(aplikacja(posiedzenie),posiedzenie,tablicaImion)
main()
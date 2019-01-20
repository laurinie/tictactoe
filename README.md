## Aloittaminen

```git clone https://github.com/laurinie/tictactoe.git``` Tuo projektin tiedostot koneellesi

```cd <tiedoston nimi>``` cd komennolla voit vaihtaa kansiota (cd .. vie edelliseen kansioon)

```npm install```  asentaa kaikki tarvittavat kirjastot npm työkalulla

```npm start``` testaa että kaikki toimii

## Kehitysympäristö
```npm start``` käynnistää [localhost serverin](localhost:3000)

## Julkaisu

```npm run build``` Tekee tuotanto valmiin paketin

```firebase serve``` Testaa paketin paikallisella serverillä, muista testata tämän toimivuus!

```firebase deploy``` Julkaisee paketin [https://onniniemisite.firebaseapp.com/](https://onniniemisite.firebaseapp.com/);

## Git käytäntöjä

Uusille ominaisuuksille tehdään  ominaisuus branch ja pull request kun ominaisuus on valmis yhditettäväksi masteriin

Ominaisuudet luodaan projektin hallinta taululle jossa ne assignataan henkilölle. Ominaisuuksien edistymistä seurataan taulun avulla.

Committiin ja ominaisuus branchiin lisätään ominaisuus kortin numero esim."#3"

```git add .```  lisää kaikki muutoksia sisältävät tiedostot muutos jonoon

```git commit -m "Tähän tulee muutosta kuvaa kuvaus"``` Tekee commitin muutoksista (näihin voi aina palata jos jokin menee pieleen)

```git push``` Työntää muutokset githubiin



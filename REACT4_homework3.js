//change name to "App"

/*Zadanie 3
W tym samym pliku stwórz dwa inne komponenty z których jeden wypisze jakiś dowolny tekst, a drugi wyświetli zdjęcie.

Wynikowy kod:
<h1>Hello World!</h1>
<p>tutaj miejsce na Twoj tekst</p>
<img src="https://picsum.photos/400?random" alt="obrazek" />

Extra: Spróbuj również wyświetlić obrazek src/logo.svg*/

import React from 'react';
import logo from './logo.svg';

const site = () => (
  <div>
    <h1>Hello World!</h1>
    <p>react moja miłość</p>
    <img src="https://picsum.photos/400?random" alt="obrazek" />
    <img src={logo} />
  </div>);


export default site;



# PLATZIDIOM

Platzidiom es un idioma inventado para el [curso de fundamentos de javascript](https://platzi.com/clases/fundamentos-javascript/) 
de [platzi](https://platzi.com/), el mejor lugar de educacion online.

## Descripción idioma

- si la palabra termina en "ar", se le quitan esos dos caracteres

- si la palabra inicia con z, se le añade "pe" al final

- si la palabra traducida tiene 10 o mas letras,
  se debe partir a la mitad y unir con un guion en el medio

- si la palabra original es un palíndromo,
  ninguna regla anterior cuenta y se devuelve
  la misma palabra intercalando mayúscula y minúsculas

## Instalación

```
npm install platzidiom
```

## Uso

```
import platzom from 'platzom'

platzom("programar") // = program
platzom("zorro") // = zorrope
platzom("zarpar") // = zarppe
platzom("abecedario") // = abece-dario
platzom("sometemos") // = SoMeTeMoS
```

## Creditos

- [Andrew Ramirez](https://twitter.com/@AndrewWKF)
- [MIT](https://opensource.org/Licenses/MIT)
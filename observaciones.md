# Observaciones

Brenda, felicitaciones por tu trabajo. Tu TP se ve hermoso: seguís a la perfección el diseño propuesto y se nota que hay mucho tiempo invertido en hacer que se vea lo mejor posible y que siga lo mas fielmente las pautas de diseño dadas. Me gusta mucho la paleta de colores :)

Como dije en clase, este trabajo no se hace para que constates conocimientos, sino para que aprendas: en ese sentido, mi intencion es que estos comentarios te sirvan para aprender, mejorar tu codigo a futuro e ir apreciando mejor qué se espera de nosotras como desarrolladoras front end.

## Estructura correcta de documento HTML

En general tu HTML está excelente. Claro, bien comentado y correctamente identado.

Algunas decisiones no están bien. Importás las tipografías de google usando el comando para css, por lo que tenés que agregar innecesariamente una etiqueta `style` en el header. Eso debería estar directamente en el css, o deberías usar los `link` para html que Google Fonts te da. El lenguaje del documento está en inglés, te comento en la sección de accesibilidad por qué eso es importante.

Te falta un poquitín más de prolijidad en tu HTML. Por ejemplo, esta línea:

```html
<li > <a href="#section-contacto" class="boton" > CONTACTO </a> </li>
```

Debería estar así:

```html
<li><a href="#section-contacto" class="boton">CONTACTO</a></li>
```

Sé que a esta altura es muy difícil entender la importancia de la prolijidad en el código pero te aseguro que simplifica un montón su lectura. Es cuestión de acostumbrarse, y te va a empezar a pasar sólo, pero mientras antes incorpores estas buenas prácticas, mejor.

## Respeta la consigna

- El portfolio cuenta con las secciones solicitadas

Cumplido.

- Al clickear en los links de navegación, debe llevar a la sección correspondiente

Cumplido.

- Al clickear en los links de contacto, debe llevar a la página externa correspondiente

No cumplido. No es necesario que agregues tus propias redes si es algo que preferís no hacer, pero
cualquier link a una web externa hubiera servido para cumplir la consigna.

- El portfolio debe tener un diseño responsivo y verse correctamente en distintos dispositivos

No cumplido. Esto es lo que mas lamento, ya que tu trabajo refleja tu talento y ganas, pero el requisito del responsive es super importante. La inmensa mayoría de tus usuarios verán tu web desde el celular: es absolutamente vital que puedan tener una buena experiencia en tu sitio. Asi como esta, tu web no es navegable ni desde tablet ni desde celulares pequeños.

Quedo un poco desconcertada porque hay ocasiones donde se nota que te esforzaste en el responsive, y otras secciones en las cuales no hay ni un intento de incorporarlo. No sé si el problema fue falta de tiempo -en ese caso, sí te recomiendo que te tomes unos días para arreglarlo- o si hay algo que no pudiste solucionar -en ese caso, te diría que me escribas ya así lo vemos juntas :)

Noto que le diste mucha importancia a celulares grandes, lo cual se agradece, pero la misma atención debería estar en todas las resoluciones. Creo que comenté en clase que lo más habitual es seguir las media queries que sugiere bootstrap. Te las dejo como una guia para futuros trabajos:

```css
/* Celulares: hasta 320px debería verse bien */
@media (max-width: 576px) {
  ...;
}

/* Celulares en modo horizontal y tablets pequeñas */
@media (max-width: 768px) {
  ...;
}

/* Tablets  */
@media (max-width: 992px) {
  ...;
}

/* Monitores pequeños */
@media (max-width: 1200px) {
  ...;
}

/* Monitores grandes */
@media (max-width: 1400px) {
  ...;
}
```

- El portfolio debe estar deployado y ser accesible desde una URL

Cumplido

- El repositorio en GitHub debe tener un readme adecuado

No cumplido. El README es realmente muy importante! Ayuda mucho a quienes encuentran nuestro github, especialmente cuando estamos recién arrancando.

### Respeta el diseño dado

Cumplido a la perfección.

### Buena estructura de proyecto

Cumplido en general. La única excepción es la carpeta .vscode, que agrega automáticamente a veces Visual Studio Code. Es muy molesta, y lo recomendable es que la borres del proyecto deployado.

### Código bien indentado

Tabulas muy bien, lo cual parece un detalle extra cuando una recien comienza pero ayuda un monton a su legibilidad, y que lo hayas logrado en esta etapa es un gran mérito.

### Comentarios que permiten mejorar la legibilidad del código

Quizá un poco informales de más (no los escribiría así en una entrega para un trabajo), pero perfectos para esta etapa.

### Uso correcto de etiquetas semánticas

En general usas bien las etiquetas semánticas, pero hay varias cosas a mejorar acá.

- Usás `header` para la barra de navegación, eso debería sí o sí ser un nav (un lector de pantalla va a buscar el nav para darle opciones de navegación al usuario).
- Tu nombre es un `div`. Debería ser una etiqueta que indique texto, e idealmente un `h1`, ya que es el texto más importante de tu página.
- "Mis proyectos" y "Mis conocimientos" tienen exactamente el mismo estilo y la misma jerarquía, ya que son ambos títulos de secciones. Ambos deberían ser `h2`: no tiene sentido que uno sea `h1`.
- Tenés un `h1` para "Contactame". Nunca deberías tener más de un `h1` por página, ya que solamente hay un texto que debería ser el principal. Contactame debería ser un `h2`.
- Usás `div` para tus tarjetas: yo creo que deberían ser `article`.

### Buenos nombres de clases

En general está cumplido, aunque noto algunas clases que tienen identidades confusas y problemas con lo que consideramos "descriptivo". Cuando decimos que un nombre de clase debe ser descriptivo, lo decimos en un sentido funcional: qué rol cumple este elemento en el código. Los colores de los elementos, su forma, su estilo, su posición, todas esas cosas pueden cambiar y efectivamente cambian todo el tiempo en las webs que hacemos. El botón que hoy es violeta mañana será azul; la sección que estaba a la derecha mañana estará arriba. Por lo tanto esos factores sos no son buenos descriptores, y no deberían ser parte de nuestros nombres de clases. Cosas como sección "violeta" o sección "derecha" deberían cambiarse para representar qué son en tu página: la sección que tiene una cita, el formulario de contacto.

### Código CSS bien estructurado

Cumplido a nivel formal. Noto algunos estilos innecesarios o confusos, que te voy indicando en tu archivo de css.

### Reutilización de estilos

No está cumplido este objetivo, ya que muchas veces repetís innecesariamente código css y no aprovechás correctamente la oportunidad de darle el mismo estilo a muchos elementos con la misma clase. Uso el siguiente caso como un ejemplo, pero no es la única vez en que podrías mejorar la reutilización. Considerá este código (y pensá también como hacer más descriptivo el nombre de la clase):

```css
.icon-card2 {
  font-size: 85px;
  color: #3d8fc6;
  margin-bottom: 10px;
}
.icon-card3 {
  font-size: 85px;
  color: #cc6699;
  margin-bottom: 10px;
}
```

Lo que cambia es el color de los íconos, pero todos los demás estilos son iguales. Podrías haber hecho una clase para las tarjetas, y una clase sólo para los colores.

No repetirnos a nosotras mismas es un principio muy importante en programación, porque en la repetición se encuentran buena parte de nuestros errores. Reutilizá tus clases siempre que puedas.

### Cumple con criterios básicos de accesibilidad

El lenguaje de tu documento de HTML está en inglés, por lo que un lector de pantalla va a tratar de leer todos tus textos en inglés. El efecto es muy feo y confuso: pronuncian en inglés las palabras en español, así que si ven "generador de memes" van a leer "yiniradour di mims". Siempre tratá de que el atributo `lang` de tu HTML refleje el idioma de los textos en tu página.

La falta de algunas etiquetas semánticas y la confusión con los h1 y h2 también contribuyen a que tu web no sea tan accesible como quisiéramos.

- Los colores tienen un contraste adecuado

Cumplido en general, aunque en varios casos se te escapa: el color de fondo "violet" (EE82EE en hex) con el texto blanco es un ejemplo.

- Las imágenes tiene el atributo `alt` que corresponde

No cumplido. Los `alt` son realmente importantes para que los lectores de pantalla puedan orientar a sus usuarios en nuestra web, y también mejoran el SEO.

- Los íconos y elementos que no presentan texto agregan la información correspondiente por otros medios (etiquetas aria, texto oculto)

No cumplido, por ejemplo en los links a redes sociales de tu footer. Necesitan un aria.

- Los íconos y elementos que no necesitan ser anunciados por un lector de pantalla tienen la etiqueta aria
  correspondiente

No cumplido.

- Commits con mensajes adecuados

No cumplido, tenés solamente tres commits en el proyecto, que no sirven para ver la evolución de tu código ni entender cómo lo fuiste encarando. Para futuros proyectos tratá de ser más prolija con cada commit: debería haber uno por sección terminada o funcionalidad finalizada.

- Cuenta con un favicon

No cumplido.

No creo en las notas, Brenda. Una alumna puede tener determinada nota porque le faltó tiempo, otra porque le faltaron ganas, otra porque realmente no entendió. A veces un código está realmente muy mal, otras veces un código está realmente muy bien, como en este caso, pero hay partes de la consigna incumplidas. Una nota no me permite reflejar esas diferencias. Antes no las usaba, pero la presión popular del alumnado hizo que las incorporara :)

Te aclaro esto porque la nota que te doy sigue las pautas marcadas en las consignas de Ada, y la considero como un reflejo del estricto y exclusivo cumplimiento de esas consignas. Esta nota no habla de tu talento -que se nota es buenisimo- ni de tus ganas -que están reflejadas en este código. Te comenté muchas cosas: hay muchas cosas a mejorar, y eso es bueno. Es una oportunidad de aprender. Sé que Fer te puso otra nota, y sospecho que él se enfocó en lo mismo que notó yo: lo hermosa que está tu web, lo correcto de tu código, lo mucho que se aprecia tu aprendizaje. En esta nota, insisto, sólo evalúo el cumplimiento formal de las consignas. Tu trabajo es excelente, y tengo realmente muchas ganas de seguir viendo lo que hacés y cómo crecés como desarrolladora front end.

### Nota: 7

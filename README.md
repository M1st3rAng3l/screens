# W-UI



# CSS



## Styles 

### Color:

```css
p{
    color: blue;
}

h1{
    color: pink;
}

title{
    color:red;
    
}

placeholder{
    color: darkblue;
}
```



### Font-Family

Es una propiedad que define una lista de fuentes o familia de fuentes, con un orden de prioridad , para utilizar en un elemento selecionado.

##### Ejemplo:



```css
body{
    font-family: 'Arial';
}
```



### Font-Size

Es propiedad  que especifica la dimensión de la letra. Este tamaño puede, a su vez, alterar el aspecto de alguna otra cosa, ya que se usa para calcular la longitud de las letras con px (píxeles).

##### Ejemplo:

```css
p{
    font-size: 20px; 
}
```



### Text-Align

Es una propiedad para alinear el contenido interior de un elemento de bloque.

#### Ejemplo de Código Fuente:

```css
.text1{
  text-align: right;
}
.text2{
  text-align: center;
}
.text3{
  text-align: justify;
}
.text4{
  text-align: left;
}


```

1. center: el contenido se centra entre los bordes izquierdo y derecho, el espacio en blando en ambos lados de cada linea deben ser iguales.
2. left: el contenido se alinea a lo largo del lado izquierdo.
3. right: el contenido se alinea a lo lardo del lado derecho.
4. justify: Los espacios de contenido se extienden de tal manera que la mayoría de los bloques encajen en una línea como sea posible y la primera palabra en esa línea esté en el borde izquierdo y la última palabra esté en el borde derecho.



#### Ejemplo de Uso: 

```html
<html>
    <head>
    </head>
        <body>
        <p class="text1">qwertyuiiopñlkjhgfdazxcvbnm1599788665423300</p>
        <p class="text2">mnbvcxzasfghjkklñpooiuytreq1245678900dsfffd</p>
        <p class="text3">plmkoijnbhuygvgtrrfcd7412589633202qwwszxzcc</p>
        <p class="text4">12345677890pdhfhasdvvbvKCBDSKBHDFDBBSSKABVH</p>
    </body>
</html>
```



### Padding

Es la propiedad que define la parte más profunda del modelo de caja, creando espacio alrededor del contenido de un elemento, dentro de los márgenes y/o bordes definidos.

#### Ejemplo 1:

```css
div{
    padding: 20px 20px 20px 20px;
}
```

#### Ejemplo de Código Fuente:

```css
.pad-5 {
  padding: 5px;
}
```



#### Ejemplo de uso:

```html
<ul>
    <li class="pad-5">Buenos Dias</li>
    <li class="pad-5">Buenas Tardes</li>
    <li class="pad-5">BUenas Noches</li>
</ul>
```



### Background-color

Es una propiedad que establece el color de fondo de un elemento.

#### Ejemplo de Código Fuente:

```css
.bg-white {
  background-color: #FFFFFF;
}
.bg-light-blue {
  background-color: #F1F9FF;
}
.bg-mid-blue {
  background-color: #BCE0FD;
}
.bg-blue {
  background-color: #7FC4FD;
}
.bg-dark-blue {
  background-color: #2699FB;
}
```



#### Ejemplo de Uso

```html
<html>
    <head>
    </head>
    <body>
        <h1 class="bg-dark-blue">BUENOS DIAS</h1>
        <p class="bg-light-blue">qazxsdweddvrfrgtggbhyhynujuljkpilmomu</p>
        <p class="bg-blue">123456789mlpoknjiuhbvgytfcxdresxzaqwsxgffbdb</p>
        
    </body>
</html>
```



### Font-weight

Es una propiedad que especifica el peso o el grueso de la letra.

#### Ejemplo de Código Fuente:

```css
.plight {
  font-weight: lighter;
}

.pthick {
  font-weight: bold;
}

```

#### Ejemplo de Uso:

```html
<html>
    <head>
    </head>
    <body>
        <p class="plight">
   qaxswedcvfrgbyhnjujmmiolpoomjhhgfrgfbfbfsbsfadyfgjfbnvjlbgabrielsajfnoafioadjodnondnavnvavvnnnnnndiadsuohh
        </p>
        <p class="pthick">
            fdhfjdhjkdsuhfsighogghgdiahfdfhhalometalgearsolidofnsfnoasffdsfsnvonsadsilenthillfiofdfnosnfosadnfosnfjsdfnsafnfnaf
        </p>
    </body>
</html>
```



### Width

Es una propiedad que especifica la anchura del área del contenido de un elemento.

#### Ejemplo de Código Fuente:

```css
.ancho1{
    width: 25%;
}
```



#### Ejemplo de Uso:

```html
<html>
    <head>
    </head>
    <body>
        <p class="ancho1">
            dsfdjsdajlngadsjsadjbasdbfaiusfhfshgisvksnfvuhdssbvsvjvfldjvsdvkfbfblsvblfbvkfvbjsbvdsfjvvbsjkvbfvvbfjfhdoisdfnvffshguahgoshgughshgfhghgignfhgjsubfhsofhsfigheihfshaabasdibvjaghgnjaghrwgqnfuag003hw9gnjbgu´vbvqigb'qgpgbiwe
        </p>
    </body>
</html>

```



### Box-Shadow

Es una propiedad que utiliza para arrojar una o más sombras a un elemento. Esto permite implementar fácilmente sombras múltiples(externas o internas) en los elementos, especificando valores de color, tamaño, desenfoque y desplazamiento.

Ejemplo de Código Fuente:

```css
.shadow1{
    box-shadow: 4p 4px 4px 8px red;
}
```

#### Ejemplo de Uso:

```html
<html>
    <head>
    </head>
    <body>
        <a href="#" class="shadow1">Matrimonio</a>
    </body>
</html>
```

Border-Radius:

Es una propiedad que permite definir qué tan redondeadas serán las esquinas.

Ejemplo de Código Fuente:

```css
.boton{
    border-radius: 5px;
}
```

Ejemplo de Uso:

```html
<html>
    <head>
        
    </head>
    <body>
        <a href="#" class="button pad-10 c-dark-blue">SER FELIZ</a>
    </body>
</html>
```



### Display

Es una propiedad que especifica el tipo de cuadro de representación utilizado para un elemento. En HTML,  los valores de propiedad  predeterminados se toman de los comportamientos de los cambios en las especificaciones HTML o de la hoja de estilo predeterminada del navegador / usuario.

### FlexBox

Es un modo de diseño que permite colocar los elementos de una página para que se comporten de forma predecible cuando el diseño de la página debe acomodarse a diferentes tamaños de pantalla y diferentes dispositivos. Lo que caracteriza un diseño flexible es su habilidad para alterar el ancho y alto de sus elementos para ajustarse lo mejor posible al espacio disponible en cualquier dispositivo. Un contenedor flexible expande sus elementos para rellenar el espacio libre, o los comprime para evitar que rebasen el área prevista.

### Flex-direction

Es la propiedad establece cómo se colocan los elementos flexibles en el contenedor flexible que define el eje principal y la dirección (normal o invertida).

#### Ejemplo de Código Fuente 1:

```css
.flex-box {
  display: flex;
}

.flex-wrap1{
  flex-wrap: wrap
}

.flex-nowwrap{
  flex-wrap: nowrap;
}

.flex-wrap2{
  flex-wrap: wrap-reverse;
}

.flex-box.row {
  flex-direction: row;
}
.flex-box.row.reverse{
  flex-direction: row-reverse;
}
.flex-box.row.xcenter {
  justify-content: center;
}
.flex-box.row.ycenter {
  align-items: center;
}
.flex-box.row.xstart {
  justify-content: flex-start;
}
.flex-box.row.ystart {
  align-items: flex-start;
}
.flex-box.row.xend {
  justify-content: flex-end;
}
.flex-box.row.yend {
  align-items: flex-end;
}
.flex-box.row.xbetween {
  justify-content: space-between;
}
.flex-box.row.xaround {
  justify-content: space-around;
}
.flex-box.column {
  flex-direction: column;
}
.flex-box.flex-box.column.reverse{
  flex-direction: column-reverse;
}
.flex-box.column.xcenter {
  align-items: center;
}
.flex-box.column.ycenter {
  justify-content: center;
}
.flex-box.column.xstart {
  align-items: flex-start;
}
.flex-box.column.ystart {
  justify-content: flex-start;
}
.flex-box.column.xend {
  align-items: flex-end;
}
.flex-box.column.yend {
  justify-content: flex-end;
}
```

#### Ejemplo de Uso 1:

```html
<h4> Columnas</h4>
<div class="flex-box column">
        <div class="mar-10 bg-blue">A</div>
        <div class="mar-10 bg-light-blue">B</div>
        <div class="mar-10 bg-mid-blue">C</div>
     <div class="mar-10 bg-blue">D</div>
        <div class="mar-10 bg-light-blue">E</div>
        <div class="mar-10 bg-mid-blue">F</div>
      </div>
      <h4>filas</h4>
      <div class="flex-box row">
        <div class="mar-10 bg-dark-blue">A</div>
        <div class="mar-10 bg-mid-blue">B</div>
        <div class="mar-10 bg-light-blue">C</div>
          <div class="mar-10 bg-dark-blue">D</div>
        <div class="mar-10 bg-mid-blue">E</div>
        <div class="mar-10 bg-light-blue">F</div>
      </div>
```

#### Ejemplo de Uso 2:

```html
   <h4> WRAP</h4>
<div class="flex-box flex-wrap1">
        <div class="mar-10 bg-blue">A</div>
        <div class="mar-10 bg-light-blue">B</div>
        <div class="mar-10 bg-mid-blue">C</div>
    <div class="mar-10 bg-blue">D</div>
        <div class="mar-10 bg-light-blue">E</div>
        <div class="mar-10 bg-mid-blue">F</div>
      </div>
      <h4>WRAP-REVERSE</h4>
      <div class="flex-box flex-wrap2">
        <div class="mar-10 bg-dark-blue">A</div>
        <div class="mar-10 bg-mid-blue">B</div>
        <div class="mar-10 bg-light-blue">C</div>
           <div class="mar-10 bg-dark-blue">D</div>
        <div class="mar-10 bg-mid-blue">E</div>
        <div class="mar-10 bg-light-blue">F</div>
      </div>
```

#### Ejemplo de Uso 3:

```html
<h4> combinado 1</h4>
<div class="flex-box row flex-wrap1 xcenter">
        <div class="mar-10 bg-blue">A</div>
        <div class="mar-10 bg-light-blue">B</div>
        <div class="mar-10 bg-mid-blue">C</div>
    <div class="mar-10 bg-blue">D</div>
        <div class="mar-10 bg-light-blue">E</div>
        <div class="mar-10 bg-mid-blue">F</div>
      </div>
      <h4>conbinado 2</h4>
      <div class="flex-box flex-wrap2 ycenter">
        <div class="mar-10 bg-dark-blue">A</div>
        <div class="mar-10 bg-mid-blue">B</div>
        <div class="mar-10 bg-light-blue">C</div>
           <div class="mar-10 bg-dark-blue">D</div>
        <div class="mar-10 bg-mid-blue">E</div>
        <div class="mar-10 bg-light-blue">F</div>
      
      </div>
```




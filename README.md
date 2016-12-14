# jQuery

![enter image description here](https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/JQuery_logo.svg/1280px-JQuery_logo.svg.png)

-------------------------------------------------------------------------------------------------
Mettre en évidence les différences entre jQuery et javascript natif.
Le slogan "write less, do more" n'est qu'à moitié trompeur. On peut faire exactement la même chose, mais on écrit en effet beaucoup moins.

Récupérer le projet
-------------

Vous allez d'abord _forker_ ce repo git.
Les forks vous permettent de créer une copie de ce repo sur votre propre compte.

Ensuite, clonez la version que vous avez sur votre compte en utilisant ssh.

```$ git clone git@github.com:VOTRE_COMPTE/jquery.git ```

Attention : si cette commande ne fonctionne pas, vérifier de bien avoir votre clé ssh liée à votre compte github.

Intégrer jQuery à son projet
-------------

On peut soit utilisez un [cdn](https://code.jquery.com/jquery-3.1.1.min.js) et le mettre en lien avant la fin de la balise body.
```
<script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
```

Soit le downloader via npm 
```
$ npm install jquery
```
et l'inclure à la main, ou même l'inclure à ses vendors via gulp.

Les selectors
-------------

Vous pouvez sélectionner les éléments du DOM beaucoup plus facilement !

Par id : 

```
$('#ma-div')
```

Par class : 

```
$('.ma-div')
```

Par balise : 

```
$('div')
```
---------------------------------------------------------------------------------------------
Plus d'exemples dans _index.js_ !
Encore plus d'exemples ? JQuery a une [doc](http://api.jquery.com/) super complète à checker sans modération. Il y a aussi une [quick api reference](https://oscarotero.com/jquery/) sympa.
# todo-list

correr el programa:

1-. Descargar el código completo.

2-. Una vez descargado asegurese de tener descargardo Angular, Node.js, Express y Mongodb.

3-. Cambiar una linea de codigo que se encuentra  en C:\Users\jesus\Desktop\todo-list\src\routes\tasks.js

const db = mongojs('mongodb://jesus:todolist@todo-list-db-shard-00-00.0zqai.mongodb.net:27017,todo-list-db-shard-00-01.0zqai.mongodb.net:27017,todo-list-db-shard-00-02.0zqai.mongodb.net:27017/<dbname>?ssl=true&replicaSet=atlas-ehvme5-shard-0&authSource=admin&retryWrites=true&w=majority', ['tasks']);
  
  
la borramos y colocamos esta linea de codigo:

const db = mongojs('list-db', ['tasks']);

4-. Despues, una vez que descargamos mongodb vamos a su carpeta y buscamos el ejecutable mongod.exe y lo ejecutamos.


5-. Abrimos una terminal y dentro de la terminal entramos a la carpeta principal del programa que se nos descargo por ejemplo yo la tengo en mi escritorio:

C:\Users\jesus\Desktop\todo-list>

y escribimos el siguiente comando:

C:\Users\jesus\Desktop\todo-list> npm run dev

y nos dara como resultado esto:

[nodemon] 2.0.4
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node src/index.js`
server on port 3000


6-. Abrimos otra terminal, entramos a la carpera del proyecto y nos posicionamos en la carpeta client.

C:\Users\jesus\Desktop\todo-list\src\client>

Y escribimos el siguiente comando:

C:\Users\jesus\Desktop\todo-list\src\client>ng serve

les dara como resultado algo como esto.

chunk {main} main.js, main.js.map (main) 25 kB [initial] [rendered]
chunk {polyfills} polyfills.js, polyfills.js.map (polyfills) 141 kB [initial] [rendered]
chunk {runtime} runtime.js, runtime.js.map (runtime) 6.15 kB [entry] [rendered]
chunk {styles} styles.js, styles.js.map (styles) 867 kB [initial] [rendered]
chunk {vendor} vendor.js, vendor.js.map (vendor) 2.77 MB [initial] [rendered]
Date: 2020-07-25T04:47:10.347Z - Hash: 1a051305c39a6beaf6be - Time: 18048ms
** Angular Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200/ **
: Compiled successfully.

7-. Despues, debemos entrar en nuestro navegador y buscar localhost:4200

Y el programa deberia estar ejecutandose correctamente.


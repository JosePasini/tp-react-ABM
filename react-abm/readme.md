# README ABM.
## React With Go

### Clonar el proyecto:
`git clone https://github.com/JosePasini/tp-react-ABM.git`

### Asegurarse de tener instalado Node, MySQL, XAMPP y Go:
https://nodejs.org/es/download/

https://go.dev/dl/

https://www.mysql.com/downloads/

https://www.apachefriends.org/

## Modificar Credenciales de BD en GO
Las credenciales por defecto para la BD son:
usuario: root
sin utilizar contraseña, si se desea mofificar las credenciales deberá hacerde dentro del proyecto GO en el archivo **internal/app/config.go**

## SCRIPT BASE DE DATOS
Se deberá correr el siguiente script (puede ser en workbench).

`DROP SCHEMA IF EXISTS react;
CREATE SCHEMA react;
DROP TABLE IF EXISTS `react`.`instrumentos`;
CREATE TABLE `react`.`interview`(
    `id` BIGINT NOT NULL AUTO_INCREMENT,
		`instrumento` VARCHAR(255) NULL,
		`marca` VARCHAR(255) NULL,
		`modelo` VARCHAR(255) NULL,
        		`imagen` VARCHAR(255) NULL,
                `precio`FLOAT,
                `costo_envio` FLOAT,
		`cantidad_vendida` INT,
        `descripcion` VARCHAR(255) NULL,
		PRIMARY KEY (`id`)
);`


## Correr el proyecto en GO
Abrir una terminal (puede ser en VSCode) 
Una vez que tengamos abierta la terminal, nos aseguraremos de estar en la carpeta raíz del proyecto y utilizaremos el siguiente comando:
`go mod tidy`
para actualizar los modulos del proyecto
una vez que se actualicen los modulos, desde la terminal situarse en la carpeta **cmd/api**
allí encontraremos el archivo main.go de nuestro proyecto.
Desde la terminal y situado en la carpeta **cmd/api** ejecutar el siguiente comando
`go run main.go`

## Correr proyecto en React
Hay que tener instalado node, podemos verificarlo con el comando `node --version`
Para correr el proeycto deberemos situarnos en la carpeta raíz y ejecutar los siguientes comandos:
`npm install`
`npm start`

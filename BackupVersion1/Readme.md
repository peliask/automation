
*CODECEPTJS CON SELENIUMWEBDRIVER*

***      
1. Descargar e Instalar nodejs: https://nodejs.org/en/ 
2. Descargar e Instalar yarn: https://yarnpkg.com/en/docs/install
3. Ingresar a la ventana de comandos cmd y verificar la instalación: yarn --version
4. Crear una carpeta propia e instalar: npm install -g codeceptjs 
5. Descargar Selenium: npm i -g selenium-standalone 
6. Instalar Selenium: selenium-standalone install
7. Iniciar Selenium: selenium-standalone start
8. Inicializar y crear el codecept json: codeceptjs init (aceptar con enter y elegir SeleniumWebDriver)
9. Inicializa y crea el package json: npm init 
10. Descargar e Instalar visual code: https://code.visualstudio.com/docs/?dv=win
11. Adicionar configuración con lo necesario de codecept.json y package.json

*codecept.json*

```json
{
  "tests": "./*_test.js",
  "timeout": 10000,
  "output": "./output",
  "helpers": {
    "SeleniumWebdriver": {
      "url": "----",
      "browser": "chrome",
      "uniqueScreenshotNames": true
    },
    "Mochawesome": {
      "uniqueScreenshotNames": true,
      "disableScreenshots": false
    }
  },
  "include": {
    "I": "./steps_file.js"
  },
  "bootstrap": false,
  "mocha": {
    "reporterOptions": {
      "codeceptjs-cli-reporter": {
        "stdout": "-",
        "options": {
          "verbose": false,
          "steps": true
        }
      },
      "mochawesome": {
       "stdout": "./output/console.log",
       "options": {
         "reportDir": "./output",
         "reportFilename": "index"
        }
      }
    }
  },
  "name": "automation"
}
```
*package.json*

```json
{
  "name": "automation",
  "version": "1.0.0",
  "main": "index.js",
  "author": "Pris",
  "license": "MIT",
  "private": true,
  "scripts": {
    "clean": "rimraf output",
    "test": "rimraf output & codeceptjs run --grep login --reporter mocha-multi"
  },
  "devDependencies": {
    "codeceptjs": "^1.0.3",
    "mocha-junit-reporter": "^1.15.0",
    "mocha-multi": "^0.11.1",
    "mochawesome": "^2.3.1",
    "nightmare": "^2.10.0",
    "nightmare-upload": "^0.1.1",
    "rimraf": "^2.6.2",
    "selenium-webdriver": "^3.6.0",
    "webdriverio": "^4.8.0"
  }
}
```
12. Instalar el directorio node_modules: yarn install 
13. Crear un nuevo test: codeceptjs gt (responder con el nombre y el feature)
14. Ejecutar una prueba del tipo "login" con el comando: yarn run test
15. Para crear en modo page object usar: codeceptjs gpo

***

*CODECEPTJS CON PUPPETEER*

***    
Pre requisitos debes tener instalado git node npm yarn:

1. Git https://git-scm.com/download/win
2. nodejs: https://nodejs.org/en/
3. yarn: https://yarnpkg.com/en/docs/install
4. Gestor de código Visual code: https://code.visualstudio.com/docs/?dv=win

Crea una carpeta del proyecto, abre el git bash y verifica la instalación: 

<micarpeta>yarn --version

Ejecuta los siguientes comandos: 

1. npm i npm@latest -g   (Instala la última versión actualizada de npm)
2. npm i -g codeceptjs   (Instala codeceptjs)
3. npm i -g puppeteer@^1.0.0 
4. npm i -g mocha@* 
5. npm i -g mochawesome-report-generator 
6. npm i -g mochawesome
7. npm i codeceptjs-puppeteer

Inicializar y crear el codecept json: 
codeceptjs init (acepta con enter y elige el Helper de tu preferencia, para este caso usaremos puppeteer)


Configurar codecept.json:

codeceptjs.json
```json
{
  "tests": "./*_test.js",
  "timeout": 10000,
  "output": "./output",
  "helpers": {
    "Puppeteer": {
      "url": "https://www.---------.com",
      "show": true
    },
    "Mochawesome": {}
  },
  "include": {
    "I": "./steps_file.js"
  },
  "bootstrap": false,
  "mocha": {
    "reporterOptions": {
      "reportDir": "./output/"
    }
  },
  "name": "TestAutomation"
}
```

Inicializa y crea el package json: 
npm init

package.json
```json
{
  "name": "testautomation",
  "version": "1.0.0",
  "description": "Test Automation",
  "main": "index.js",
  "dependencies": {
    "codeceptjs-puppeteer": "^1.1.0"
  },
  "devDependencies": {
    "codeceptjs": "^1.1.6",
    "puppeteer": "^1.0.0",
    "codeceptjs-puppeteer": "*",
    "mocha": "*",
    "mochawesome-report-generator": "*",
    "mochawesome": "^2.3.1"
  },
  "scripts": {
    "test": "codeceptjs run --reporter mochawesome"
  },
  "author": "Pris",
  "license": "ISC"
}
```

Instalar las dependencias: 
yarn install

Generar el standar type definition: 
codeceptjs def

Crear un nuevo test: 
codeceptjs gt (responder con el nombre y el feature)

```js
Scenario('PE Login Agregar Pedido', (I) => {
    I.say('Realizar login');
    I.amOnPage('/');
    I.see('¡Bienvenida');
    I.resizeWindow(1024,780);
    I.selectOption('CodigoISO', 'PE'); //name
    I.wait(2);
    I.fillField('CodigoUsuario','usuariopruebape');
    I.fillField('ClaveSecreta','-------');
    I.click('#btnLogin'); //selector
    I.wait(2);
    I.amOnPage('/Bienvenida');
    I.wait(2);
    I.pressKey('Escape');
    I.wait(2);
    I.see('EL CIERRE ES');
    I.see('MI ESTADO DE CUENTA');
    I.click('#lnk-sup-cerrar-sesion');
    I.wait(2);
});
```
Ejecutar la prueba con: 
yarn run test 

o
codeceptjs run --reporter mochawesome



*PASOS PARA INSTALAR*

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
14. Generar el standar type definition: codeceptjs def

```js
type ICodeceptCallback = (i: CodeceptJS.I) => void;

declare const actor: () => CodeceptJS.I;
declare const Feature: (string: string) => void;
declare const Scenario: (string: string, callback: ICodeceptCallback) => void;
declare const Before: (callback: ICodeceptCallback) => void;
declare const After: (callback: ICodeceptCallback) => void;
declare const within: (selector: string, callback: Function) => void;

declare namespace CodeceptJS {
  export interface I {
    Nightmare: (function) => any; 
    haveHeader: (header, value) => any; 
    amOnPage: (amOnPage) => any; 
    seeInTitle: (seeInTitle) => any; 
    dontSeeInTitle: (dontSeeInTitle) => any; 
    grabTitle: () => any; 
    seeInCurrentUrl: (url) => any; 
    dontSeeInCurrentUrl: (url) => any; 
    seeCurrentUrlEquals: (seeCurrentUrlEquals) => any; 
    dontSeeCurrentUrlEquals: (dontSeeCurrentUrlEquals) => any; 
    see: (text, context=null) => any; 
    dontSee: (text, context=null) => any; 
    seeElement: (seeElement) => any; 
    dontSeeElement: (dontSeeElement) => any; 
    seeElementInDOM: (seeElementInDOM) => any; 
    dontSeeElementInDOM: (dontSeeElementInDOM) => any; 
    seeInSource: (seeInSource) => any; 
    dontSeeInSource: (dontSeeInSource) => any; 
    click: (click) => any; 
    doubleClick: (doubleClick) => any; 
    moveCursorTo: (moveCursorTo) => any; 
    executeScript: (executeScript) => any; 
    executeAsyncScript: (executeAsyncScript) => any; 
    resizeWindow: (width, height) => any; 
    checkOption: (checkOption) => any; 
    fillField: (fillField) => any; 
    clearField: (field) => any; 
    appendField: (appendField) => any; 
    seeInField: (field, value) => any; 
    dontSeeInField: (field, value) => any; 
    pressKey: (key) => any; 
    triggerMouseEvent: (event) => any; 
    seeCheckboxIsChecked: (field) => any; 
    dontSeeCheckboxIsChecked: (field) => any; 
    attachFile: (locator, pathToFile) => any; 
    grabTextFrom: (grabTextFrom) => any; 
    grabValueFrom: (grabValueFrom) => any; 
    grabAttributeFrom: (grabAttributeFrom) => any; 
    selectOption: (select, option) => any; 
    setCookie: (cookie) => any; 
    seeCookie: (name) => any; 
    dontSeeCookie: (name) => any; 
    grabCookie: (name) => any; 
    clearCookie: (cookie) => any; 
    wait: (sec) => any; 
    waitForText: (waitForText) => any; 
    waitForVisible: (waitForVisible) => any; 
    waitForElement: (waitForElement) => any; 
    waitUntilExists: (waitUntilExists) => any; 
    refresh: () => any; 
    saveScreenshot: (saveScreenshot) => any; 
    scrollTo: (locator, offsetX=0, offsetY=0) => any; 
    debug: (msg) => any; 
    debugSection: (section, msg) => any; 
    addMochawesomeContext: (context) => any; 
    say: (msg) => any; 

  }
}

declare module "codeceptjs" {
    export = CodeceptJS;
}
```
15. Ejecutar una prueba del tipo "login" indicado en el grep: yarn run test
16. Para crear en modo page object usar: codeceptjs gpo


*Usando Puppeteer*

***    
Pre requisitos debes tener instalado git node npm yarn
Git https://git-scm.com/download/win
nodejs: https://nodejs.org/en/
yarn: https://yarnpkg.com/en/docs/install
Gestor de código Visual code: https://code.visualstudio.com/docs/?dv=win

Crea una carpeta del proyecto, abre el git bash y verifica la instalación: 
<micarpeta>yarn --version

Ejecuta los siguientes comandos: (i = install)

npm i npm@latest -g   (Instala la última versión actualizada de npm)
npm i -g codeceptjs   (Instala codeceptjs)
npm i -g puppeteer@^1.0.0 
npm i -g mocha@* 
npm i -g mochawesome-report-generator 
--npm i -g mochawesome

npm i codeceptjs-puppeteer

Inicializar y crear el codecept json: 
codeceptjs init (acepta con enter y elige el Helper de tu preferencia, para este caso puppeteer)

Inicializa y crea el package json: 
npm init

Configurar codecept.json y package.json:
------
codeceptjs.json
{
  "tests": "./*_test.js",
  "timeout": 10000,
  "output": "./output",
  "helpers": {
    "Puppeteer": {
      "url": "https://www.somosbelcorp.com",
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
------
package.json
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

Instalar las dependencias: 
yarn install
Generar el standar type definition: 
codeceptjs def
Crear un nuevo test: 
codeceptjs gt (responder con el nombre y el feature)


Scenario('PE Login Agregar Pedido', (I) => {
    I.say('Realizar login');
    I.amOnPage('/');
    I.see('¡Bienvenida');
    I.resizeWindow(1024,780);
    I.selectOption('CodigoISO', 'PE'); //name
    I.wait(2);
    I.fillField('CodigoUsuario','usuariopruebape');
    I.fillField('ClaveSecreta','1234567');
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

Ejecutar la prueba con: 
yarn run test
codeceptjs run --reporter mochawesome

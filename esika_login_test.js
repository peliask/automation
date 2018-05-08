/// <reference path="./steps.d.ts" />
Feature('Login');

Scenario('PE Desktop Menú Esika', (I) => {
    I.say('Deseo revisar las opciones del menú');
    I.amOnPage('/pe/');
    I.pressKey('Escape');
    I.see('INICIA SESIÓN');
    I.resizeWindow(1360,1024);

});

/*
Scenario('texto', (I, generalPage) => {
    generalPage.sendForm('País', 'usuarioprueba', 'XXX');
});

*/
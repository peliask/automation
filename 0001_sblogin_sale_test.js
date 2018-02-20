/// <reference path="./steps.d.ts" />
Feature('Login');

Scenario('Registered user should login to SB Chile and logout', (I) => {
     I.say('I want to login to SomosBelcorp Chile');
    I.amOnPage('/');
    I.wait(2);
    I.see('¡Bienvenida');
    I.selectOption('//*[@id="ddlPais"]', 'CL');
    I.wait(2);
    I.fillField('CodigoUsuario','usuariopruebacl');
    I.fillField('ClaveSecreta','1234567');
    I.click('#btnLogin');
     I.wait(2);
    I.amOnPage('/Bienvenida');
    I.wait(2);
    I.click('//*[@id="PopShowroomVenta"]/div/a/img');
    I.wait(2);
    I.click('//*[@id="lnk-sup-cerrar-sesion"]');
});

Scenario('Registered user should login to SB Bolivia and logout', (I,generalPage) => {
    generalPage.sendForm('BO','usuariopruebabo','1234567');
});

Scenario('Registered user should login to SB Perú and logout', (I,generalPage) => {
    generalPage.sendForm1('PE','usuariopruebape','1234567');
});

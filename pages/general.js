
'use strict';

let I;

module.exports = {

  _init() {
    I = require('../steps_file.js')();
  },

  // insert your locators and methods here
  fields: {
    pais:'//*[@id="ddlPais"]',
    usuario: 'CodigoUsuario',
    clave: 'ClaveSecreta',
  },
  submitButton: {css:'#btnLogin'},

  sendForm(pais,usuario,clave){
    I.amOnPage('/');
    I.resizeWindow(1920,1080);
    I.wait(2);
    I.see('¡Bienvenida');
    I.selectOption(this.fields.pais, pais);
    I.wait(2);
    I.fillField(this.fields.usuario,usuario);
    I.fillField(this.fields.clave,clave);
    I.click(this.submitButton);
    I.wait(2);
    I.amOnPage('/Bienvenida');
    I.wait(2);
    I.click('//*[@id="PopShowroomVenta"]/div/a/img');
    I.wait(2);
    I.click('//*[@id="lnk-sup-cerrar-sesion"]');
  },
   sendForm1(pais,usuario,clave){
    I.amOnPage('/');
    I.resizeWindow(1920,1080);
    I.wait(2);
    I.see('¡Bienvenida');
    I.selectOption(this.fields.pais, pais);
    I.wait(2);
    I.fillField(this.fields.usuario,usuario);
    I.fillField(this.fields.clave,clave);
    I.click(this.submitButton);
    I.wait(2);
    I.amOnPage('/Bienvenida');
    I.wait(1);
    I.click({css: 'a.cerrar-popup'});
    I.wait(1);
    I.click('//*[@id="lnk-sup-cerrar-sesion"]');
  }
}

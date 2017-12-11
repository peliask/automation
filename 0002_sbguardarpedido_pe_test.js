/// <reference path="./steps.d.ts" />
Feature('Guardar Pedido');

Scenario('Usuario Registrado de Perú que desea Guardar Pedido', (I) => {
    I.say('I want to login to SomosBelcorp Perú');
    I.amOnPage('/');
    I.resizeWindow(1366,768);
    I.wait(2);
    I.see('¡Bienvenida');
    I.selectOption('//*[@id="ddlPais"]', 'PE');
    I.wait(2);
    I.fillField('CodigoUsuario','041997354');
    I.fillField('ClaveSecreta','40596727');
    I.click('#btnLogin');
    I.amOnPage('/Bienvenida');
    I.wait(2);
    I.See('//*[@id="PopShowroomVenta"]/div/a/img');
    I.wait(2);
    I.See('//*[@id="lnk-sup-cerrar-sesion"]');
    I.click('//*[@id="contentmain"]/div[2]/div[1]/div[3]/a');
    I.wait(2);
    I.click('//*[@id="divListadoEstrategia"]/div/div/div[4]/div/div[4]/div[1]/a');
    I.wait(2);
    I.click('//*[@id="tbobyDetallePedido"]/div/div[3]/div/div/a[1]/img');
    I.wait(2);    
    I.clearField('//*[@id="txtLPCant1"]');
    I.fillField('//*[@id="txtLPCant1"]','3');
    I.wait(2);
    I.click('//*[@id="btnValidarPROL"]');
    I.wait(4);
    I.see('¡LO LOGRASTE');
    I.click('//*[@id="btnCerrar"]');
    I.click('//*[@id="contentmain"]/div[4]/div[5]/div[2]/div[4]/p/span/a');
    I.see('¿Deseas eliminar el pedido completo?.');
    I.click('//*[@id="btnEliminarPedidoCompletoSi"]'); 
    I.wait(2);
    I.click('//*[@id="lnk-sup-cerrar-sesion"]');
});
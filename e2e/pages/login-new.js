/**  * Created by hiremathv on 8/21/18.  */
 var Page = require('./page') 
var LoginPage = Object.create(Page, {  

  /* open: { value: function() {     Page.open.call(this, 'login');   } },
  * */   //  open: function() {return this.firstName + " " + this.lastName;} 
   open: {value: function() {  Page.open.call(this, 'login');  } },
  username: {
     selector: '#username',
  },
 // username: { get: function () { return browser.element('#username'); } },
 /* headermodule: {
    selector: '#header',
  },*/

});

  module.exports = LoginPage;
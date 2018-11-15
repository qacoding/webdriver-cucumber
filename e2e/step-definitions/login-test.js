/**
 * Created by hiremathv on 8/20/18.
 */
let {Given, When, Then} = require('cucumber');
//var LoginPage = require('../pages/login.page');
//var LoginPage = require('../pages/login-new');
//var {Color} = require('./Shapes');
var  LoginPage = require('../pages/login-new');
let { expect } = require ('chai');

Given('on Login page',() => {
 // browser.url('/');
 // browser.pause(5000);
 // LoginPage.open();
  LoginPage.open();
  browser.pause(9000);
});

When('entered username {string}', (text)=>{
 // LoginPage.username.setValue(text);
  console.log('hiiiiiiiiiiii');
  console.log(LoginPage.username.selector);
LoginPage.username.selector.setValue(text);
  browser.pause(9000);
});

Then('entered password {string}', (word)=>{
  LoginPage.password.setValue(word);
  browser.pause(9000);
});

When('clicked on submit button',() => {
  LoginPage.send();
} );

Then('expect text {string}',(title) => {
  console.log(LoginPage.flash.getText());
  browser.pause(9000);
  expect(LoginPage.flash.getText()).to.contain(title);
});


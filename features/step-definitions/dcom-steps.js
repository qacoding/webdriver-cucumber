/**
 * Created by hiremathv on 8/7/18.
 */
let {Given,When, Then} = require('cucumber');
let { expect } = require ('chai');
//import { footerData } from '../pages/data';
var headData = require('../pages/serpData');
let serpPage = require('../pages/serpPage');

/*Given('I go to dcom', () => {
  console.log('hellloo');
  browser.url('http://dictionary.com')
});*/

Given('I start on a SERP page for the word {string}', (text) => {
 // browser.url(`/browse/${text}`);
  serpPage.open(text);
  browser.pause(5000);
});

 Then(/^I expect the title of the page "([^"]*)"$/, (title) => {
   browser.pause(5000);
  // console.log(serpPage.getPageTitle());
   expect(serpPage.getPageTitle()).to.be.eql(title);
 });

 When('I look for {string}', (text) => {
  // console.log(headData.selector);
   browser.setValue(headData.searchBoxSelector,text);
   browser.click(headData.searchIconSelector);
  // expect(serpPage.getPageTitle()).to.be.equal()
 browser.pause(5000);
 });

 Then ('I should land on serp with title {string}', (title) => {
   browser.pause(5000);
   console.log(serpPage.getPageTitle())
   expect(serpPage.getPageTitle()).to.be.eql(title);
 });


/**
 * Created by hiremathv on 9/6/18.
 */

let serp = {

  open(searchword){
  console.log(searchword);
  browser.url(`/browse/${searchword}`);
  },

  getPageTitle(){
    return(browser.getTitle());
  },


}

module.exports = serp;
// run live-server in the terminal to start
const axios = require('axios');
const index = require('./src/page1.js')
const page2 = require('./src/page2.js')

const pageInitialization = {
    '/' : index.init,
    '/index.html': index.init,
    '/page2.html' : page2.init
  }
  
  const path = window.location.pathname
   
  if(pageInitialization.hasOwnProperty(path)) {
    pageInitialization[path]()
  }
  else {
    console.error(`${path} does not have an initializer`)
  }
  



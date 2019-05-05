(function(modules){function webpackJsonpCallback(data){var chunkIds=data[0];var moreModules=data[1];var executeModules=data[2];var moduleId,chunkId,i=0,resolves=[];for(;i<chunkIds.length;i++){chunkId=chunkIds[i];if(installedChunks[chunkId])resolves.push(installedChunks[chunkId][0]);installedChunks[chunkId]=0}for(moduleId in moreModules)if(Object.prototype.hasOwnProperty.call(moreModules,moduleId))modules[moduleId]=moreModules[moduleId];if(parentJsonpFunction)parentJsonpFunction(data);while(resolves.length)resolves.shift()();deferredModules.push.apply(deferredModules,executeModules||[]);return checkDeferredModules()}function checkDeferredModules(){var result;for(var i=0;i<deferredModules.length;i++){var deferredModule=deferredModules[i];var fulfilled=true;for(var j=1;j<deferredModule.length;j++){var depId=deferredModule[j];if(0!==installedChunks[depId])fulfilled=false}if(fulfilled){deferredModules.splice(i--,1);result=__webpack_require__(__webpack_require__.s=deferredModule[0])}}return result}var installedModules={};var installedChunks={0:0};var deferredModules=[];function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name))Object.defineProperty(exports,name,{enumerable:true,get:getter})};__webpack_require__.r=function(exports){if("undefined"!==typeof Symbol&&Symbol.toStringTag)Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.t=function(value,mode){if(1&mode)value=__webpack_require__(value);if(8&mode)return value;if(4&mode&&"object"===typeof value&&value&&value.__esModule)return value;var ns=Object.create(null);__webpack_require__.r(ns);Object.defineProperty(ns,"default",{enumerable:true,value:value});if(2&mode&&"string"!=typeof value)for(var key in value)__webpack_require__.d(ns,key,function(key){return value[key]}.bind(null,key));return ns};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function(){return module["default"]}:function(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";var jsonpArray=window["webpackJsonp"]=window["webpackJsonp"]||[];var oldJsonpFunction=jsonpArray.push.bind(jsonpArray);jsonpArray.push=webpackJsonpCallback;jsonpArray=jsonpArray.slice();for(var i=0;i<jsonpArray.length;i++)webpackJsonpCallback(jsonpArray[i]);var parentJsonpFunction=oldJsonpFunction;deferredModules.push([7,1]);return checkDeferredModules()})({7:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react=__webpack_require__(0);var react_default=__webpack_require__.n(react);var react_dom=__webpack_require__(2);var react_dom_default=__webpack_require__.n(react_dom);class Header_Header extends react["Component"]{constructor(){super();this.state={name:"Joe"}}render(){return react_default.a.createElement("header",null,react_default.a.createElement("div",null," Logo "),react_default.a.createElement("nav",null,react_default.a.createElement("a",{href:"#"},"create ads"),react_default.a.createElement("a",{href:"#"},"About Us"),react_default.a.createElement("a",{href:"#"},"Log In"),react_default.a.createElement("a",{href:"#",className:"register-btn"},"Register")))}}class Filter_Filter extends react["Component"]{constructor(){super();this.state={name:"Joe"}}render(){return react_default.a.createElement("section",{id:"filter"},react_default.a.createElement("div",{className:"inside"},react_default.a.createElement("h4",null,"Filter"),react_default.a.createElement("select",{name:"neighbourhood",className:"filters neighbourhood"},react_default.a.createElement("option",null,"Ridgewood")),react_default.a.createElement("select",{name:"housetype",className:"filters housetype"},react_default.a.createElement("option",null,"Ranch")),react_default.a.createElement("select",{name:"bedrooms",className:"filters bedrooms"},react_default.a.createElement("option",null,"2 BR")),react_default.a.createElement("div",{className:"filters price"},react_default.a.createElement("span",{className:"title"},"Price"),react_default.a.createElement("input",{type:"text",name:"min-price",className:"min-price"}),react_default.a.createElement("input",{type:"text",name:"max-price",className:"max-price"})),react_default.a.createElement("div",{className:"filters floor-space"},react_default.a.createElement("span",{className:"title"},"Floor Space"),react_default.a.createElement("input",{type:"text",name:"min-floor-space",className:"min-floor-space"}),react_default.a.createElement("input",{type:"text",name:"max-floor-space",className:"max-floor-space"})),react_default.a.createElement("div",{className:"filters extras"},react_default.a.createElement("span",{className:"title"}),react_default.a.createElement("label",{for:"extras"},react_default.a.createElement("span",null,"Elevators"),react_default.a.createElement("input",{name:"extras",value:"elevator",type:"checkbox"})),react_default.a.createElement("label",{for:"extas"},react_default.a.createElement("span",null,"Swimming Pool"),react_default.a.createElement("input",{name:"extras",value:"swimming-pool",type:"checkbox"})),react_default.a.createElement("label",{for:"extas"},react_default.a.createElement("span",null,"Finished Basement"),react_default.a.createElement("input",{name:"extras",value:"finished basement",type:"checkbox"})),react_default.a.createElement("label",{for:"extas"},react_default.a.createElement("span",null,"Gym"),react_default.a.createElement("input",{name:"extras",value:"gym",type:"checkbox"})))))}}class Listings_Header extends react["Component"]{constructor(){super();this.state={name:"Joe"}}render(){return react_default.a.createElement("section",{id:"listings"},"Listings>",react_default.a.createElement("section",{className:"search-area"},react_default.a.createElement("input",{type:"text",name:"search"})),react_default.a.createElement("section",{className:"sortby-area"},react_default.a.createElement("div",{className:"results"},"390 results found"),react_default.a.createElement("div",{className:"sort-options"},react_default.a.createElement("select",{name:"sortby",className:"sortby"},react_default.a.createElement("option",{value:"price-asc"},"Highest Price"),react_default.a.createElement("option",{value:"price-asc"},"Lowest Price")),react_default.a.createElement("div",{className:"view"},react_default.a.createElement("i",{className:"fa fa-th-list","aria-hidden":"true"}),react_default.a.createElement("i",{className:"fa fa-th","aria-hidden":"true"})))),react_default.a.createElement("section",{className:"listings-results"},react_default.a.createElement("div",{className:"listing"},react_default.a.createElement("div",{className:"listing-img"},react_default.a.createElement("span",{className:"Address"},"Address"),react_default.a.createElement("div",{className:"details"},react_default.a.createElement("div",{className:"user-img"}," "),react_default.a.createElement("div",{className:"user-details"},react_default.a.createElement("span",{className:"user-name"},"Nina Smith"),react_default.a.createElement("span",{className:"post-date"},"05/05/2017")),react_default.a.createElement("div",{className:"listing-details"},react_default.a.createElement("div",{className:"floor-space"},react_default.a.createElement("i",{className:"fa fa-square-o","aria-hidden":"true"})),react_default.a.createElement("span",null," 1000 ft²")),react_default.a.createElement("div",{className:"bedrooms"},react_default.a.createElement("i",{className:"fa fa-bed","aria-hidden":"true"}),react_default.a.createElement("span",null,"3 bedrooms")))),react_default.a.createElement("div",{className:"bottom-info"},react_default.a.createElement("span",null,"$1000 / month "),react_default.a.createElement("span",null,react_default.a.createElement("i",{className:"fa fa-map-maker","aria-hiddeb":"true"})," Ridgwood, NYv")))),react_default.a.createElement("section",{className:"pagination"},react_default.a.createElement("ul",{className:"pagination-nums"},react_default.a.createElement("li",null," Prev"),react_default.a.createElement("li",null," 1"),react_default.a.createElement("li",null," 2"),react_default.a.createElement("li",null," 3"),react_default.a.createElement("li",null," 4"),react_default.a.createElement("li",null," 5"),react_default.a.createElement("li",null," Next"))))}}class realEstate_App extends react["Component"]{constructor(){super();this.state={name:"Joe"}}render(){return react_default.a.createElement("div",null,react_default.a.createElement(Header_Header,null),react_default.a.createElement("section",{id:"content-area"},react_default.a.createElement(Filter_Filter,null),react_default.a.createElement(Listings_Header,null)))}}const app=document.getElementById("app");react_dom_default.a.render(react_default.a.createElement(realEstate_App,null),app)}});
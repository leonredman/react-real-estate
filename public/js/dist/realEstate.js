(function(modules) {
    function webpackJsonpCallback(data) {
        var chunkIds = data[0];
        var moreModules = data[1];
        var executeModules = data[2];
        var moduleId, chunkId, i = 0, resolves = [];
        for (;i < chunkIds.length; i++) {
            chunkId = chunkIds[i];
            if (installedChunks[chunkId]) resolves.push(installedChunks[chunkId][0]);
            installedChunks[chunkId] = 0;
        }
        for (moduleId in moreModules) if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) modules[moduleId] = moreModules[moduleId];
        if (parentJsonpFunction) parentJsonpFunction(data);
        while (resolves.length) resolves.shift()();
        deferredModules.push.apply(deferredModules, executeModules || []);
        return checkDeferredModules();
    }
    function checkDeferredModules() {
        var result;
        for (var i = 0; i < deferredModules.length; i++) {
            var deferredModule = deferredModules[i];
            var fulfilled = true;
            for (var j = 1; j < deferredModule.length; j++) {
                var depId = deferredModule[j];
                if (0 !== installedChunks[depId]) fulfilled = false;
            }
            if (fulfilled) {
                deferredModules.splice(i--, 1);
                result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
            }
        }
        return result;
    }
    var installedModules = {};
    var installedChunks = {
        realEstate: 0
    };
    var deferredModules = [];
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) return installedModules[moduleId].exports;
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: false,
            exports: {}
        };
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        module.l = true;
        return module.exports;
    }
    __webpack_require__.m = modules;
    __webpack_require__.c = installedModules;
    __webpack_require__.d = function(exports, name, getter) {
        if (!__webpack_require__.o(exports, name)) Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter
        });
    };
    __webpack_require__.r = function(exports) {
        if ("undefined" !== typeof Symbol && Symbol.toStringTag) Object.defineProperty(exports, Symbol.toStringTag, {
            value: "Module"
        });
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
    };
    __webpack_require__.t = function(value, mode) {
        if (1 & mode) value = __webpack_require__(value);
        if (8 & mode) return value;
        if (4 & mode && "object" === typeof value && value && value.__esModule) return value;
        var ns = Object.create(null);
        __webpack_require__.r(ns);
        Object.defineProperty(ns, "default", {
            enumerable: true,
            value: value
        });
        if (2 & mode && "string" != typeof value) for (var key in value) __webpack_require__.d(ns, key, function(key) {
            return value[key];
        }.bind(null, key));
        return ns;
    };
    __webpack_require__.n = function(module) {
        var getter = module && module.__esModule ? function() {
            return module["default"];
        } : function() {
            return module;
        };
        __webpack_require__.d(getter, "a", getter);
        return getter;
    };
    __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    __webpack_require__.p = "";
    var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
    var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
    jsonpArray.push = webpackJsonpCallback;
    jsonpArray = jsonpArray.slice();
    for (var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
    var parentJsonpFunction = oldJsonpFunction;
    deferredModules.push([ "./assets/js/realEstate/realEstate.js", "vendors~realEstate" ]);
    return checkDeferredModules();
})({
    "./assets/js/realEstate/Filter.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Filter; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nclass Filter extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {\n  constructor() {\n    super();\n    this.state = {\n      name: \'Leon\'\n    };\n  }\n\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {\n      id: "filter"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "inside"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Filter"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {\n      name: "neighbourhood",\n      className: "filters neighbourhood"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "Ridgewood")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {\n      name: "housetype",\n      className: "filters housetype"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "Ranch")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {\n      name: "bedrooms",\n      className: "filters bedrooms"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "2 BR")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "filters price"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n      className: "title"\n    }, "Price"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {\n      type: "text",\n      name: "min-price",\n      className: "min-price"\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {\n      type: "text",\n      name: "max-price",\n      className: "max-price"\n    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "filters floor-space"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n      className: "title"\n    }, "Floor Space"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {\n      type: "text",\n      name: "min-floor-space",\n      className: "min-floor-space"\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {\n      type: "text",\n      name: "max-floor-space",\n      className: "max-floor-space"\n    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "filters extras"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n      className: "title"\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {\n      for: "extras"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Elevators"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {\n      name: "extras",\n      value: "elevator",\n      type: "checkbox"\n    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {\n      for: "extas"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Swimming Pool"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {\n      name: "extras",\n      value: "swimming-pool",\n      type: "checkbox"\n    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {\n      for: "extas"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Finished Basement"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {\n      name: "extras",\n      value: "finished basement",\n      type: "checkbox"\n    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {\n      for: "extas"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Gym"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {\n      name: "extras",\n      value: "gym",\n      type: "checkbox"\n    })))));\n  }\n\n}\n\n//# sourceURL=webpack:///./assets/js/realEstate/Filter.js?');
    },
    "./assets/js/realEstate/Header.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Header; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nclass Header extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {\n  constructor() {\n    super();\n    this.state = {\n      name: \'Leon\'\n    };\n  }\n\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, " Logo "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {\n      href: "#"\n    }, "create ads"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {\n      href: "#"\n    }, "About Us"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {\n      href: "#"\n    }, "Log In"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {\n      href: "#",\n      className: "register-btn"\n    }, "Register")));\n  }\n\n}\n\n//# sourceURL=webpack:///./assets/js/realEstate/Header.js?');
    },
    "./assets/js/realEstate/Listings.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Header; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nclass Header extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {\n  constructor() {\n    super();\n    this.state = {\n      name: \'Leon\'\n    };\n    this.loopListings = this.loopListings.bind(this);\n  }\n\n  loopListings() {\n    var listingsData = this.props.listingsData;\n    return listingsData.map((listing, index) => {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n        className: "col-md-3",\n        key: index\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n        className: "listing"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n        className: "listing-img",\n        style: {\n          background: `url("${listing.image}") no-repeat center center`\n        }\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n        className: "address"\n      }, listing.address), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n        className: "details"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n        className: "col-md-3"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n        className: "user-img"\n      }, " ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n        className: "col-md-9"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n        className: "user-details"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n        className: "user-name"\n      }, "Nina Smith"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n        className: "post-date"\n      }, "05/05/2017")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n        className: "listing-details"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n        className: "floor-space"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {\n        className: "fa fa-square-o",\n        "aria-hidden": "true"\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, " 1000 ft\\xB2")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n        className: "bedrooms"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {\n        className: "fa fa-bed",\n        "aria-hidden": "true"\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, listing.bedrooms, " bedrooms"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n        className: "view-btn"\n      }, "view listing")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n        className: "bottom-info"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n        className: "price"\n      }, "$", listing.price), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n        className: "location"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {\n        className: "fa fa-map-marker",\n        "aria-hidden": "true"\n      }), \' \', listing.city, ",", listing.state))));\n    });\n  }\n\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {\n      id: "listings"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {\n      className: "search-area"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {\n      type: "text",\n      name: "search"\n    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {\n      className: "sortby-area"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "results"\n    }, "390 results found"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "sort-options"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {\n      name: "sortby",\n      className: "sortby"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {\n      value: "price-asc"\n    }, "Highest Price"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {\n      value: "price-asc"\n    }, "Lowest Price")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "view"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {\n      className: "fa fa-th-list",\n      "aria-hidden": "true"\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {\n      className: "fa fa-th",\n      "aria-hidden": "true"\n    })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {\n      className: "listings-results"\n    }, this.loopListings()), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {\n      id: "pagination"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {\n      className: "pages"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, " Prev"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {\n      className: "active"\n    }, "1"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "2"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "3"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "4"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "5"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Next"))));\n  }\n\n}\n\n//# sourceURL=webpack:///./assets/js/realEstate/Listings.js?');
    },
    "./assets/js/realEstate/data/listingsData.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval("var listingsData = [{\n  address: '20-34 grand ave',\n  city: 'Ridgewood',\n  state: 'NY',\n  rooms: 3,\n  price: 220000,\n  floorSpace: 2000,\n  extras: ['elevator', 'gym'],\n  homeType: 'Apartment',\n  image: 'http://media.equityapartments.com/images/c_crop,x_0,y_0,w_1920,h_1080/c_fill,w_1920,h_1080/q_80/4206-28/the-kelvin-apartments-exterior.jpg'\n}, {\n  address: '3 universal st',\n  city: 'Miami',\n  state: 'FL',\n  rooms: 2,\n  price: 24666,\n  floorSpace: 1430,\n  extras: ['elevator', 'gym'],\n  homeType: 'Condo',\n  image: 'https://www.adinahotels.com/wp-content/uploads/sites/4/2016/07/adina-melbourne-flinders-street-apartment-hotel-one-and-two-bedroom-apartment-2-2013.jpg'\n}, {\n  address: '1 president plaza',\n  city: 'Richmond',\n  state: 'VA',\n  rooms: 1,\n  price: 345355,\n  floorSpace: 2400,\n  extras: ['elevator', 'gym'],\n  homeType: 'Single Home',\n  image: 'https://c.o0bg.com/rf/image_960w/Boston/2011-2020/2017/01/09/BostonGlobe.com/Lifestyle/Images/doherty_10names04_liv.jpg'\n}, {\n  address: '889 beemore st',\n  city: 'Newark',\n  state: 'NJ',\n  rooms: 0,\n  price: 80000,\n  floorSpace: 1000,\n  extras: ['elevator', 'gym'],\n  homeType: 'Studio',\n  image: 'http://media.equityapartments.com/images/q_50/f_auto/fl_lossy/685-28/oak-park-apartment-homes-kitchen'\n}, {\n  address: '43 hollywood blvd',\n  city: 'Los Angeles',\n  state: 'CA',\n  rooms: 3,\n  price: 603000,\n  floorSpace: 3000,\n  extras: ['elevator', 'gym'],\n  homeType: 'Condo',\n  image: 'http://cdn.freshome.com/wp-content/uploads/2016/02/design-modern-apartment-1-1025x450.jpg'\n}, {\n  address: '2 main st',\n  city: 'Bedstuy',\n  state: 'NY',\n  rooms: 2,\n  price: 220000,\n  floorSpace: 2000,\n  extras: ['elevator', 'pool'],\n  homeType: 'Multi Home',\n  image: 'http://www.theproserve.com/wp-content/uploads/2013/03/apartment-complex-insurance.jpg'\n}, {\n  address: '730 gates ave',\n  city: 'Springfield',\n  state: 'IN',\n  rooms: 1,\n  price: 150000,\n  floorSpace: 2000,\n  extras: ['elevator', 'gym'],\n  homeType: 'Room',\n  image: 'http://www.carolinacouture.com/wood/wp-content/uploads/2014/09/apartment-contemporary-apartment-in-taiwan-by-fertility-design-and-mirror-glass-accent-stylish-and-elegant-apartment-designs-tiny-ass-apartment-design-ideas-apartment-interior.jpg'\n}];\n/* harmony default export */ __webpack_exports__[\"a\"] = (listingsData);\n\n//# sourceURL=webpack:///./assets/js/realEstate/data/listingsData.js?");
    },
    "./assets/js/realEstate/realEstate.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Header_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header.js */ "./assets/js/realEstate/Header.js");\n/* harmony import */ var _Filter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Filter.js */ "./assets/js/realEstate/Filter.js");\n/* harmony import */ var _Listings_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Listings.js */ "./assets/js/realEstate/Listings.js");\n/* harmony import */ var _data_listingsData_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data/listingsData.js */ "./assets/js/realEstate/data/listingsData.js");\n\n\n\n\n\n\n\nclass App extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {\n  constructor() {\n    super();\n    this.state = {\n      name: \'Leon\',\n      listingsData: _data_listingsData_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"]\n    };\n  }\n\n  render() {\n    console.log(this.state);\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {\n      id: "content-area"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Filter_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Listings_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {\n      listingsData: this.state.listingsData\n    })));\n  }\n\n}\n\nconst app = document.getElementById(\'app\');\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(App, null), app);\n\n//# sourceURL=webpack:///./assets/js/realEstate/realEstate.js?');
    }
});
!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},t.parcelRequired7c6=r);var a=r("6Urw1"),s=r("bK1n4"),l=r("6Nu6u"),i=r("l0SaF"),c=(0,a.initializeApp)({apiKey:"AIzaSyC_AoWR6sIw9yYqEcm5_Le0FK59RgGenNY",authDomain:"filmoteka-js-c90cd.firebaseapp.com",databaseURL:"https://filmoteka-js-c90cd-default-rtdb.firebaseio.com",projectId:"filmoteka-js-c90cd",storageBucket:"filmoteka-js-c90cd.appspot.com",messagingSenderId:"542180533478",appId:"1:542180533478:web:cc24636cc3211b9b060727",measurementId:"G-04MJBK1QWZ"}),d=((0,s.getAnalytics)(c),(0,l.getDatabase)()),u=document.querySelector("#userInp"),f=document.querySelector("#passInp"),p=document.querySelector("#sub_login_btn");console.log(p),p.addEventListener("click",(function(){var t=(0,l.ref)(d);(0,l.get)((0,l.child)(t,"UsersLists/"+u.value)).then((function(t){if(t.exists()){var o=function(t){return e(i).AES.decrypt(t,f.value).toString(e(i).enc.Utf8)}(t.val().password);console.log(t.val().password),console.log(o),console.log(f.value),o==f.value?(n=t.val(),document.querySelector("#flexSwitchCheckDefault").checked?(localStorage.setItem("keepLoggedIn","yes"),localStorage.setItem("user",JSON.stringify(n)),window.location="index.html"):(sessionStorage.setItem("user",JSON.stringify(n)),window.location="index.html")):alert("Username or password is invalid")}else alert("User does not exist!");var n}))}))}();
//# sourceMappingURL=login.c4a30f8b.js.map

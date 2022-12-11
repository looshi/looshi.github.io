/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/babel-loader/lib/index.js!./src/audio/Arpeggiator/TimerWorker.worker.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./src/audio/Arpeggiator/TimerWorker.worker.js ***!
  \**********************************************************************************************/
/***/ (() => {

eval("/* global self, postMessage */\n/*\nThis is an adapted version of the Metronome by Chris Wilson :\nhttps://github.com/cwilso/metronome\n*/\nvar timerID = null;\nvar interval = 100;\nself.onmessage = function (e) {\n  if (e.data === 'start') {\n    timerID = setInterval(function () {\n      postMessage('tick');\n    }, interval);\n  } else if (e.data.interval) {\n    interval = e.data.interval;\n    if (timerID) {\n      clearInterval(timerID);\n      timerID = setInterval(function () {\n        postMessage('tick');\n      }, interval);\n    }\n  } else if (e.data === 'stop') {\n    clearInterval(timerID);\n    timerID = null;\n  }\n};\n\n//# sourceURL=webpack://wavetable-synth/./src/audio/Arpeggiator/TimerWorker.worker.js?./node_modules/babel-loader/lib/index.js");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./node_modules/babel-loader/lib/index.js!./src/audio/Arpeggiator/TimerWorker.worker.js"]();
/******/ 	
/******/ })()
;
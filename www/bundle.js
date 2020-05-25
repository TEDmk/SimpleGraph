/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/ts-loader/index.js!./src/Chart.ts":
/*!***********************************************!*\
  !*** ./node_modules/ts-loader!./src/Chart.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nexports.Chart = void 0;\nvar ChartCanvas_1 = __webpack_require__(/*! ./canvas/ChartCanvas */ \"./src/canvas/ChartCanvas.ts\");\nvar YAxisCanvas_1 = __webpack_require__(/*! ./canvas/YAxisCanvas */ \"./src/canvas/YAxisCanvas.ts\");\nvar Scale_1 = __webpack_require__(/*! ./Scale */ \"./src/Scale.ts\");\nvar Chart = /** @class */ (function () {\n    function Chart(chartContainer, xAxisCanvas, width, height, axisThickness) {\n        this.chartContainer = chartContainer;\n        this.xAxisCanvas = xAxisCanvas;\n        this.width = width;\n        this.height = height;\n        this.axisThickness = axisThickness;\n        this.chartCanvas = new ChartCanvas_1.ChartCanvas(this, width, height);\n        this.yAxisCanvas = new YAxisCanvas_1.YAxisCanvas(this, axisThickness, height);\n        this.layerList = new Array();\n    }\n    Chart.prototype.getYAxisCanvas = function () {\n        return this.yAxisCanvas;\n    };\n    Chart.prototype.getChartCanvas = function () {\n        return this.chartCanvas;\n    };\n    Chart.prototype.getDataScale = function () {\n        return this.dataScale;\n    };\n    Chart.prototype.setDataScale = function (dataScale) {\n        this.dataScale = Scale_1.normalizeDataScale(dataScale);\n        this.draw();\n    };\n    Chart.prototype.getTimeScale = function () {\n        return this.chartContainer.getTimeScale();\n    };\n    Chart.prototype.setTimeScale = function (timeScale, draw) {\n        if (draw === void 0) { draw = true; }\n        this.chartContainer.setTimeScale(timeScale);\n        if (draw)\n            this.draw();\n    };\n    Chart.prototype.addLayer = function (layer) {\n        layer.setChartCanvas(this.chartCanvas);\n        this.layerList.push(layer);\n        this.draw();\n    };\n    Chart.prototype.draw = function () {\n        this.chartCanvas.clear();\n        this.chartCanvas.draw();\n        this.yAxisCanvas.draw();\n        for (var _i = 0, _a = this.layerList; _i < _a.length; _i++) {\n            var layer = _a[_i];\n            layer.draw();\n        }\n    };\n    return Chart;\n}());\nexports.Chart = Chart;\n\n\n//# sourceURL=webpack:///./src/Chart.ts?./node_modules/ts-loader");

/***/ }),

/***/ "./node_modules/ts-loader/index.js!./src/ChartContainer.ts":
/*!********************************************************!*\
  !*** ./node_modules/ts-loader!./src/ChartContainer.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nexports.ChartContainer = void 0;\nvar Chart_1 = __webpack_require__(/*! ./Chart */ \"./src/Chart.ts\");\nvar XAxisCanvas_1 = __webpack_require__(/*! ./canvas/XAxisCanvas */ \"./src/canvas/XAxisCanvas.ts\");\nvar Scale_1 = __webpack_require__(/*! ./Scale */ \"./src/Scale.ts\");\nvar ChartContainer = /** @class */ (function () {\n    function ChartContainer(divID, width, axisThickness) {\n        this.divID = divID;\n        this.width = width;\n        this.axisThickness = axisThickness;\n        this.charts = new Array();\n        this.containerElement = document.getElementById(divID);\n        this.xAxisCanvas = new XAxisCanvas_1.XAxisCanvas(this, width, axisThickness);\n        this.mainTable = document.createElement('table');\n        this.mainTable.id = divID + \"-table\";\n        this.containerElement.appendChild(this.mainTable);\n        this.addXAxis();\n    }\n    ChartContainer.prototype.newChart = function (height) {\n        var chart = new Chart_1.Chart(this, this.xAxisCanvas, this.width, height, this.axisThickness);\n        this.charts.push(chart);\n        this.update();\n        return chart;\n    };\n    ChartContainer.prototype.update = function () {\n        this.mainTable.innerHTML = \"\";\n        for (var _i = 0, _a = this.charts; _i < _a.length; _i++) {\n            var chart = _a[_i];\n            var chartRow = this.mainTable.insertRow();\n            chartRow.appendChild(this.getCanvasInCell(chart.getChartCanvas()));\n            chartRow.appendChild(this.getCanvasInCell(chart.getYAxisCanvas()));\n        }\n        this.addXAxis();\n    };\n    ChartContainer.prototype.draw = function () {\n        for (var _i = 0, _a = this.charts; _i < _a.length; _i++) {\n            var chart = _a[_i];\n            chart.draw();\n        }\n        this.xAxisCanvas.draw();\n    };\n    ChartContainer.prototype.addXAxis = function () {\n        var xAxisRow = this.mainTable.insertRow();\n        var uselessCanvas = new XAxisCanvas_1.XAxisCanvas(this, this.axisThickness, this.axisThickness);\n        xAxisRow.appendChild(this.getCanvasInCell(this.xAxisCanvas));\n        xAxisRow.appendChild(this.getCanvasInCell(uselessCanvas));\n    };\n    ChartContainer.prototype.setTimeScale = function (timeScale, draw) {\n        if (draw === void 0) { draw = true; }\n        this.timeScale = Scale_1.normalizeTimeScale(timeScale);\n        if (draw)\n            this.draw();\n    };\n    ChartContainer.prototype.getTimeScale = function () {\n        return this.timeScale;\n    };\n    ChartContainer.prototype.getCanvasInCell = function (canvas) {\n        var cell = document.createElement(\"td\");\n        cell.appendChild(canvas.getCanvas());\n        return cell;\n    };\n    return ChartContainer;\n}());\nexports.ChartContainer = ChartContainer;\n\n\n//# sourceURL=webpack:///./src/ChartContainer.ts?./node_modules/ts-loader");

/***/ }),

/***/ "./node_modules/ts-loader/index.js!./src/Scale.ts":
/*!***********************************************!*\
  !*** ./node_modules/ts-loader!./src/Scale.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nexports.normalizeDataScale = exports.normalizeTimeScale = exports.TimeScale = exports.DataScale = void 0;\nvar DataScale = /** @class */ (function () {\n    function DataScale() {\n    }\n    return DataScale;\n}());\nexports.DataScale = DataScale;\nvar TimeScale = /** @class */ (function () {\n    function TimeScale() {\n    }\n    return TimeScale;\n}());\nexports.TimeScale = TimeScale;\n// TODO: finish\nfunction normalizeTimeScale(timeScale) {\n    // if(timeScale.deltaPixel > 2 * timeScale.baseDeltaPixel) {\n    //     timeScale.deltaPixel = timeScale.baseDeltaPixel;\n    //     timeScale.deltaSecond = timeScale.deltaSecond / 2;\n    // }\n    // if(timeScale.deltaPixel < timeScale.baseDeltaPixel / 2) {\n    //     timeScale.deltaPixel = timeScale.baseDeltaPixel;\n    //     timeScale.deltaSecond = timeScale.deltaSecond * 2;\n    // }\n    if (timeScale.pixelOffset > timeScale.deltaPixel) {\n        timeScale.pixelOffset = timeScale.pixelOffset - timeScale.deltaPixel;\n        timeScale.startDate = new Date(timeScale.startDate.getTime() - timeScale.deltaSecond * 1000);\n    }\n    if (timeScale.pixelOffset < -timeScale.deltaPixel) {\n        timeScale.pixelOffset = timeScale.pixelOffset + timeScale.deltaPixel;\n        timeScale.startDate = new Date(timeScale.startDate.getTime() + timeScale.deltaSecond * 1000);\n    }\n    return timeScale;\n}\nexports.normalizeTimeScale = normalizeTimeScale;\nfunction normalizeDataScale(dataScale) {\n    // if(dataScale.deltaPixel > 2 * dataScale.baseDeltaPixel) {\n    //     dataScale.deltaValue = dataScale.deltaValue * (dataScale.baseDeltaPixel / dataScale.deltaPixel);\n    //     dataScale.deltaPixel = dataScale.baseDeltaPixel;\n    // }\n    // if(dataScale.deltaPixel < dataScale.baseDeltaPixel / 2) {\n    //     dataScale.deltaPixel = dataScale.baseDeltaPixel;\n    //     dataScale.deltaValue = dataScale.deltaValue / (dataScale.baseDeltaPixel / dataScale.deltaPixel);\n    // }\n    if (dataScale.pixelOffset > dataScale.deltaPixel) {\n        dataScale.pixelOffset = dataScale.pixelOffset - dataScale.deltaPixel;\n        dataScale.startValue = dataScale.startValue - dataScale.deltaValue;\n    }\n    if (dataScale.pixelOffset < -dataScale.deltaPixel) {\n        dataScale.pixelOffset = dataScale.pixelOffset + dataScale.deltaPixel;\n        dataScale.startValue = dataScale.startValue + dataScale.deltaValue;\n    }\n    return dataScale;\n}\nexports.normalizeDataScale = normalizeDataScale;\n\n\n//# sourceURL=webpack:///./src/Scale.ts?./node_modules/ts-loader");

/***/ }),

/***/ "./node_modules/ts-loader/index.js!./src/canvas/Canvas.ts":
/*!*******************************************************!*\
  !*** ./node_modules/ts-loader!./src/canvas/Canvas.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nexports.Canvas = exports.Position = void 0;\nvar Style_1 = __webpack_require__(/*! ./Style */ \"./src/canvas/Style.ts-exposed\");\nvar MouseState;\n(function (MouseState) {\n    MouseState[MouseState[\"Drag\"] = 2] = \"Drag\";\n    MouseState[MouseState[\"Up\"] = 1] = \"Up\";\n    MouseState[MouseState[\"Down\"] = 0] = \"Down\";\n})(MouseState || (MouseState = {}));\nvar Position = /** @class */ (function () {\n    function Position() {\n    }\n    return Position;\n}());\nexports.Position = Position;\nvar Canvas = /** @class */ (function () {\n    function Canvas(width, height, style) {\n        var _this = this;\n        if (style === void 0) { style = Style_1.defaultCanvasStyle; }\n        this.style = style;\n        var ratio = 2;\n        this.canvas = document.createElement(\"canvas\");\n        this.context = this.canvas.getContext(\"2d\");\n        this.canvas.width = ratio * width;\n        this.canvas.height = ratio * height;\n        this.canvas.style.width = width.toString() + \"px\";\n        this.canvas.style.height = height.toString() + \"px\";\n        this.context.scale(ratio, ratio);\n        this.context.imageSmoothingEnabled = false;\n        this.context.textBaseline = \"middle\";\n        this.mouseState = MouseState.Up;\n        this.boundingRect = this.canvas.getBoundingClientRect();\n        this.screenPosition = { x: 0, y: 0 };\n        this.canvas.addEventListener(\"mousedown\", function (e) { _this.onMouseChangeState(MouseState.Down, e); });\n        this.canvas.addEventListener(\"mouseup\", function (e) { _this.onMouseChangeState(MouseState.Up, e); });\n        this.canvas.addEventListener(\"mousemove\", function (e) { _this.onMouseMove(e); });\n    }\n    Canvas.prototype.getCanvas = function () {\n        return this.canvas;\n    };\n    Canvas.prototype.drawLine = function (start, end, color) {\n        if (color === void 0) { color = this.getStyle().color; }\n        this.context.strokeStyle = color;\n        this.context.beginPath();\n        this.context.translate(0.5, 0.5);\n        this.context.moveTo(start.x, start.y);\n        this.context.lineTo(end.x, end.y);\n        this.context.stroke();\n        this.context.translate(-0.5, -0.5);\n    };\n    Canvas.prototype.drawBox = function (topLeft, bottomRight, strokeColor, backgroundColor) {\n        if (strokeColor === void 0) { strokeColor = null; }\n        if (backgroundColor === void 0) { backgroundColor = null; }\n        this.context.beginPath();\n        this.context.translate(0.5, 0.5);\n        if (backgroundColor)\n            this.context.fillStyle = backgroundColor;\n        this.context.fillRect(topLeft.x, topLeft.y, bottomRight.x - topLeft.x, bottomRight.y - topLeft.y);\n        if (strokeColor)\n            this.context.beginPath();\n        this.context.strokeStyle = strokeColor;\n        this.context.rect(topLeft.x, topLeft.y, bottomRight.x - topLeft.x, bottomRight.y - topLeft.y);\n        this.context.stroke();\n        this.context.translate(-0.5, -0.5);\n    };\n    Canvas.prototype.drawText = function (text, pos, font) {\n        if (font === void 0) { font = \"10px Arial\"; }\n        this.context.fillStyle = this.style.color;\n        this.context.font = font;\n        this.context.fillText(text, pos.x, pos.y);\n    };\n    Canvas.prototype.onMouseChangeState = function (state, e) {\n        var x = e.clientX - this.boundingRect.left;\n        var y = e.clientY - this.boundingRect.top;\n        // Getting a Click = UP -> DOWN -> UP\n        if (state == MouseState.Up && this.mouseState == MouseState.Down)\n            this.onClick({ x: x, y: y });\n        // Record position of Mouse Down in case of drag\n        if (state == MouseState.Up) {\n            this.mouseDownPos = null;\n        }\n        if (state == MouseState.Down) {\n            this.mouseDownPos = { x: x, y: y };\n        }\n        if (!(this.mouseState == MouseState.Drag && state == MouseState.Down)) {\n            this.mouseState = state;\n        }\n    };\n    Canvas.prototype.onMouseMove = function (e) {\n        var x = e.clientX - this.boundingRect.left;\n        var y = e.clientY - this.boundingRect.top;\n        if (this.mouseState == MouseState.Down || this.mouseState == MouseState.Drag) {\n            this.mouseState = MouseState.Drag;\n            this.onDrag(this.mouseDownPos, { x: x, y: y });\n            this.mouseDownPos = { x: x, y: y };\n        }\n    };\n    Canvas.prototype.onDrag = function (previousPos, currentPos) {\n        this.screenPosition = { x: this.screenPosition.x + currentPos.x - previousPos.x, y: this.screenPosition.y + currentPos.y - previousPos.y };\n        this.mouseDownPos = currentPos;\n    };\n    Canvas.prototype.onClick = function (pos) {\n        console.log(\"CLICK\");\n    };\n    Canvas.prototype.getStyle = function () {\n        return this.style;\n    };\n    return Canvas;\n}());\nexports.Canvas = Canvas;\n\n\n//# sourceURL=webpack:///./src/canvas/Canvas.ts?./node_modules/ts-loader");

/***/ }),

/***/ "./node_modules/ts-loader/index.js!./src/canvas/ChartCanvas.ts":
/*!************************************************************!*\
  !*** ./node_modules/ts-loader!./src/canvas/ChartCanvas.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nexports.__esModule = true;\nexports.ChartCanvas = void 0;\nvar Canvas_1 = __webpack_require__(/*! ./Canvas */ \"./src/canvas/Canvas.ts\");\nvar Margin = /** @class */ (function () {\n    function Margin() {\n        this.top = 0;\n        this.bottom = 0;\n        this.left = 0;\n        this.right = 0;\n    }\n    return Margin;\n}());\nvar ChartCanvas = /** @class */ (function (_super) {\n    __extends(ChartCanvas, _super);\n    function ChartCanvas(chart, width, height) {\n        var _this = _super.call(this, width, height) || this;\n        _this.chart = chart;\n        _this.width = width;\n        _this.height = height;\n        return _this;\n    }\n    ChartCanvas.prototype.clear = function () {\n        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);\n    };\n    ChartCanvas.prototype.draw = function () {\n    };\n    ChartCanvas.prototype.onDrag = function (previousPos, currentPos) {\n        var deltaX = currentPos.x - previousPos.x;\n        var x = this.screenPosition.x + deltaX;\n        var deltaY = currentPos.y - previousPos.y;\n        var y = this.screenPosition.y + deltaY;\n        this.screenPosition = { x: x, y: y };\n        var currentDataScale = this.getDataScale();\n        currentDataScale.pixelOffset = currentDataScale.pixelOffset + deltaY;\n        this.setDataScale(currentDataScale);\n        var currenTimeScale = this.getTimeScale();\n        currenTimeScale.pixelOffset = currenTimeScale.pixelOffset + deltaX;\n        this.setTimeScale(currenTimeScale);\n        this.chart.draw();\n    };\n    ChartCanvas.prototype.getDataScale = function () {\n        return this.chart.getDataScale();\n    };\n    ChartCanvas.prototype.setDataScale = function (dataScale) {\n        return this.chart.setDataScale(dataScale);\n    };\n    ChartCanvas.prototype.getTimeScale = function () {\n        return this.chart.getTimeScale();\n    };\n    ChartCanvas.prototype.setTimeScale = function (timeScale) {\n        this.chart.setTimeScale(timeScale);\n    };\n    ChartCanvas.prototype.realToScreenPos = function (realPosition) {\n        var timeScale = this.getTimeScale();\n        var dataScale = this.getDataScale();\n        var screenPosition = {\n            x: (realPosition.x - timeScale.startDate.getTime()) * timeScale.deltaPixel / (timeScale.deltaSecond * 1000) + timeScale.pixelOffset,\n            y: (realPosition.y - dataScale.startValue) * dataScale.deltaPixel / dataScale.deltaValue + dataScale.pixelOffset,\n        };\n        return screenPosition;\n    };\n    ChartCanvas.prototype.realDrawLine = function (start, end, color) {\n        if (color === void 0) { color = this.getStyle().color; }\n        var screenStart = this.realToScreenPos(start);\n        var screenEnd = this.realToScreenPos(end);\n        return _super.prototype.drawLine.call(this, screenStart, screenEnd, color);\n    };\n    ChartCanvas.prototype.realDrawText = function (text, pos, font) {\n        if (font === void 0) { font = \"10px Arial\"; }\n        var screenPos = this.realToScreenPos(pos);\n        return _super.prototype.drawText.call(this, text, screenPos, font);\n    };\n    ChartCanvas.prototype.realDrawBox = function (topLeft, bottomRight, strokeColor, backgroundColor, margin) {\n        if (strokeColor === void 0) { strokeColor = null; }\n        if (backgroundColor === void 0) { backgroundColor = null; }\n        if (margin === void 0) { margin = new Margin(); }\n        var screenTopLeft = this.realToScreenPos(topLeft);\n        var screenBottomRight = this.realToScreenPos(bottomRight);\n        screenTopLeft.x += margin.left;\n        screenTopLeft.y += margin.top;\n        screenBottomRight.x -= margin.right;\n        screenBottomRight.y -= margin.bottom;\n        return this.drawBox(screenTopLeft, screenBottomRight, strokeColor, backgroundColor);\n    };\n    return ChartCanvas;\n}(Canvas_1.Canvas));\nexports.ChartCanvas = ChartCanvas;\n\n\n//# sourceURL=webpack:///./src/canvas/ChartCanvas.ts?./node_modules/ts-loader");

/***/ }),

/***/ "./node_modules/ts-loader/index.js!./src/canvas/Style.ts":
/*!******************************************************!*\
  !*** ./node_modules/ts-loader!./src/canvas/Style.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nexports.defaultCanvasStyle = exports.CanvasStyle = void 0;\nvar CanvasStyle = /** @class */ (function () {\n    function CanvasStyle() {\n    }\n    return CanvasStyle;\n}());\nexports.CanvasStyle = CanvasStyle;\nexports.defaultCanvasStyle = {\n    color: \"#594940\",\n    backgroundColor: \"#F2E1D8\",\n    greenColor: \"#8C6E5D\",\n    redColor: \"#BF452A\"\n};\n\n\n//# sourceURL=webpack:///./src/canvas/Style.ts?./node_modules/ts-loader");

/***/ }),

/***/ "./node_modules/ts-loader/index.js!./src/canvas/XAxisCanvas.ts":
/*!************************************************************!*\
  !*** ./node_modules/ts-loader!./src/canvas/XAxisCanvas.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nexports.__esModule = true;\nexports.XAxisCanvas = void 0;\nvar Canvas_1 = __webpack_require__(/*! ./Canvas */ \"./src/canvas/Canvas.ts\");\nvar XAxisCanvas = /** @class */ (function (_super) {\n    __extends(XAxisCanvas, _super);\n    function XAxisCanvas(chartContainer, width, height, divisionNumber) {\n        if (divisionNumber === void 0) { divisionNumber = 20; }\n        var _this = _super.call(this, width, height) || this;\n        _this.chartContainer = chartContainer;\n        _this.width = width;\n        _this.height = height;\n        _this.divisionNumber = divisionNumber;\n        return _this;\n    }\n    XAxisCanvas.prototype.setScale = function (scale) {\n        this.timeScale = scale;\n    };\n    XAxisCanvas.prototype.draw = function () {\n        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);\n        var show = \"hours\";\n        var bar_offset = 0;\n        var offset = 5;\n        var bar_width = this.width;\n        var timeScale = this.getTimeScale();\n        var divisionNumber = Math.ceil(this.width / timeScale.deltaPixel) + 1;\n        this.drawLine({ x: 0, y: bar_offset }, { x: bar_width, y: bar_offset });\n        for (var i = -1; i <= divisionNumber; i++) {\n            var pos = timeScale.pixelOffset + i * timeScale.deltaPixel;\n            this.drawLine({ x: pos, y: bar_offset }, { x: pos, y: bar_offset + offset });\n            var date = new Date(timeScale.startDate.getTime() + 1000 * i * timeScale.deltaSecond);\n            if (show == \"hours\")\n                this.drawText(this._dateToHours(date), { x: pos, y: 3 * offset });\n            if (show == \"day\")\n                this.drawText(this._dateToDate(date), { x: pos, y: 3 * offset });\n        }\n    };\n    XAxisCanvas.prototype.getTimeScale = function () {\n        return this.chartContainer.getTimeScale();\n    };\n    XAxisCanvas.prototype._dateToHours = function (date) {\n        function addZero(i) {\n            return (i < 10) ? \"0\" + i : i;\n        }\n        return addZero(date.getHours()) + \":\" + addZero(date.getMinutes());\n    };\n    XAxisCanvas.prototype._dateToDate = function (date) {\n        function addZero(i) {\n            return (i < 10) ? \"0\" + i : i;\n        }\n        return addZero(date.getDate()) + \"/\" + addZero(date.getMonth() + 1) + \"/\" + addZero(date.getFullYear());\n    };\n    XAxisCanvas.prototype.onDrag = function (previousPos, currentPos) {\n        var zoomRatio = 0.1;\n        var deltaX = currentPos.x - previousPos.x;\n        var scale = this.chartContainer.getTimeScale();\n        var midWidth = this.width / 2;\n        var newDeltaPixel = scale.deltaPixel * (1 + deltaX * zoomRatio);\n        scale.pixelOffset = midWidth - (midWidth - scale.pixelOffset) / scale.deltaPixel * newDeltaPixel;\n        scale.deltaPixel = newDeltaPixel;\n        this.chartContainer.setTimeScale(scale);\n    };\n    return XAxisCanvas;\n}(Canvas_1.Canvas));\nexports.XAxisCanvas = XAxisCanvas;\n\n\n//# sourceURL=webpack:///./src/canvas/XAxisCanvas.ts?./node_modules/ts-loader");

/***/ }),

/***/ "./node_modules/ts-loader/index.js!./src/canvas/YAxisCanvas.ts":
/*!************************************************************!*\
  !*** ./node_modules/ts-loader!./src/canvas/YAxisCanvas.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nexports.__esModule = true;\nexports.YAxisCanvas = void 0;\nvar Canvas_1 = __webpack_require__(/*! ./Canvas */ \"./src/canvas/Canvas.ts\");\nvar YAxisCanvas = /** @class */ (function (_super) {\n    __extends(YAxisCanvas, _super);\n    function YAxisCanvas(chart, width, height, divisionNumber) {\n        if (divisionNumber === void 0) { divisionNumber = 20; }\n        var _this = _super.call(this, width, height) || this;\n        _this.chart = chart;\n        _this.width = width;\n        _this.height = height;\n        _this.divisionNumber = divisionNumber;\n        return _this;\n    }\n    YAxisCanvas.prototype.draw = function () {\n        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);\n        var bar_offset = 0;\n        var offset = 4;\n        var bar_height = this.height;\n        var dataScale = this.getDataScale();\n        var divisionNumber = Math.ceil(this.height / dataScale.deltaPixel) + 1;\n        this.drawLine({ x: bar_offset, y: 0 }, { x: bar_offset, y: bar_height });\n        for (var i = -1; i <= divisionNumber; i++) {\n            var pos = dataScale.pixelOffset + i * dataScale.deltaPixel;\n            this.drawLine({ x: bar_offset, y: pos }, { x: bar_offset + offset, y: pos });\n            var value = dataScale.startValue + i * dataScale.deltaValue;\n            this.drawText(value.toString(), { x: bar_offset + 2 * offset, y: pos });\n        }\n    };\n    YAxisCanvas.prototype.getDataScale = function () {\n        return this.chart.getDataScale();\n    };\n    YAxisCanvas.prototype.onDrag = function (previousPos, currentPos) {\n        var zoomRatio = 0.1;\n        var deltaY = currentPos.y - previousPos.y;\n        var scale = this.chart.getDataScale();\n        var midHeight = this.height / 2;\n        var newDeltaPixel = scale.deltaPixel * (1 + deltaY * zoomRatio);\n        scale.pixelOffset = midHeight - (midHeight - scale.pixelOffset) / scale.deltaPixel * newDeltaPixel;\n        scale.deltaPixel = newDeltaPixel;\n        this.chart.setDataScale(scale);\n    };\n    return YAxisCanvas;\n}(Canvas_1.Canvas));\nexports.YAxisCanvas = YAxisCanvas;\n\n\n//# sourceURL=webpack:///./src/canvas/YAxisCanvas.ts?./node_modules/ts-loader");

/***/ }),

/***/ "./node_modules/ts-loader/index.js!./src/index.ts":
/*!***********************************************!*\
  !*** ./node_modules/ts-loader!./src/index.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nexports.__esModule = true;\nvar ChartContainer_1 = __webpack_require__(/*! ./ChartContainer */ \"./src/ChartContainer.ts\");\n__createBinding(exports, ChartContainer_1, \"ChartContainer\");\nvar Chart_1 = __webpack_require__(/*! ./Chart */ \"./src/Chart.ts\");\n__createBinding(exports, Chart_1, \"Chart\");\nvar candlestick_1 = __webpack_require__(/*! ./layers/candlestick */ \"./src/layers/candlestick.ts\");\n__createBinding(exports, candlestick_1, \"CandlestickLayer\");\n__createBinding(exports, candlestick_1, \"Candlestick\");\n\n\n//# sourceURL=webpack:///./src/index.ts?./node_modules/ts-loader");

/***/ }),

/***/ "./node_modules/ts-loader/index.js!./src/layers/candlestick.ts":
/*!************************************************************!*\
  !*** ./node_modules/ts-loader!./src/layers/candlestick.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nexports.__esModule = true;\nexports.CandlestickLayer = exports.Candlestick = void 0;\nvar layer_1 = __webpack_require__(/*! ./layer */ \"./src/layers/layer.ts\");\nvar Candlestick = /** @class */ (function () {\n    function Candlestick() {\n    }\n    return Candlestick;\n}());\nexports.Candlestick = Candlestick;\nvar CandlestickLayer = /** @class */ (function (_super) {\n    __extends(CandlestickLayer, _super);\n    function CandlestickLayer(candlestickList) {\n        if (candlestickList === void 0) { candlestickList = new Array(); }\n        var _this = _super.call(this) || this;\n        _this.candlestickList = candlestickList;\n        return _this;\n    }\n    CandlestickLayer.prototype.update = function (candlestickList) {\n        this.candlestickList = candlestickList;\n        if (this.chartCanvas)\n            this.chartCanvas.draw();\n    };\n    CandlestickLayer.prototype.add = function (candlestick) {\n        this.candlestickList.push(candlestick);\n        if (this.chartCanvas)\n            this.chartCanvas.draw();\n    };\n    CandlestickLayer.prototype.draw = function () {\n        if (!this.chartCanvas) {\n            console.log(\"can't draw without ChartCanvas, please use setChartCanvas to set it.\");\n            return;\n        }\n        for (var _i = 0, _a = this.candlestickList; _i < _a.length; _i++) {\n            var candlestick = _a[_i];\n            var color = this.chartCanvas.getStyle().color;\n            if (candlestick.open < candlestick.close) {\n                color = this.chartCanvas.getStyle().greenColor;\n            }\n            if (candlestick.open > candlestick.close) {\n                color = this.chartCanvas.getStyle().redColor;\n            }\n            this.chartCanvas.realDrawLine({\n                x: candlestick.date.getTime(),\n                y: candlestick.high,\n            }, {\n                x: candlestick.date.getTime(),\n                y: candlestick.low,\n            }, color);\n            this.chartCanvas.realDrawBox({\n                x: candlestick.date.getTime() - candlestick.deltaSecond * 1000 / 2,\n                y: candlestick.open,\n            }, {\n                x: candlestick.date.getTime() + candlestick.deltaSecond * 1000 / 2,\n                y: candlestick.close,\n            }, null, color, {\n                left: 2,\n                right: 2,\n                top: 0,\n                bottom: 0,\n            });\n        }\n    };\n    return CandlestickLayer;\n}(layer_1.Layer));\nexports.CandlestickLayer = CandlestickLayer;\n\n\n//# sourceURL=webpack:///./src/layers/candlestick.ts?./node_modules/ts-loader");

/***/ }),

/***/ "./node_modules/ts-loader/index.js!./src/layers/layer.ts":
/*!******************************************************!*\
  !*** ./node_modules/ts-loader!./src/layers/layer.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nexports.Layer = void 0;\nvar Layer = /** @class */ (function () {\n    function Layer() {\n    }\n    Layer.prototype.setChartCanvas = function (chart) {\n        this.chartCanvas = chart;\n    };\n    return Layer;\n}());\nexports.Layer = Layer;\n\n\n//# sourceURL=webpack:///./src/layers/layer.ts?./node_modules/ts-loader");

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack:///(webpack)/buildin/global.js?");

/***/ }),

/***/ "./src/Chart.ts":
/*!**********************!*\
  !*** ./src/Chart.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {module.exports = global[\"SimpleGraph\"] = __webpack_require__(/*! -!./node_modules/ts-loader!./Chart.ts */ \"./node_modules/ts-loader/index.js!./src/Chart.ts\");\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./src/Chart.ts?");

/***/ }),

/***/ "./src/ChartContainer.ts":
/*!*******************************!*\
  !*** ./src/ChartContainer.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {module.exports = global[\"SimpleGraph\"] = __webpack_require__(/*! -!./node_modules/ts-loader!./ChartContainer.ts */ \"./node_modules/ts-loader/index.js!./src/ChartContainer.ts\");\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./src/ChartContainer.ts?");

/***/ }),

/***/ "./src/Scale.ts":
/*!**********************!*\
  !*** ./src/Scale.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {module.exports = global[\"SimpleGraph\"] = __webpack_require__(/*! -!./node_modules/ts-loader!./Scale.ts */ \"./node_modules/ts-loader/index.js!./src/Scale.ts\");\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./src/Scale.ts?");

/***/ }),

/***/ "./src/canvas/Canvas.ts":
/*!******************************!*\
  !*** ./src/canvas/Canvas.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {module.exports = global[\"SimpleGraph\"] = __webpack_require__(/*! -!./node_modules/ts-loader!./Canvas.ts */ \"./node_modules/ts-loader/index.js!./src/canvas/Canvas.ts\");\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./src/canvas/Canvas.ts?");

/***/ }),

/***/ "./src/canvas/ChartCanvas.ts":
/*!***********************************!*\
  !*** ./src/canvas/ChartCanvas.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {module.exports = global[\"SimpleGraph\"] = __webpack_require__(/*! -!./node_modules/ts-loader!./ChartCanvas.ts */ \"./node_modules/ts-loader/index.js!./src/canvas/ChartCanvas.ts\");\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./src/canvas/ChartCanvas.ts?");

/***/ }),

/***/ "./src/canvas/Style.ts-exposed":
/*!*************************************!*\
  !*** ./src/canvas/Style.ts-exposed ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {module.exports = global[\"SimpleGraph\"] = __webpack_require__(/*! -!./node_modules/ts-loader!./Style.ts */ \"./node_modules/ts-loader/index.js!./src/canvas/Style.ts\");\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./src/canvas/Style.ts-exposed?");

/***/ }),

/***/ "./src/canvas/XAxisCanvas.ts":
/*!***********************************!*\
  !*** ./src/canvas/XAxisCanvas.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {module.exports = global[\"SimpleGraph\"] = __webpack_require__(/*! -!./node_modules/ts-loader!./XAxisCanvas.ts */ \"./node_modules/ts-loader/index.js!./src/canvas/XAxisCanvas.ts\");\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./src/canvas/XAxisCanvas.ts?");

/***/ }),

/***/ "./src/canvas/YAxisCanvas.ts":
/*!***********************************!*\
  !*** ./src/canvas/YAxisCanvas.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {module.exports = global[\"SimpleGraph\"] = __webpack_require__(/*! -!./node_modules/ts-loader!./YAxisCanvas.ts */ \"./node_modules/ts-loader/index.js!./src/canvas/YAxisCanvas.ts\");\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./src/canvas/YAxisCanvas.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {module.exports = global[\"SimpleGraph\"] = __webpack_require__(/*! -!./node_modules/ts-loader!./index.ts */ \"./node_modules/ts-loader/index.js!./src/index.ts\");\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/layers/candlestick.ts":
/*!***********************************!*\
  !*** ./src/layers/candlestick.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {module.exports = global[\"SimpleGraph\"] = __webpack_require__(/*! -!./node_modules/ts-loader!./candlestick.ts */ \"./node_modules/ts-loader/index.js!./src/layers/candlestick.ts\");\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./src/layers/candlestick.ts?");

/***/ }),

/***/ "./src/layers/layer.ts":
/*!*****************************!*\
  !*** ./src/layers/layer.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {module.exports = global[\"SimpleGraph\"] = __webpack_require__(/*! -!./node_modules/ts-loader!./layer.ts */ \"./node_modules/ts-loader/index.js!./src/layers/layer.ts\");\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./src/layers/layer.ts?");

/***/ })

/******/ });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts-exposed");
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
eval("\nexports.__esModule = true;\nexports.Chart = void 0;\nvar ChartCanvas_1 = __webpack_require__(/*! ./canvas/ChartCanvas */ \"./src/canvas/ChartCanvas.ts-exposed\");\nvar YAxisCanvas_1 = __webpack_require__(/*! ./canvas/YAxisCanvas */ \"./src/canvas/YAxisCanvas.ts-exposed\");\nvar Scale_1 = __webpack_require__(/*! ./Scale */ \"./src/Scale.ts-exposed\");\nvar Chart = /** @class */ (function () {\n    function Chart(chartContainer, xAxisCanvas, height, axisThickness) {\n        this.chartContainer = chartContainer;\n        this.xAxisCanvas = xAxisCanvas;\n        this.height = height;\n        this.axisThickness = axisThickness;\n        this.chartCanvas = new ChartCanvas_1.ChartCanvas(this, this.getWidth(), height);\n        this.yAxisCanvas = new YAxisCanvas_1.YAxisCanvas(this, axisThickness, height);\n        this.layerList = new Array();\n    }\n    Chart.prototype.getYAxisCanvas = function () {\n        return this.yAxisCanvas;\n    };\n    Chart.prototype.getChartCanvas = function () {\n        return this.chartCanvas;\n    };\n    Chart.prototype.getDataScale = function () {\n        return this.dataScale;\n    };\n    Chart.prototype.setDataScale = function (dataScale) {\n        this.dataScale = Scale_1.normalizeDataScale(dataScale);\n        this.draw();\n    };\n    Chart.prototype.getTimeScale = function () {\n        return this.chartContainer.getTimeScale();\n    };\n    Chart.prototype.setTimeScale = function (timeScale) {\n        this.chartContainer.setTimeScale(timeScale);\n        this.draw();\n    };\n    Chart.prototype.addLayer = function (layer) {\n        layer.setChartCanvas(this.chartCanvas);\n        this.layerList.push(layer);\n        this.draw();\n    };\n    Chart.prototype.draw = function () {\n        if (!this.getDataScale() || !this.getTimeScale())\n            return;\n        this.chartCanvas.clear();\n        this.chartCanvas.draw();\n        this.yAxisCanvas.draw();\n        for (var _i = 0, _a = this.layerList; _i < _a.length; _i++) {\n            var layer = _a[_i];\n            layer.draw();\n        }\n    };\n    Chart.prototype.scaleData = function (ratio) {\n        var zoomRatio = 0.1;\n        var scale = this.getDataScale();\n        var midHeight = this.height / 2;\n        var newDeltaPixel = scale.deltaPixel * (1 + zoomRatio * ratio);\n        scale.pixelOffset = midHeight - (midHeight - scale.pixelOffset) / scale.deltaPixel * newDeltaPixel;\n        scale.deltaPixel = newDeltaPixel;\n        this.setDataScale(scale);\n    };\n    Chart.prototype.scaleTime = function (ratio) {\n        this.chartContainer.scaleTime(ratio);\n    };\n    Chart.prototype.getWidth = function () {\n        return this.chartContainer.getWidth();\n    };\n    Chart.prototype.getHeight = function () {\n        return this.height;\n    };\n    Chart.prototype.getStyle = function () {\n        return this.chartContainer.getStyle();\n    };\n    return Chart;\n}());\nexports.Chart = Chart;\n\n\n//# sourceURL=webpack:///./src/Chart.ts?./node_modules/ts-loader");

/***/ }),

/***/ "./node_modules/ts-loader/index.js!./src/ChartContainer.ts":
/*!********************************************************!*\
  !*** ./node_modules/ts-loader!./src/ChartContainer.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nexports.ChartContainer = exports.ChartContainerStyle = void 0;\nvar Chart_1 = __webpack_require__(/*! ./Chart */ \"./src/Chart.ts-exposed\");\nvar XAxisCanvas_1 = __webpack_require__(/*! ./canvas/XAxisCanvas */ \"./src/canvas/XAxisCanvas.ts-exposed\");\nvar Scale_1 = __webpack_require__(/*! ./Scale */ \"./src/Scale.ts-exposed\");\nvar ChartContainerStyle = /** @class */ (function () {\n    function ChartContainerStyle() {\n    }\n    return ChartContainerStyle;\n}());\nexports.ChartContainerStyle = ChartContainerStyle;\nvar defaultStyle = {\n    color: \"#D0D0D0\",\n    backgroundColor: \"#292F33\"\n};\nvar ChartContainer = /** @class */ (function () {\n    function ChartContainer(divID, width, axisThickness, chartContainerStyle) {\n        if (chartContainerStyle === void 0) { chartContainerStyle = defaultStyle; }\n        this.divID = divID;\n        this.width = width;\n        this.axisThickness = axisThickness;\n        this.chartContainerStyle = chartContainerStyle;\n        this.charts = new Array();\n        this.containerElement = document.getElementById(divID);\n        this.xAxisCanvas = new XAxisCanvas_1.XAxisCanvas(this, width, axisThickness);\n        this.mainTable = document.createElement('table');\n        this.mainTable.style.background = this.getStyle().backgroundColor;\n        this.mainTable.id = divID + \"-table\";\n        this.containerElement.appendChild(this.mainTable);\n        this.addXAxis();\n    }\n    ChartContainer.prototype.newChart = function (height) {\n        var chart = new Chart_1.Chart(this, this.xAxisCanvas, height, this.axisThickness);\n        this.charts.push(chart);\n        this.update();\n        return chart;\n    };\n    ChartContainer.prototype.update = function () {\n        this.mainTable.innerHTML = \"\";\n        for (var _i = 0, _a = this.charts; _i < _a.length; _i++) {\n            var chart = _a[_i];\n            var chartRow = this.mainTable.insertRow();\n            chartRow.appendChild(this.getCanvasInCell(chart.getChartCanvas()));\n            chartRow.appendChild(this.getCanvasInCell(chart.getYAxisCanvas()));\n        }\n        this.addXAxis();\n    };\n    ChartContainer.prototype.draw = function () {\n        if (!this.getTimeScale())\n            return;\n        for (var _i = 0, _a = this.charts; _i < _a.length; _i++) {\n            var chart = _a[_i];\n            chart.draw();\n        }\n        this.xAxisCanvas.draw();\n    };\n    ChartContainer.prototype.addXAxis = function () {\n        var xAxisRow = this.mainTable.insertRow();\n        var uselessCanvas = new XAxisCanvas_1.XAxisCanvas(this, this.axisThickness, this.axisThickness);\n        xAxisRow.appendChild(this.getCanvasInCell(this.xAxisCanvas));\n        xAxisRow.appendChild(this.getCanvasInCell(uselessCanvas));\n    };\n    ChartContainer.prototype.setTimeScale = function (timeScale) {\n        this.timeScale = Scale_1.normalizeTimeScale(timeScale);\n        this.draw();\n    };\n    ChartContainer.prototype.getTimeScale = function () {\n        return this.timeScale;\n    };\n    ChartContainer.prototype.getCanvasInCell = function (canvas) {\n        var cell = document.createElement(\"td\");\n        cell.appendChild(canvas.getCanvas());\n        return cell;\n    };\n    ChartContainer.prototype.scaleTime = function (ratio) {\n        var zoomRatio = 0.1;\n        var scale = this.getTimeScale();\n        var midWidth = this.width / 2;\n        var newDeltaPixel = scale.deltaPixel * (1 + ratio * zoomRatio);\n        scale.pixelOffset = midWidth - (midWidth - scale.pixelOffset) / scale.deltaPixel * newDeltaPixel;\n        scale.deltaPixel = newDeltaPixel;\n        this.setTimeScale(scale);\n    };\n    ChartContainer.prototype.getWidth = function () {\n        return this.width;\n    };\n    ChartContainer.prototype.getStyle = function () {\n        return this.chartContainerStyle;\n    };\n    return ChartContainer;\n}());\nexports.ChartContainer = ChartContainer;\n\n\n//# sourceURL=webpack:///./src/ChartContainer.ts?./node_modules/ts-loader");

/***/ }),

/***/ "./node_modules/ts-loader/index.js!./src/Scale.ts":
/*!***********************************************!*\
  !*** ./node_modules/ts-loader!./src/Scale.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nexports.normalizeDataScale = exports.normalizeTimeScale = exports.TimeScale = exports.DataScale = void 0;\nvar DataScale = /** @class */ (function () {\n    function DataScale() {\n    }\n    return DataScale;\n}());\nexports.DataScale = DataScale;\nvar TimeScale = /** @class */ (function () {\n    function TimeScale() {\n    }\n    return TimeScale;\n}());\nexports.TimeScale = TimeScale;\n// TODO: finish\nfunction normalizeTimeScale(timeScale) {\n    if (timeScale.pixelOffset > timeScale.deltaPixel) {\n        timeScale.pixelOffset = timeScale.pixelOffset - timeScale.deltaPixel;\n        timeScale.startDate = new Date(timeScale.startDate.getTime() - timeScale.deltaSecond * 1000);\n    }\n    if (timeScale.pixelOffset < -timeScale.deltaPixel) {\n        timeScale.pixelOffset = timeScale.pixelOffset + timeScale.deltaPixel;\n        timeScale.startDate = new Date(timeScale.startDate.getTime() + timeScale.deltaSecond * 1000);\n    }\n    if (timeScale.deltaPixel >= 2 * timeScale.baseDeltaPixel) {\n        timeScale.deltaPixel = timeScale.baseDeltaPixel;\n        timeScale.deltaSecond = timeScale.deltaSecond / 2;\n    }\n    if (timeScale.deltaPixel <= timeScale.baseDeltaPixel / 2) {\n        timeScale.deltaPixel = timeScale.baseDeltaPixel;\n        timeScale.deltaSecond = timeScale.deltaSecond * 2;\n    }\n    return timeScale;\n}\nexports.normalizeTimeScale = normalizeTimeScale;\nfunction normalizeDataScale(dataScale) {\n    if (dataScale.pixelOffset > dataScale.deltaPixel) {\n        dataScale.pixelOffset = dataScale.pixelOffset - dataScale.deltaPixel;\n        dataScale.startValue = dataScale.startValue - dataScale.deltaValue;\n    }\n    if (dataScale.pixelOffset < -dataScale.deltaPixel) {\n        dataScale.pixelOffset = dataScale.pixelOffset + dataScale.deltaPixel;\n        dataScale.startValue = dataScale.startValue + dataScale.deltaValue;\n    }\n    if (dataScale.deltaPixel >= 2 * dataScale.baseDeltaPixel) {\n        dataScale.deltaValue = dataScale.deltaValue / 2;\n        dataScale.deltaPixel = dataScale.baseDeltaPixel;\n    }\n    if (dataScale.deltaPixel <= dataScale.baseDeltaPixel / 2) {\n        dataScale.deltaPixel = dataScale.baseDeltaPixel;\n        dataScale.deltaValue = dataScale.deltaValue * 2;\n    }\n    return dataScale;\n}\nexports.normalizeDataScale = normalizeDataScale;\n\n\n//# sourceURL=webpack:///./src/Scale.ts?./node_modules/ts-loader");

/***/ }),

/***/ "./node_modules/ts-loader/index.js!./src/Util.ts":
/*!**********************************************!*\
  !*** ./node_modules/ts-loader!./src/Util.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nexports.Util = exports.Location = void 0;\nvar Location;\n(function (Location) {\n    Location[Location[\"START\"] = 1] = \"START\";\n    Location[Location[\"END\"] = 2] = \"END\";\n})(Location = exports.Location || (exports.Location = {}));\nvar Util = /** @class */ (function () {\n    function Util() {\n    }\n    Util.getDataScaleFromLayer = function (chart, layer, tickNumber) {\n        if (tickNumber === void 0) { tickNumber = 10; }\n        var max = layer.getMax();\n        var min = layer.getMin();\n        var height = chart.getHeight();\n        return {\n            startValue: max,\n            pixelOffset: 0,\n            deltaValue: (min - max) / tickNumber,\n            deltaPixel: height / tickNumber,\n            baseDeltaPixel: height / tickNumber,\n        };\n    };\n    Util.getTimeScaleFromLayer = function (chart, layer, location, numberOfValuePerMeasure, tickNumber) {\n        if (location === void 0) { location = Location.END; }\n        if (numberOfValuePerMeasure === void 0) { numberOfValuePerMeasure = 1; }\n        if (tickNumber === void 0) { tickNumber = 20; }\n        var first = layer.getFirstX();\n        var second = layer.getSecondX();\n        var last = layer.getLastX();\n        var width = chart.getWidth();\n        var startDate;\n        var deltaSecond = (second - first) / 1000 * numberOfValuePerMeasure;\n        if (location == Location.START) {\n            startDate = first;\n        }\n        else if (location == Location.END) {\n            startDate = last - deltaSecond * (tickNumber - 1) * 1000;\n        }\n        return {\n            startDate: new Date(startDate),\n            pixelOffset: 0,\n            deltaSecond: deltaSecond,\n            deltaPixel: width / tickNumber,\n            baseDeltaPixel: width / tickNumber,\n        };\n    };\n    return Util;\n}());\nexports.Util = Util;\n\n\n//# sourceURL=webpack:///./src/Util.ts?./node_modules/ts-loader");

/***/ }),

/***/ "./node_modules/ts-loader/index.js!./src/canvas/Canvas.ts":
/*!*******************************************************!*\
  !*** ./node_modules/ts-loader!./src/canvas/Canvas.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nexports.Canvas = exports.Position = exports.Direction = void 0;\nvar MouseState;\n(function (MouseState) {\n    MouseState[MouseState[\"Drag\"] = 2] = \"Drag\";\n    MouseState[MouseState[\"Up\"] = 1] = \"Up\";\n    MouseState[MouseState[\"Down\"] = 0] = \"Down\";\n})(MouseState || (MouseState = {}));\nvar Direction;\n(function (Direction) {\n    Direction[Direction[\"UP\"] = 1] = \"UP\";\n    Direction[Direction[\"DOWN\"] = 2] = \"DOWN\";\n})(Direction = exports.Direction || (exports.Direction = {}));\nvar Position = /** @class */ (function () {\n    function Position() {\n    }\n    return Position;\n}());\nexports.Position = Position;\nvar Canvas = /** @class */ (function () {\n    function Canvas(width, height) {\n        var _this = this;\n        var ratio = 2;\n        this.canvas = document.createElement(\"canvas\");\n        this.context = this.canvas.getContext(\"2d\");\n        this.canvas.width = ratio * width;\n        this.canvas.height = ratio * height;\n        this.canvas.style.width = width.toString() + \"px\";\n        this.canvas.style.height = height.toString() + \"px\";\n        this.context.scale(ratio, ratio);\n        this.context.imageSmoothingEnabled = false;\n        this.context.textBaseline = \"middle\";\n        this.mouseState = MouseState.Up;\n        this.boundingRect = this.canvas.getBoundingClientRect();\n        this.canvas.style.cursor = \"pointer\";\n        this.screenPosition = { x: 0, y: 0 };\n        this.canvas.addEventListener(\"mousedown\", function (e) { _this.onMouseChangeState(MouseState.Down, e); });\n        this.canvas.addEventListener(\"mouseup\", function (e) { _this.onMouseChangeState(MouseState.Up, e); });\n        this.canvas.addEventListener(\"mousemove\", function (e) { _this.onMouseMove(e); });\n        this.canvas.addEventListener('wheel', function (e) {\n            if (e.deltaY < 0)\n                _this.onScroll(Direction.UP);\n            if (e.deltaY > 0)\n                _this.onScroll(Direction.DOWN);\n            event.preventDefault();\n        });\n    }\n    Canvas.prototype.getCanvas = function () {\n        return this.canvas;\n    };\n    Canvas.prototype.drawLine = function (points, color, opacity, thickness) {\n        if (color === void 0) { color = \"#fff\"; }\n        if (opacity === void 0) { opacity = 1; }\n        if (thickness === void 0) { thickness = 1; }\n        this.context.save();\n        this.context.lineWidth = thickness;\n        this.context.globalAlpha = opacity;\n        this.context.strokeStyle = color;\n        this.context.beginPath();\n        this.context.translate(0.5, 0.5);\n        this.context.moveTo(points[0].x, points[0].y);\n        for (var _i = 0, _a = points.slice(1, points.length); _i < _a.length; _i++) {\n            var point = _a[_i];\n            this.context.lineTo(point.x, point.y);\n        }\n        this.context.stroke();\n        this.context.translate(-0.5, -0.5);\n        this.context.restore();\n    };\n    Canvas.prototype.drawPolygon = function (points, color, opacity) {\n        if (color === void 0) { color = \"#fff\"; }\n        if (opacity === void 0) { opacity = 1; }\n        this.context.save();\n        this.context.globalAlpha = opacity;\n        this.context.fillStyle = color;\n        this.context.beginPath();\n        this.context.translate(0.5, 0.5);\n        this.context.moveTo(points[0].x, points[0].y);\n        for (var _i = 0, _a = points.slice(1, points.length); _i < _a.length; _i++) {\n            var point = _a[_i];\n            this.context.lineTo(point.x, point.y);\n        }\n        this.context.fill();\n        this.context.translate(-0.5, -0.5);\n        this.context.restore();\n    };\n    Canvas.prototype.drawBox = function (topLeft, bottomRight, strokeColor, backgroundColor) {\n        if (strokeColor === void 0) { strokeColor = null; }\n        if (backgroundColor === void 0) { backgroundColor = null; }\n        this.context.save();\n        this.context.beginPath();\n        this.context.translate(0.5, 0.5);\n        if (backgroundColor)\n            this.context.fillStyle = backgroundColor;\n        this.context.fillRect(topLeft.x, topLeft.y, bottomRight.x - topLeft.x, bottomRight.y - topLeft.y);\n        if (strokeColor) {\n            this.context.beginPath();\n            this.context.strokeStyle = strokeColor;\n            this.context.rect(topLeft.x, topLeft.y, bottomRight.x - topLeft.x, bottomRight.y - topLeft.y);\n            this.context.stroke();\n        }\n        this.context.translate(-0.5, -0.5);\n        this.context.restore();\n    };\n    Canvas.prototype.drawText = function (text, pos, color, font, align) {\n        if (color === void 0) { color = \"#fff\"; }\n        if (font === void 0) { font = \"10px Arial\"; }\n        if (align === void 0) { align = \"left\"; }\n        this.context.textAlign = align;\n        this.context.fillStyle = color;\n        this.context.font = font;\n        this.context.fillText(text, pos.x, pos.y);\n    };\n    Canvas.prototype.onMouseChangeState = function (state, e) {\n        var x = e.clientX - this.boundingRect.left;\n        var y = e.clientY - this.boundingRect.top;\n        // Getting a Click = UP -> DOWN -> UP\n        if (state == MouseState.Up && this.mouseState == MouseState.Down) {\n            this.onClick({ x: x, y: y });\n        }\n        // Record position of Mouse Down in case of drag\n        if (state == MouseState.Up) {\n            this.mouseDownPos = null;\n            this.canvas.style.cursor = \"pointer\";\n        }\n        if (state == MouseState.Down) {\n            this.mouseDownPos = { x: x, y: y };\n        }\n        if (!(this.mouseState == MouseState.Drag && state == MouseState.Down)) {\n            this.mouseState = state;\n        }\n    };\n    Canvas.prototype.onMouseMove = function (e) {\n        var x = e.clientX - this.boundingRect.left;\n        var y = e.clientY - this.boundingRect.top;\n        if (this.mouseState == MouseState.Down || this.mouseState == MouseState.Drag) {\n            this.mouseState = MouseState.Drag;\n            this.canvas.style.cursor = \"grab\";\n            this.onDrag(this.mouseDownPos, { x: x, y: y });\n            this.mouseDownPos = { x: x, y: y };\n        }\n    };\n    Canvas.prototype.onDrag = function (previousPos, currentPos) {\n        this.screenPosition = { x: this.screenPosition.x + currentPos.x - previousPos.x, y: this.screenPosition.y + currentPos.y - previousPos.y };\n        this.mouseDownPos = currentPos;\n    };\n    Canvas.prototype.onScroll = function (direction) {\n    };\n    Canvas.prototype.onClick = function (pos) {\n        console.log(\"CLICK\");\n    };\n    return Canvas;\n}());\nexports.Canvas = Canvas;\n\n\n//# sourceURL=webpack:///./src/canvas/Canvas.ts?./node_modules/ts-loader");

/***/ }),

/***/ "./node_modules/ts-loader/index.js!./src/canvas/ChartCanvas.ts":
/*!************************************************************!*\
  !*** ./node_modules/ts-loader!./src/canvas/ChartCanvas.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nexports.__esModule = true;\nexports.ChartCanvas = void 0;\nvar Canvas_1 = __webpack_require__(/*! ./Canvas */ \"./src/canvas/Canvas.ts-exposed\");\nvar Margin = /** @class */ (function () {\n    function Margin() {\n        this.top = 0;\n        this.bottom = 0;\n        this.left = 0;\n        this.right = 0;\n    }\n    return Margin;\n}());\nvar ChartCanvas = /** @class */ (function (_super) {\n    __extends(ChartCanvas, _super);\n    function ChartCanvas(chart, width, height) {\n        var _this = _super.call(this, width, height) || this;\n        _this.chart = chart;\n        _this.width = width;\n        _this.height = height;\n        return _this;\n    }\n    ChartCanvas.prototype.clear = function () {\n        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);\n    };\n    ChartCanvas.prototype.draw = function () {\n        var timeScale = this.getTimeScale();\n        var dataScale = this.getDataScale();\n        for (var i = 0; i < Math.ceil(this.height / dataScale.deltaPixel) + 1; i++) {\n            this.drawLine([{ x: 0, y: dataScale.pixelOffset + i * dataScale.deltaPixel }, { x: this.width, y: dataScale.pixelOffset + i * dataScale.deltaPixel }], this.getStyle().color, 0.2);\n        }\n        for (var i = 0; i < Math.ceil(this.width / timeScale.deltaPixel) + 1; i++) {\n            this.drawLine([{ x: timeScale.pixelOffset + i * timeScale.deltaPixel, y: 0 }, { x: timeScale.pixelOffset + i * timeScale.deltaPixel, y: this.height }], this.getStyle().color, 0.2);\n        }\n    };\n    ChartCanvas.prototype.onDrag = function (previousPos, currentPos) {\n        var deltaX = currentPos.x - previousPos.x;\n        var x = this.screenPosition.x + deltaX;\n        var deltaY = currentPos.y - previousPos.y;\n        var y = this.screenPosition.y + deltaY;\n        this.screenPosition = { x: x, y: y };\n        var currentDataScale = this.getDataScale();\n        currentDataScale.pixelOffset = currentDataScale.pixelOffset + deltaY;\n        this.setDataScale(currentDataScale);\n        var currenTimeScale = this.getTimeScale();\n        currenTimeScale.pixelOffset = currenTimeScale.pixelOffset + deltaX;\n        this.setTimeScale(currenTimeScale);\n        this.chart.draw();\n    };\n    ChartCanvas.prototype.onScroll = function (direction) {\n        if (direction == Canvas_1.Direction.UP) {\n            this.chart.scaleData(0.4);\n            this.chart.scaleTime(0.4);\n        }\n        if (direction == Canvas_1.Direction.DOWN) {\n            this.chart.scaleData(-0.4);\n            this.chart.scaleTime(-0.4);\n        }\n    };\n    ChartCanvas.prototype.getDataScale = function () {\n        return this.chart.getDataScale();\n    };\n    ChartCanvas.prototype.setDataScale = function (dataScale) {\n        return this.chart.setDataScale(dataScale);\n    };\n    ChartCanvas.prototype.getTimeScale = function () {\n        return this.chart.getTimeScale();\n    };\n    ChartCanvas.prototype.setTimeScale = function (timeScale) {\n        this.chart.setTimeScale(timeScale);\n    };\n    ChartCanvas.prototype.realToScreenPos = function (realPosition) {\n        var timeScale = this.getTimeScale();\n        var dataScale = this.getDataScale();\n        var screenPosition = {\n            x: (realPosition.x - timeScale.startDate.getTime()) * timeScale.deltaPixel / (timeScale.deltaSecond * 1000) + timeScale.pixelOffset,\n            y: (realPosition.y - dataScale.startValue) * dataScale.deltaPixel / dataScale.deltaValue + dataScale.pixelOffset,\n        };\n        return screenPosition;\n    };\n    ChartCanvas.prototype.realDrawLine = function (points, color, opacity, thickness) {\n        var _this = this;\n        if (color === void 0) { color = this.getStyle().color; }\n        if (opacity === void 0) { opacity = 1; }\n        if (thickness === void 0) { thickness = 1; }\n        var screenPoints = points.map(function (point) { return _this.realToScreenPos(point); });\n        return _super.prototype.drawLine.call(this, screenPoints, color, opacity, thickness);\n    };\n    ChartCanvas.prototype.realDrawPolygon = function (points, color, opacity) {\n        var _this = this;\n        if (color === void 0) { color = this.getStyle().color; }\n        if (opacity === void 0) { opacity = 1; }\n        var screenPoints = points.map(function (point) { return _this.realToScreenPos(point); });\n        return _super.prototype.drawPolygon.call(this, screenPoints, color, opacity);\n    };\n    ChartCanvas.prototype.realDrawText = function (text, pos, font) {\n        if (font === void 0) { font = \"10px Arial\"; }\n        var screenPos = this.realToScreenPos(pos);\n        return _super.prototype.drawText.call(this, text, screenPos, this.getStyle().color, font);\n    };\n    ChartCanvas.prototype.realDrawBox = function (topLeft, bottomRight, strokeColor, backgroundColor, margin) {\n        if (strokeColor === void 0) { strokeColor = null; }\n        if (backgroundColor === void 0) { backgroundColor = null; }\n        if (margin === void 0) { margin = new Margin(); }\n        var screenTopLeft = this.realToScreenPos(topLeft);\n        var screenBottomRight = this.realToScreenPos(bottomRight);\n        screenTopLeft.x += margin.left;\n        screenTopLeft.y += margin.top;\n        screenBottomRight.x -= margin.right;\n        screenBottomRight.y -= margin.bottom;\n        return this.drawBox(screenTopLeft, screenBottomRight, strokeColor, backgroundColor);\n    };\n    ChartCanvas.prototype.getStyle = function () {\n        return this.chart.getStyle();\n    };\n    return ChartCanvas;\n}(Canvas_1.Canvas));\nexports.ChartCanvas = ChartCanvas;\n\n\n//# sourceURL=webpack:///./src/canvas/ChartCanvas.ts?./node_modules/ts-loader");

/***/ }),

/***/ "./node_modules/ts-loader/index.js!./src/canvas/XAxisCanvas.ts":
/*!************************************************************!*\
  !*** ./node_modules/ts-loader!./src/canvas/XAxisCanvas.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nexports.__esModule = true;\nexports.XAxisCanvas = void 0;\nvar Canvas_1 = __webpack_require__(/*! ./Canvas */ \"./src/canvas/Canvas.ts-exposed\");\nvar XAxisCanvas = /** @class */ (function (_super) {\n    __extends(XAxisCanvas, _super);\n    function XAxisCanvas(chartContainer, width, height, divisionNumber) {\n        if (divisionNumber === void 0) { divisionNumber = 20; }\n        var _this = _super.call(this, width, height) || this;\n        _this.chartContainer = chartContainer;\n        _this.width = width;\n        _this.height = height;\n        _this.divisionNumber = divisionNumber;\n        return _this;\n    }\n    XAxisCanvas.prototype.setScale = function (scale) {\n        this.timeScale = scale;\n    };\n    XAxisCanvas.prototype.draw = function () {\n        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);\n        var show = \"hours\";\n        var bar_offset = 0;\n        var offset = 5;\n        var bar_width = this.width;\n        var timeScale = this.getTimeScale();\n        var divisionNumber = Math.ceil(this.width / timeScale.deltaPixel) + 1;\n        this.drawLine([{ x: 0, y: bar_offset }, { x: bar_width, y: bar_offset }], this.getStyle().color);\n        for (var i = -1; i <= divisionNumber; i++) {\n            var pos = timeScale.pixelOffset + i * timeScale.deltaPixel;\n            this.drawLine([{ x: pos, y: bar_offset }, { x: pos, y: bar_offset + offset }], this.getStyle().color);\n            var date = new Date(timeScale.startDate.getTime() + 1000 * i * timeScale.deltaSecond);\n            this.drawText(this._dateToHours(date), { x: pos, y: 3 * offset + 10 }, this.getStyle().color, \"10px Arial\", \"center\");\n            this.drawText(this._dateToDate(date), { x: pos, y: 3 * offset }, this.getStyle().color, \"10px Arial\", \"center\");\n        }\n    };\n    XAxisCanvas.prototype.getTimeScale = function () {\n        return this.chartContainer.getTimeScale();\n    };\n    XAxisCanvas.prototype._dateToHours = function (date) {\n        function addZero(i) {\n            return (i < 10) ? \"0\" + i : i;\n        }\n        return addZero(date.getHours()) + \":\" + addZero(date.getMinutes());\n    };\n    XAxisCanvas.prototype._dateToDate = function (date) {\n        function addZero(i) {\n            return (i < 10) ? \"0\" + i : i;\n        }\n        return addZero(date.getDate()) + \"/\" + addZero(date.getMonth() + 1) + \"/\" + addZero(date.getFullYear());\n    };\n    XAxisCanvas.prototype.onDrag = function (previousPos, currentPos) {\n        var deltaX = currentPos.x - previousPos.x;\n        this.chartContainer.scaleTime(deltaX);\n    };\n    XAxisCanvas.prototype.getStyle = function () {\n        return this.chartContainer.getStyle();\n    };\n    return XAxisCanvas;\n}(Canvas_1.Canvas));\nexports.XAxisCanvas = XAxisCanvas;\n\n\n//# sourceURL=webpack:///./src/canvas/XAxisCanvas.ts?./node_modules/ts-loader");

/***/ }),

/***/ "./node_modules/ts-loader/index.js!./src/canvas/YAxisCanvas.ts":
/*!************************************************************!*\
  !*** ./node_modules/ts-loader!./src/canvas/YAxisCanvas.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nexports.__esModule = true;\nexports.YAxisCanvas = void 0;\nvar Canvas_1 = __webpack_require__(/*! ./Canvas */ \"./src/canvas/Canvas.ts-exposed\");\nvar YAxisCanvas = /** @class */ (function (_super) {\n    __extends(YAxisCanvas, _super);\n    function YAxisCanvas(chart, width, height, divisionNumber) {\n        if (divisionNumber === void 0) { divisionNumber = 20; }\n        var _this = _super.call(this, width, height) || this;\n        _this.chart = chart;\n        _this.width = width;\n        _this.height = height;\n        _this.divisionNumber = divisionNumber;\n        return _this;\n    }\n    YAxisCanvas.prototype.draw = function () {\n        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);\n        var bar_offset = 0;\n        var offset = 4;\n        var bar_height = this.height;\n        var dataScale = this.getDataScale();\n        var divisionNumber = Math.ceil(this.height / dataScale.deltaPixel) + 1;\n        this.drawLine([{ x: bar_offset, y: 0 }, { x: bar_offset, y: bar_height }], this.getStyle().color);\n        for (var i = -1; i <= divisionNumber; i++) {\n            var pos = dataScale.pixelOffset + i * dataScale.deltaPixel;\n            this.drawLine([{ x: bar_offset, y: pos }, { x: bar_offset + offset, y: pos }], this.getStyle().color);\n            var value = dataScale.startValue + i * dataScale.deltaValue;\n            this.drawText(value.toString(), { x: bar_offset + 2 * offset, y: pos }, this.getStyle().color);\n        }\n    };\n    YAxisCanvas.prototype.getDataScale = function () {\n        return this.chart.getDataScale();\n    };\n    YAxisCanvas.prototype.onDrag = function (previousPos, currentPos) {\n        var deltaY = currentPos.y - previousPos.y;\n        this.chart.scaleData(deltaY);\n    };\n    YAxisCanvas.prototype.getStyle = function () {\n        return this.chart.getStyle();\n    };\n    return YAxisCanvas;\n}(Canvas_1.Canvas));\nexports.YAxisCanvas = YAxisCanvas;\n\n\n//# sourceURL=webpack:///./src/canvas/YAxisCanvas.ts?./node_modules/ts-loader");

/***/ }),

/***/ "./node_modules/ts-loader/index.js!./src/index.ts":
/*!***********************************************!*\
  !*** ./node_modules/ts-loader!./src/index.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nexports.__esModule = true;\nvar ChartContainer_1 = __webpack_require__(/*! ./ChartContainer */ \"./src/ChartContainer.ts-exposed\");\n__createBinding(exports, ChartContainer_1, \"ChartContainer\");\nvar Chart_1 = __webpack_require__(/*! ./Chart */ \"./src/Chart.ts-exposed\");\n__createBinding(exports, Chart_1, \"Chart\");\nvar Candlestick_1 = __webpack_require__(/*! ./layers/Candlestick */ \"./src/layers/Candlestick.ts-exposed\");\n__createBinding(exports, Candlestick_1, \"CandlestickLayer\");\n__createBinding(exports, Candlestick_1, \"Candlestick\");\nvar Line_1 = __webpack_require__(/*! ./layers/Line */ \"./src/layers/Line.ts-exposed\");\n__createBinding(exports, Line_1, \"Point\");\n__createBinding(exports, Line_1, \"LineLayer\");\n__createBinding(exports, Line_1, \"LineStyle\");\nvar Band_1 = __webpack_require__(/*! ./layers/Band */ \"./src/layers/Band.ts-exposed\");\n__createBinding(exports, Band_1, \"BandStep\");\n__createBinding(exports, Band_1, \"BandLayer\");\nvar Util_1 = __webpack_require__(/*! ./Util */ \"./src/Util.ts-exposed\");\n__createBinding(exports, Util_1, \"Util\");\n\n\n//# sourceURL=webpack:///./src/index.ts?./node_modules/ts-loader");

/***/ }),

/***/ "./node_modules/ts-loader/index.js!./src/layers/Band.ts":
/*!*****************************************************!*\
  !*** ./node_modules/ts-loader!./src/layers/Band.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nexports.__esModule = true;\nexports.BandLayer = exports.defaultBandStyle = exports.BandStyle = exports.BandStep = void 0;\nvar Layer_1 = __webpack_require__(/*! ./Layer */ \"./src/layers/Layer.ts-exposed\");\nvar BandStep = /** @class */ (function () {\n    function BandStep() {\n    }\n    return BandStep;\n}());\nexports.BandStep = BandStep;\nvar BandStyle = /** @class */ (function () {\n    function BandStyle() {\n    }\n    return BandStyle;\n}());\nexports.BandStyle = BandStyle;\nexports.defaultBandStyle = {\n    color: \"#FF0000\",\n    opacity: 0.5,\n};\nvar BandLayer = /** @class */ (function (_super) {\n    __extends(BandLayer, _super);\n    function BandLayer(stepList, bandStyle) {\n        if (stepList === void 0) { stepList = new Array(); }\n        if (bandStyle === void 0) { bandStyle = exports.defaultBandStyle; }\n        var _this = _super.call(this) || this;\n        _this.stepList = stepList;\n        _this.bandStyle = bandStyle;\n        return _this;\n    }\n    BandLayer.prototype.update = function (stepList) {\n        this.stepList = stepList;\n        if (this.chartCanvas)\n            this.chartCanvas.draw();\n    };\n    BandLayer.prototype.add = function (step) {\n        this.stepList.push(step);\n        if (this.chartCanvas)\n            this.chartCanvas.draw();\n    };\n    BandLayer.prototype.getMax = function () {\n        return Math.max.apply(Math, this.stepList.map(function (x) { return x.top; }));\n    };\n    BandLayer.prototype.getMin = function () {\n        return Math.min.apply(Math, this.stepList.map(function (x) { return x.bottom; }));\n    };\n    BandLayer.prototype.getFirstX = function () {\n        return this.stepList[0].x;\n    };\n    BandLayer.prototype.getSecondX = function () {\n        return this.stepList[1].x;\n    };\n    BandLayer.prototype.getLastX = function () {\n        return this.stepList[this.stepList.length - 1].x;\n    };\n    BandLayer.prototype.draw = function () {\n        if (!this.chartCanvas) {\n            console.log(\"can't draw without ChartCanvas, please use setChartCanvas to set it.\");\n            return;\n        }\n        for (var i = 0; i < this.stepList.length - 1; i++) {\n            var firstStep = this.stepList[i];\n            var secondStep = this.stepList[i + 1];\n            var posList = this.bandStepToPositionArray(firstStep, secondStep);\n            this.chartCanvas.realDrawPolygon(posList, this.bandStyle.color, this.bandStyle.opacity);\n        }\n    };\n    BandLayer.prototype.bandStepToPositionArray = function (firstStep, secondStep) {\n        return [\n            {\n                x: firstStep.x,\n                y: firstStep.top\n            },\n            {\n                x: secondStep.x,\n                y: secondStep.top\n            },\n            {\n                x: secondStep.x,\n                y: secondStep.bottom\n            },\n            {\n                x: firstStep.x,\n                y: firstStep.bottom\n            },\n        ];\n    };\n    return BandLayer;\n}(Layer_1.Layer));\nexports.BandLayer = BandLayer;\n\n\n//# sourceURL=webpack:///./src/layers/Band.ts?./node_modules/ts-loader");

/***/ }),

/***/ "./node_modules/ts-loader/index.js!./src/layers/Candlestick.ts":
/*!************************************************************!*\
  !*** ./node_modules/ts-loader!./src/layers/Candlestick.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nexports.__esModule = true;\nexports.CandlestickLayer = exports.defaultCandlestickStyle = exports.CandlestickStyle = exports.Candlestick = void 0;\nvar Layer_1 = __webpack_require__(/*! ./Layer */ \"./src/layers/Layer.ts-exposed\");\nvar Candlestick = /** @class */ (function () {\n    function Candlestick() {\n    }\n    return Candlestick;\n}());\nexports.Candlestick = Candlestick;\nvar CandlestickStyle = /** @class */ (function () {\n    function CandlestickStyle() {\n    }\n    return CandlestickStyle;\n}());\nexports.CandlestickStyle = CandlestickStyle;\nexports.defaultCandlestickStyle = {\n    neutralColor: \"#D0D0D0\",\n    greenColor: \"#038C3E\",\n    redColor: \"#BF452A\",\n    opacity: 1,\n    shadowThickness: 1,\n};\nvar CandlestickLayer = /** @class */ (function (_super) {\n    __extends(CandlestickLayer, _super);\n    function CandlestickLayer(candlestickList, candlestickStyle) {\n        if (candlestickList === void 0) { candlestickList = new Array(); }\n        if (candlestickStyle === void 0) { candlestickStyle = exports.defaultCandlestickStyle; }\n        var _this = _super.call(this) || this;\n        _this.candlestickStyle = candlestickStyle;\n        _this.candlestickList = candlestickList;\n        return _this;\n    }\n    CandlestickLayer.prototype.getMax = function () {\n        return Math.max.apply(Math, this.candlestickList.map(function (x) { return x.high; }));\n    };\n    CandlestickLayer.prototype.getMin = function () {\n        return Math.min.apply(Math, this.candlestickList.map(function (x) { return x.low; }));\n    };\n    CandlestickLayer.prototype.getFirstX = function () {\n        return this.candlestickList[0].date.getTime();\n    };\n    CandlestickLayer.prototype.getSecondX = function () {\n        return this.candlestickList[1].date.getTime();\n    };\n    CandlestickLayer.prototype.getLastX = function () {\n        return this.candlestickList[this.candlestickList.length - 1].date.getTime();\n    };\n    CandlestickLayer.prototype.update = function (candlestickList) {\n        this.candlestickList = candlestickList;\n        if (this.chartCanvas)\n            this.chartCanvas.draw();\n    };\n    CandlestickLayer.prototype.add = function (candlestick) {\n        this.candlestickList.push(candlestick);\n        if (this.chartCanvas)\n            this.chartCanvas.draw();\n    };\n    CandlestickLayer.prototype.draw = function () {\n        if (!this.chartCanvas) {\n            console.log(\"can't draw without ChartCanvas, please use setChartCanvas to set it.\");\n            return;\n        }\n        for (var _i = 0, _a = this.candlestickList; _i < _a.length; _i++) {\n            var candlestick = _a[_i];\n            var color = this.candlestickStyle.neutralColor;\n            if (candlestick.open < candlestick.close) {\n                color = this.candlestickStyle.greenColor;\n            }\n            if (candlestick.open > candlestick.close) {\n                color = this.candlestickStyle.redColor;\n            }\n            this.chartCanvas.realDrawLine([{\n                    x: candlestick.date.getTime(),\n                    y: candlestick.high,\n                },\n                {\n                    x: candlestick.date.getTime(),\n                    y: candlestick.low,\n                }], color);\n            this.chartCanvas.realDrawBox({\n                x: candlestick.date.getTime() - candlestick.deltaSecond * 1000 / 2,\n                y: candlestick.open,\n            }, {\n                x: candlestick.date.getTime() + candlestick.deltaSecond * 1000 / 2,\n                y: candlestick.close,\n            }, null, color, {\n                left: 2,\n                right: 2,\n                top: 0,\n                bottom: 0,\n            });\n        }\n    };\n    return CandlestickLayer;\n}(Layer_1.Layer));\nexports.CandlestickLayer = CandlestickLayer;\n\n\n//# sourceURL=webpack:///./src/layers/Candlestick.ts?./node_modules/ts-loader");

/***/ }),

/***/ "./node_modules/ts-loader/index.js!./src/layers/Layer.ts":
/*!******************************************************!*\
  !*** ./node_modules/ts-loader!./src/layers/Layer.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nexports.Layer = void 0;\nvar Layer = /** @class */ (function () {\n    function Layer() {\n    }\n    Layer.prototype.setChartCanvas = function (chart) {\n        this.chartCanvas = chart;\n    };\n    return Layer;\n}());\nexports.Layer = Layer;\n\n\n//# sourceURL=webpack:///./src/layers/Layer.ts?./node_modules/ts-loader");

/***/ }),

/***/ "./node_modules/ts-loader/index.js!./src/layers/Line.ts":
/*!*****************************************************!*\
  !*** ./node_modules/ts-loader!./src/layers/Line.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nexports.__esModule = true;\nexports.LineLayer = exports.LineStyle = exports.Point = void 0;\nvar Layer_1 = __webpack_require__(/*! ./Layer */ \"./src/layers/Layer.ts-exposed\");\nvar Point = /** @class */ (function () {\n    function Point() {\n    }\n    return Point;\n}());\nexports.Point = Point;\nvar LineStyle = /** @class */ (function () {\n    function LineStyle() {\n    }\n    return LineStyle;\n}());\nexports.LineStyle = LineStyle;\nvar defaultLineStyle = {\n    color: \"#FFFFFF\",\n    thickness: 3,\n    opacity: 1,\n};\nvar LineLayer = /** @class */ (function (_super) {\n    __extends(LineLayer, _super);\n    function LineLayer(pointList, lineStyle) {\n        if (pointList === void 0) { pointList = new Array(); }\n        if (lineStyle === void 0) { lineStyle = defaultLineStyle; }\n        var _this = _super.call(this) || this;\n        _this.pointList = pointList;\n        _this.lineStyle = lineStyle;\n        return _this;\n    }\n    LineLayer.prototype.update = function (pointList) {\n        this.pointList = pointList;\n        if (this.chartCanvas)\n            this.chartCanvas.draw();\n    };\n    LineLayer.prototype.getMax = function () {\n        return Math.max.apply(Math, this.pointList.map(function (x) { return x.y; }));\n    };\n    LineLayer.prototype.getMin = function () {\n        return Math.min.apply(Math, this.pointList.map(function (x) { return x.y; }));\n    };\n    LineLayer.prototype.getFirstX = function () {\n        return this.pointList[0].x;\n    };\n    LineLayer.prototype.getSecondX = function () {\n        return this.pointList[1].x;\n    };\n    LineLayer.prototype.getLastX = function () {\n        return this.pointList[this.pointList.length - 1].x;\n    };\n    LineLayer.prototype.add = function (point) {\n        this.pointList.push(point);\n        if (this.chartCanvas)\n            this.chartCanvas.draw();\n    };\n    LineLayer.prototype.draw = function () {\n        if (!this.chartCanvas) {\n            console.log(\"can't draw without ChartCanvas, please use setChartCanvas to set it.\");\n            return;\n        }\n        this.chartCanvas.realDrawLine(this.pointList, this.lineStyle.color, this.lineStyle.opacity, this.lineStyle.thickness);\n    };\n    return LineLayer;\n}(Layer_1.Layer));\nexports.LineLayer = LineLayer;\n\n\n//# sourceURL=webpack:///./src/layers/Line.ts?./node_modules/ts-loader");

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack:///(webpack)/buildin/global.js?");

/***/ }),

/***/ "./src/Chart.ts-exposed":
/*!******************************!*\
  !*** ./src/Chart.ts-exposed ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {module.exports = global[\"SimpleTimeChart\"] = __webpack_require__(/*! -!./node_modules/ts-loader!./Chart.ts */ \"./node_modules/ts-loader/index.js!./src/Chart.ts\");\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./src/Chart.ts-exposed?");

/***/ }),

/***/ "./src/ChartContainer.ts-exposed":
/*!***************************************!*\
  !*** ./src/ChartContainer.ts-exposed ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {module.exports = global[\"SimpleTimeChart\"] = __webpack_require__(/*! -!./node_modules/ts-loader!./ChartContainer.ts */ \"./node_modules/ts-loader/index.js!./src/ChartContainer.ts\");\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./src/ChartContainer.ts-exposed?");

/***/ }),

/***/ "./src/Scale.ts-exposed":
/*!******************************!*\
  !*** ./src/Scale.ts-exposed ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {module.exports = global[\"SimpleTimeChart\"] = __webpack_require__(/*! -!./node_modules/ts-loader!./Scale.ts */ \"./node_modules/ts-loader/index.js!./src/Scale.ts\");\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./src/Scale.ts-exposed?");

/***/ }),

/***/ "./src/Util.ts-exposed":
/*!*****************************!*\
  !*** ./src/Util.ts-exposed ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {module.exports = global[\"SimpleTimeChart\"] = __webpack_require__(/*! -!./node_modules/ts-loader!./Util.ts */ \"./node_modules/ts-loader/index.js!./src/Util.ts\");\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./src/Util.ts-exposed?");

/***/ }),

/***/ "./src/canvas/Canvas.ts-exposed":
/*!**************************************!*\
  !*** ./src/canvas/Canvas.ts-exposed ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {module.exports = global[\"SimpleTimeChart\"] = __webpack_require__(/*! -!./node_modules/ts-loader!./Canvas.ts */ \"./node_modules/ts-loader/index.js!./src/canvas/Canvas.ts\");\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./src/canvas/Canvas.ts-exposed?");

/***/ }),

/***/ "./src/canvas/ChartCanvas.ts-exposed":
/*!*******************************************!*\
  !*** ./src/canvas/ChartCanvas.ts-exposed ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {module.exports = global[\"SimpleTimeChart\"] = __webpack_require__(/*! -!./node_modules/ts-loader!./ChartCanvas.ts */ \"./node_modules/ts-loader/index.js!./src/canvas/ChartCanvas.ts\");\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./src/canvas/ChartCanvas.ts-exposed?");

/***/ }),

/***/ "./src/canvas/XAxisCanvas.ts-exposed":
/*!*******************************************!*\
  !*** ./src/canvas/XAxisCanvas.ts-exposed ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {module.exports = global[\"SimpleTimeChart\"] = __webpack_require__(/*! -!./node_modules/ts-loader!./XAxisCanvas.ts */ \"./node_modules/ts-loader/index.js!./src/canvas/XAxisCanvas.ts\");\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./src/canvas/XAxisCanvas.ts-exposed?");

/***/ }),

/***/ "./src/canvas/YAxisCanvas.ts-exposed":
/*!*******************************************!*\
  !*** ./src/canvas/YAxisCanvas.ts-exposed ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {module.exports = global[\"SimpleTimeChart\"] = __webpack_require__(/*! -!./node_modules/ts-loader!./YAxisCanvas.ts */ \"./node_modules/ts-loader/index.js!./src/canvas/YAxisCanvas.ts\");\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./src/canvas/YAxisCanvas.ts-exposed?");

/***/ }),

/***/ "./src/index.ts-exposed":
/*!******************************!*\
  !*** ./src/index.ts-exposed ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {module.exports = global[\"SimpleTimeChart\"] = __webpack_require__(/*! -!./node_modules/ts-loader!./index.ts */ \"./node_modules/ts-loader/index.js!./src/index.ts\");\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./src/index.ts-exposed?");

/***/ }),

/***/ "./src/layers/Band.ts-exposed":
/*!************************************!*\
  !*** ./src/layers/Band.ts-exposed ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {module.exports = global[\"SimpleTimeChart\"] = __webpack_require__(/*! -!./node_modules/ts-loader!./Band.ts */ \"./node_modules/ts-loader/index.js!./src/layers/Band.ts\");\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./src/layers/Band.ts-exposed?");

/***/ }),

/***/ "./src/layers/Candlestick.ts-exposed":
/*!*******************************************!*\
  !*** ./src/layers/Candlestick.ts-exposed ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {module.exports = global[\"SimpleTimeChart\"] = __webpack_require__(/*! -!./node_modules/ts-loader!./Candlestick.ts */ \"./node_modules/ts-loader/index.js!./src/layers/Candlestick.ts\");\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./src/layers/Candlestick.ts-exposed?");

/***/ }),

/***/ "./src/layers/Layer.ts-exposed":
/*!*************************************!*\
  !*** ./src/layers/Layer.ts-exposed ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {module.exports = global[\"SimpleTimeChart\"] = __webpack_require__(/*! -!./node_modules/ts-loader!./Layer.ts */ \"./node_modules/ts-loader/index.js!./src/layers/Layer.ts\");\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./src/layers/Layer.ts-exposed?");

/***/ }),

/***/ "./src/layers/Line.ts-exposed":
/*!************************************!*\
  !*** ./src/layers/Line.ts-exposed ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {module.exports = global[\"SimpleTimeChart\"] = __webpack_require__(/*! -!./node_modules/ts-loader!./Line.ts */ \"./node_modules/ts-loader/index.js!./src/layers/Line.ts\");\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./src/layers/Line.ts-exposed?");

/***/ })

/******/ });
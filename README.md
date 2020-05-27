# SimpleTimeChart

## Tutorial


### Create the minimum HTML File

First download the last SimpleTimeChart JS file, then create a blank `main.js`.

Finally, Create a `index.html` file with the following content

```HTML
<!DOCTYPE html>
<html>
    <head>
        <title>SimpleTimeChart</title>
    </head>
    <body>
        <div id="myChart"></div>
        <script src="simple-time-chart.js"></script>
        <script src="main.js"></script>
    </body>
</html>
```

### Create a ChartContainer

The ChartContainer will contain all your charts.


```javascript
let chartContainer = new SimpleTimeChart.ChartContainer(
    "myChart", // Div ID of the containing the chart
    1300,  // Width of the chart
    70,  // Axis Tickness
    {
        color: "#D0D0D0", // Color of axis text
        backgroundColor: "#292F33" // Background of the container
    }
);
```

### Create Charts

The Chart will be inside the ChartContainer. A ChartContainer can have several Charts that will share the same time axis


```javascript
let chart = chartContainer.newChart(
    500 // height of the Chart
);

let secondChart = chartContainer.newChart(
    300 // height of the Chart
);
```

### Add Layers to Charts

For now there are 3 types of layers: `CandleStickLayer`, `LineLayer`, `BandLayer`

*NB: Style in layers is optional*

```javascript
// Get data we will use for the demo
let data = [{"date":1546300800,"high":0.01232199,"low":0.012105,"open":0.01227412,"close":0.01224702,"volume":11.47474031,"quoteVolume":938.52999477,"weightedAverage":0.01222629}, ...]

// Transform the data so that it fits the required format
let deltaSecond = data[1]["date"] - data[0]["date"];
let candlesticks = data.map(x => {
    x.date = new Date(x.date * 1000);
    x.deltaSecond = deltaSecond;
    return x;
})
let pointList = candlesticks.map(x => {return {x: x.date.getTime(), y: x.weightedAverage}});
let bandStepList = candlesticks.map(x => {return {x: x.date.getTime(), top: x.high, bottom:x.low}});

// Define all layers
let candlestickLayer = new SimpleTimeChart.CandlestickLayer(candlesticks, {
    neutralColor: "#D0D0D0",
    greenColor: "#038C3E",
    redColor: "#BF452A",
    opacity: 1,
    shadowThickness: 1,
});
let lineLayer = new SimpleTimeChart.LineLayer(pointList, {
    color: "#ff0",
    thickness: 2,
    opacity: 1,
})
let bandLayer = new SimpleTimeChart.BandLayer(bandStepList, {
    color: "#FFFFFF",
    opacity: 0.2,
});

// Add Layers to the Chart you want
chart.addLayer(candlestickLayer);
secondChart.addLayer(lineLayer);
secondChart.addLayer(bandLayer);
```

### Set Scales

There are 2 scales: `TimeScale` and `DataScale`. These are use to describe what you see in the chart. (i.e. Where the showing charts start, what is the scale of data).
To initialize scales we will use 2 functions created to make your like easier: `SimpleTimeChart.Util.getDataScaleFromLayer` and `SimpleTimeChart.Util.getDataScaleFromLayer`
*NB: You need to set the TimeScale only once because it is shared with all charts, but you need to define one DataScale per Chart.*

```javascript
chartContainer.setTimeScale(
    SimpleTimeChart.Util.getTimeScaleFromLayer(chart, candlestickLayer)
);
chart.setDataScale(
    SimpleTimeChart.Util.getDataScaleFromLayer(chart, candlestickLayer)
);

secondChart.setDataScale(
    SimpleTimeChart.Util.getDataScaleFromLayer(secondChart, lineLayer)
);
```

### Draw the result

```javascript
chartContainer.draw();
```


### Go to the demo

- You can see the full code from above [here](https://github.com/TEDmk/SimpleTimeChart/blob/master/www/main.js)
- You can also see a live demo [here](https://tedmk.github.io/SimpleTimeChart/www/index.html)

## How to run the dev

```bash
npm install -g yarn
yarn install
./node_modules/.bin/webpack-cli --watch
```



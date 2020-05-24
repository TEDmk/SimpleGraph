export class DataScale {
    startValue: number;
    pixelOffset: number;
    deltaValue: number;
    deltaPixel: number;
    baseDeltaPixel: number;
}

export class TimeScale {
    startDate: Date;
    pixelOffset: number;
    deltaSecond: number;
    deltaPixel: number;
    baseDeltaPixel: number;
}

// TODO: finish

export function normalizeTimeScale(timeScale: TimeScale){
    // if(timeScale.deltaPixel > 2 * timeScale.baseDeltaPixel){
    //     timeScale.deltaPixel = timeScale.baseDeltaPixel;
    //     timeScale.deltaSecond = timeScale.deltaSecond / 2;
    // }
    // if(timeScale.deltaPixel < timeScale.baseDeltaPixel / 2){
    //     timeScale.deltaPixel = timeScale.baseDeltaPixel;
    //     timeScale.deltaSecond = timeScale.deltaSecond * 2;
    // }
    if(timeScale.pixelOffset > timeScale.deltaPixel){
        timeScale.pixelOffset = timeScale.pixelOffset - timeScale.deltaPixel;   
        timeScale.startDate = new Date(timeScale.startDate.getTime() - timeScale.deltaSecond * 1000);
    }
    if(timeScale.pixelOffset < -timeScale.deltaPixel){
        timeScale.pixelOffset = timeScale.pixelOffset + timeScale.deltaPixel;
        timeScale.startDate = new Date(timeScale.startDate.getTime() + timeScale.deltaSecond * 1000);
    }
    return timeScale
}

export function normalizeDataScale(dataScale: DataScale){
    // if(dataScale.deltaPixel > 2 * dataScale.baseDeltaPixel){
    //     dataScale.deltaValue = dataScale.deltaValue * dataScale.baseDeltaPixel / dataScale.deltaPixel;
    //     dataScale.deltaPixel = dataScale.baseDeltaPixel;
    // }
    // if(dataScale.deltaPixel < dataScale.baseDeltaPixel / 2){
    //     dataScale.deltaPixel = dataScale.baseDeltaPixel;
    //     dataScale.deltaValue = dataScale.deltaValue * dataScale.baseDeltaPixel / dataScale.deltaPixel;
    // }
    if(dataScale.pixelOffset > dataScale.deltaPixel){
        dataScale.pixelOffset = dataScale.pixelOffset - dataScale.deltaPixel;   
        dataScale.startValue = dataScale.startValue - dataScale.deltaValue;
    }
    if(dataScale.pixelOffset < -dataScale.deltaPixel){
        dataScale.pixelOffset = dataScale.pixelOffset + dataScale.deltaPixel;  
        dataScale.startValue = dataScale.startValue + dataScale.deltaValue;
    }
    return dataScale
}
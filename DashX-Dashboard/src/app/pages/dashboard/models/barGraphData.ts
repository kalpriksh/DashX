export interface BarGraphData {
  series : SeriesData[],
  xaxis : {
    categories : string[]
  }
}

interface SeriesData{
  name : string,
  data : number[]
}
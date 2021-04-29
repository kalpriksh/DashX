export interface LineChartData {
  series : SeriesData[],
  xaxis : {
    categories : string[]
  }
}

interface SeriesData{
  name : string,
  data : number[]
}
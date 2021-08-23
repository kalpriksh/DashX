export interface InputForOptionSelector{
  
  chart : {
    height : number
  },

  grid : {
    xaxis : {
      lines : {
        show: boolean
      }
    },
    yaxis : {
      lines : {
        show: boolean
      }
    }
  },

  stroke : {
    show : boolean,
    width : number
  },

  dataLabels : {
    enabled : boolean
  }

}
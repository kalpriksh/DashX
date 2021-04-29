import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChartContainerService {

  constructor() { }

  /**
   * bound service's DeleteChart function to chartContainer's DeleteChart() method
   */
  DeleteChart : (chartID) => void;

  DeleteSelectedChart(DeleteChartFunction : (chartID) => void)
  {
    this.DeleteChart = DeleteChartFunction;
  }

}

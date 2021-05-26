export interface SeriesData{
  name?: string;
  type?: string;
  color?: string;
  data: (number | null)[] | {
      x: any;
      y: any;
      fillColor?: string;
      strokeColor?: string;
  }[] | [number, number | null][] | [number, (number | null)[]][];
}
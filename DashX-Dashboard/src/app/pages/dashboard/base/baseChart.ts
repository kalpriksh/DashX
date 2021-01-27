//this abstract class should be inherited by all the chart classes
export abstract class  BaseChart{

    // ctor
    constructor(){}

    // to get the defaults for the chart
    GetDefaults(){}

    // to check if data is complete wrt to the chart being used
    DataComplete(){}

}
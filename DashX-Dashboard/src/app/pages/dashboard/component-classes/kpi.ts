/**
 * class for KPI component
 */
export class KPI {

    //#region properties
    
    private _metricQuantity : string;
    public get metricQuantity() : string {
        return this._metricQuantity;
    }

    private _metricName : string;
    public get metricName() : string {
        return this._metricName;
    }

    private _metricIcon : string;
    public get metricIcon() : string {
        return this._metricIcon;
    }

    //#endregion

    constructor(metricName : string, metricQuantity : string, metricIcon :string) {
        this._metricName = metricName;
        this._metricQuantity = metricQuantity;
        this._metricIcon = metricIcon;
    }
}
export interface IHour {
    time: string,
    time_epoch: number,
    temp_f: string;
    condition: ICondition
}

export interface IForecastDay {
    hour: IHour[]
}

export interface ICondition {
    text: string,
    icon: string,
    code: number
}

export interface IWeather {
    location: { name: string }
    current: { temp_f: number, condition: ICondition }
    forecast: { forecastday: IForecastDay[] }
}
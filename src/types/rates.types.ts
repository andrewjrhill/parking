export interface HourlyRate {
    amount: number
    hour: number
}

interface Rates {
    hourly: HourlyRate[]
    remaining: number
}

export default Rates

export const SafeRoundNumber = (x : number, multiplier: number) => {
return Math.round(x * multiplier * 100) / 100
}
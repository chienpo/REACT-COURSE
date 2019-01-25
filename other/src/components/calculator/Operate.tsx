import Big from 'big.js'

export default function operate(numberOne: string, numberTwo: string, operation: string) {
    const one = Big(numberOne || '0')
    const two = Big(numberTwo || '0')

    if (operation === '+') {
        return one.plus(two).toString();
    }
    if (operation === '-') {
        return one.minus(two).toString();
    }
    if (operation === "*") {
        return one.times(two).toString();
    }
    if (operation === "/") {
        return one.div(two).toString();
    }
    throw Error(`Unknown operation '${operation}'`);
}

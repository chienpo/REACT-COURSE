export const NUMBERS = 'NUMBERS';

interface IButtonClick { type: any, payload: { buttonName: any }}

export function buttonClick(buttonName: any): IButtonClick {
  return {
    type: NUMBERS,
    payload: {
      buttonName
    }
  }
}

export default buttonClick

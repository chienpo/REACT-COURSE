export const NUMBERS = 'NUMBERS';

interface IButtonClick { type: string, payload: { buttonName: string }}

export function buttonClick(buttonName: string): IButtonClick {
  return {
    type: NUMBERS,
    payload: {
      buttonName
    }
  }
}

export default buttonClick

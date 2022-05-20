import { gQuery } from "../utils/gQuery"

export const replaceMinDate = () => {
  const month = new Date().getMonth() + 1
  let monthConvert = month < 10
    ? '0' + month
    : '' + month

  let dateArray = [new Date().getFullYear(), monthConvert];
  
  gQuery('.input-card-js[name="date-card"]').setAttribute('min', dateArray.join('-'))
}
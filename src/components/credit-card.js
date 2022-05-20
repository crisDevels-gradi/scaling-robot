import { gQuery } from "../utils/gQuery";

export function onChangeInput(input, callback) {
  return gQuery(input).addEventListener(
    'input',
    function () {
      callback(this)
    }
  )
}

const replaceText = (el, value) => {
  return {
    id: el.getAttribute('name'),
    callback: (id) => gQuery('#' + id).innerText = value
  }
}

export const onNumberCard = (el) => {
  let { id, callback } = replaceText(el, stringConvert(el.value).join(''))
  
  if (stringConvert(el.value).length <= 16) {
    callback(id);
  } else {
    el.value = el.value.slice(0, 16);
  }
}

export const onNameCard = (el) => {
  let { id, callback } = replaceText(el, el.value)
  return callback(id);
}

export const onDateCard = (el) => {
  let dateCard = el.value.split('-');
  let arrayDate = [dateCard[1], dateCard[0].substr(2, 3)];

  let { id, callback } = replaceText(el, arrayDate.join(' / '));
  callback(id);
}

const stringConvert = (str) => (
  Array.from(str, (elem, i) => (
    isMultipleFour(i + 1)
      ? elem + " "
      : elem
  ))
)

const isMultipleFour = (n) => n % 4 === 0;
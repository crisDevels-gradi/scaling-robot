import { dataActive } from "../utils/data-active"
import { gQAll, gQuery } from "../utils/gQuery"

export function openAccordion(accordions = 'accordion-js') {
  gQAll(accordions).forEach(acc => {
    gQuery('button', acc).addEventListener(
      'click',
      () => dataActive(gQuery('div', acc)) 
    )
  })
}
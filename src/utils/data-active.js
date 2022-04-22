import { createOverlay } from "../components/data-active-toggle";

/**
* Data Active
*
* @param {HTMLElement} node - Node to manipulate
* @param {Boolean} overlay - if used to a overlay
*/
export function dataActive(node, overlay) {
  const { dataset, id } = node;
  const active = isActive(dataset);

  if (active) {
    dataset.active = "false";
  } else {
    dataset.active = "true";
  }

  overlay && createOverlay(id, active, node);
}

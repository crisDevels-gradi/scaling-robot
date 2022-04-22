import { dataActive } from "../utils/data-active";
import { gQuery } from "../utils/gQuery";

/**
 * To validate state in dataset node
 */
const isActive = ({ active }) => active === "true";

/**
 * Data Active toggle
 *
 * @param {String} control - ID button
 * @param {String} node - ID modal
 * @param {Object} config - Object with overlay, closeSelector
 */
export function dataActiveToggle(control, node, config = {}) {
  const { overlay, closeSelector } = config;

  gQuery(control).addEventListener("click", function () {
    dataActive(gQuery(node), overlay);
  });

  gQuery(closeSelector).addEventListener("click", function () {
    dataActive(gQuery(node), overlay);
  });
}

/**
 *
 * @param {String} id - ID from node manipulate
 * @param {Boolean} active - If modal active
 * @param {HTMLElement} node - Node to manipulate
 */
export function createOverlay(id, active, node) {
  const idOverlay = `overlay--gQuery{id}`;
  const parent = node.parentNode;

  if (!active) {
    const overlay = document.createElement("div");

    overlay.setAttribute("id", idOverlay);
    overlay.classList.add("overlay");

    parent.insertBefore(overlay, node);
    dataActiveToggle("#" + idOverlay, "#" + id, { overlay: true });
  } else {
    parent.removeChild(gQuery("#" + idOverlay));
  }
}

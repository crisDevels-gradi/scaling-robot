/**
 * gQuery
 * Function to get nodes in HTML
 * 
 * @param {String} node - ID from HTMLElement
 * @param {HTMLElement} parent - HTMLElement
 * 
 * @returns {HTMLElement} - Element in HTML
 */
export const gQuery = (node, parent) =>
  (parent ? parent : document).querySelector(node);

  /**
 * gQuery
 * Function to get nodes in HTML
 * 
 * @param {String} node - Reference from HTMLElement
 * @param {HTMLElement} parent - HTMLElement
 * 
 * @returns {Array} - ClassList
 */
export const gQAll = (node, parent) =>
[...(parent ? parent : document).querySelectorAll(node)];
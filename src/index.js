import { dataActiveToggle } from "./components/data-active-toggle";
import "./scss/main.scss";

dataActiveToggle("#open-modal", "#modal-info", {
  overlay: true,
  closeSelector: "#close-modal",
});

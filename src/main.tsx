import { hydrateRoot, createRoot } from "react-dom/client";
import App from "./App";
import "./style.css";
import "./ui.css";
import { base } from "./components/Media";
import { initMotion } from "./motion";
const path =
  decodeURI(location.pathname)
    .replace(new RegExp("^" + base.replace(/\/$/, "")), "")
    .replace(/\/$/, "") || "/";
const root = document.getElementById("root")!;
if (root.hasChildNodes()) hydrateRoot(root, <App path={path} />);
else createRoot(root).render(<App path={path} />);
setTimeout(initMotion, 0);

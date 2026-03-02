import { createRoot } from "react-dom/client";
import App from "./app/App";
import PrivacyPolicy from "./app/PrivacyPolicy";
import "./styles/index.css";

const pathname = window.location.pathname.replace(/\/+$/, "") || "/";
const Root = pathname === "/privacy-policy" ? PrivacyPolicy : App;

createRoot(document.getElementById("root")!).render(<Root />);
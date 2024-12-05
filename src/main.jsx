import React from "react";
import ReactDOM from "react-dom/client";

// Import all your CSS files here
import "./styles/globals.css";
import "./styles/animation.css";
import "./styles/scrollbar.css";
import "./styles/markdown.css";
import "./styles/toastvg.css";

import App from "./app";  // Import the App component
import { GPRMProvider } from "./components/mobx/GPRMcontext"; // Import context if needed

// Example of pageProps data to pass to the App component
const pageProps = {
  title: "Welcome to My App",
  user: { name: "John Doe" },
};

// Create the root and render the app
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GPRMProvider>
    <App pageProps={pageProps} />
  </GPRMProvider>
);

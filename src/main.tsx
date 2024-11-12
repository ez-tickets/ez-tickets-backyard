import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Backyard from "./Backyard.tsx";

// biome-ignore lint: @typescript-eslint/no-nom-null-assertion
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Backyard />
  </StrictMode>,
);

import React from "react";
import { RouterProvider } from "react-router-dom";
// import ThemeWrapper from "./ThemeWrapper";
import { router } from "./Routes";

window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;

function App(props) {
  return (
//     <ThemeWrapper>
      <div>
        <RouterProvider router={router} />
      </div>
//     </ThemeWrapper>
  );
}
export default App;

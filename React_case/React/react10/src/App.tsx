import React, { lazy, Suspense } from "react";

// Lazy loading (code splitting)
const Admin = lazy(() => import("./pages/Admin"));

function App() {
  return (
    <div>
      <h1>ShopEase App</h1>

      <Suspense fallback={<p>Loading Admin Page...</p>}>
        <Admin />
      </Suspense>
    </div>
  );
}

export default App;

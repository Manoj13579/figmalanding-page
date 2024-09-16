import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import NotFound from "./Components/NotFound";
import Layout from "./Components/Layout";

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path="/" element={<Layout />}>
      </ Route>
      <Route path="*" element={<NotFound />} />
      </>
    ))
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App;

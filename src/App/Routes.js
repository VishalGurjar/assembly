import { Navigate } from "react-router-dom";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  defer,
} from "react-router-dom";
import {
  Login,
  Register,
  ResetPassword,
  NotFound,
  ResetPasswordSend,
} from "../App/pageListAsync";

import DashboardPage from "../components/Dashboard";
// import { AuthLayout } from "./Layout";
// import DashboardMaped from "../Templates/Dashboard";
// import Configuration from "../Templates/Configuration";
// import history from "src/utils/history";

const getUserData = () =>
  new Promise((resolve) =>
    setTimeout(() => {
      const user = window.localStorage.getItem("token");
      resolve(user);
    }, 3000)
  );

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* <Route
        element={<AuthLayout />}
        loader={() => defer({ userPromise: getUserData() })}
      > */}
        {/* Auth Routes : when user is not logged in */}
        {/* <Route element={<Auth />}>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset-password" element={<ResetPassword />} />
        </Route> */}
        {/* App Routes : when user is logged in*/}
        {/* <Route path="/app" element={<DashboardMaped history={history} />}> */}
          <Route index element={<DashboardPage />} />
        {/* </Route> */}
        {/* global routes */}
        {/* <Route path="404" element={<NotFound />} /> */}
        
        {/* <Route path="user/password" element={<ResetPasswordSend />} /> */}
        <Route path="*" element={<Navigate to="/404" replace />} />
      {/* </Route> */}
    </>
  )
);

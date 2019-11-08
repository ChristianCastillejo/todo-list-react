import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
// import cookie from "react-cookies";
import Loading from "./components/loading";
import store from "./helpers/store";
const Menu = lazy(() => import("./components/menu"));
const Home = lazy(() => import("./screens/home"));
// const Login = lazy(() => import("./screens/login"));

// function isAuthenticated() {
//   const accessToken = cookie.load("jwt");
//   console.log("asdasd");
//   return accessToken ? true : false;
// }

// const ProtectedRoute = ({ component: Component, ...rest }) => (
//   <Route
//     {...rest}
//     render={props =>
//       isAuthenticated() ? (
//         <Component {...props} />
//       ) : (
//         <Redirect
//           to={{
//             pathname: "/login",
//             state: { from: props.location }
//           }}
//         />
//       )
//     }
//   />
// );

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Provider store={store}>
        <Router basename={process.env.PUBLIC_URL}>
          <Menu />
          <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route exact path="/login" component={Login} /> */}
          </Switch>
        </Router>
      </Provider>
    </Suspense>
  );
}

export default App;

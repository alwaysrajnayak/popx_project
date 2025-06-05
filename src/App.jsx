import { Routes, Route } from "react-router-dom";

import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Welcome from "./components/Welcome";
import Account from "./components/Account";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Welcome />} /> // Home Route
        <Route path="/welcome" element={<Welcome />} /> // Welcome Route
        <Route path="/signin" element={<SignIn />} /> // SignIn Route
        <Route path="/account" element={<Account />} /> // Account Route
        <Route path="/signup" element={<SignUp />} /> // SignUp Route
      </Routes>
    </div>
  );
};

export default App;

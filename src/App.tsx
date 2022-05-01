import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./Components/NavBar/index";
import { QueryClient, QueryClientProvider } from "react-query";
import Vehicle from "./pages/Vehicle";

 const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vehicle" element={<Vehicle />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

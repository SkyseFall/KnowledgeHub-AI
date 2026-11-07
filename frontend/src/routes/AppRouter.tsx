import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import SystemDashboard from "../features/system/SystemDashboard";
import AppLayout from "../layouts/AppLayout";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<SystemDashboard />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;

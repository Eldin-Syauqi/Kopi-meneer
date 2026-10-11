import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import ProtectedRoute from "@/routes/ProtectedRoute";

const Home = lazy(() => import("@/pages/Home"));
const About = lazy(() => import("@/pages/About"));
const Services = lazy(() => import("@/pages/Services"));
const Teams = lazy(() => import("@/pages/Teams"));
const BlogList = lazy(() => import("@/pages/BlogList"));
const BlogDetail = lazy(() => import("@/pages/BlogDetail"));
const CreateBlog = lazy(() => import("@/pages/CreateBlog"));
const Login = lazy(() => import("@/pages/Login"));
const NotFound = lazy(() => import("@/pages/NotFound"));

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="teams" element={<Teams />} />
        <Route path="blog" element={<BlogList />} />
        <Route path="blog/:id" element={<BlogDetail />} />
        <Route path="login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="blog/create" element={<CreateBlog />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

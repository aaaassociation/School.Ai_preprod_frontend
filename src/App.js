import React, { useState, useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./context/PrivateRoute";
import HomeTwo from "./Components/Home/HomeTwo";
import AboutOne from "./Components/Pages/AboutOne";
import BLogStandard from "./Components/Pages/BLogStandard";
import ContactUs from "./Components/Pages/ContactUs";
import Courses from "./Components/Pages/Courses";
import ErrorPage from "./Components/Pages/404Page";
import RegisterPage from "./Components/Auth/Register";
import LoginPage from "./Components/Auth/Login";
import AITeacherInputPage from "./Components/Courses/AITeacherInputPage";
import CourseOutlinePage from "./Components/Courses/CourseOutlinePage";
import FinalViewPage from "./Components/Courses/FinalViewPage";
import CourseContentPage from "./Components/Courses/CourseContentPage";
import ExamPage from "./Components/Courses/ExamPage";
import GenerateVideoCourse from "./Components/Courses/GenerateVideoCourse";
import ViewHistoryCoursePage from './Components/Courses/ViewHistoryCoursePage';
import Pricing from './Components/Pages/Pricing';
import StripeContext from './context/StripeContext';
import Success from './Components/Pages/Success';

function App() {
  const [prompt, setPrompt] = useState("");
  const [chapters, setChapters] = useState(null);
  const [content, setContent] = useState({});
  const [examDetails, setExamDetails] = useState(null);
  const [userId, setUserId] = useState("");

  useEffect(() => {
    console.log("App component rendered");
  }, []);

  return (
    <AuthProvider>
      <StripeContext>
      <BrowserRouter>
        <div className="font-gilroy font-medium text-gray text-lg leading-[27px]">
          <Routes>
            <Route path="/" element={<Navigate to={"/schoolai/home"} />} />
            <Route path="/schoolai/register" element={<RegisterPage />} />
            <Route path="/schoolai/login" element={<LoginPage />} />
            <Route path="/schoolai/home" element={<HomeTwo />} />
            <Route path="/schoolai/" element={<HomeTwo />} />
            <Route path="/schoolai/about" element={<AboutOne />} />
            <Route path="/schoolai/courses" element={<PrivateRoute element={<Courses />} />} />
            <Route path="/schoolai/pricing" element={<PrivateRoute element={<Pricing />} />} />
            <Route path="/success" element={<PrivateRoute element={<Success />} />} />
            <Route path="/schoolai/new-course" element={<PrivateRoute element={<AITeacherInputPage setPrompt={setPrompt} userId={userId} />} />} />
            <Route path="/schoolai/courseoutline" element={<PrivateRoute element={<CourseOutlinePage prompt={prompt} setChapters={setChapters} />} />} />
            <Route path="/schoolai/finalview" element={<PrivateRoute element={<FinalViewPage prompt={prompt} chapters={chapters} content={content} setContent={setContent} />} />} />
            <Route path="/schoolai/coursecontent" element={<PrivateRoute element={<CourseContentPage prompt={prompt} chapters={chapters} content={content} />} />} />
            <Route path="/schoolai/viewhistorycourse/:courseTitle" element={<PrivateRoute element={<ViewHistoryCoursePage />} />} />
            <Route path="/schoolai/exam" element={<PrivateRoute element={<ExamPage {...examDetails} prompt={prompt} />} />} />
            <Route path="/schoolai/generatevideo" element={<PrivateRoute element={<GenerateVideoCourse />} />} />
            <Route path="/schoolai/blog-standard" element={<BLogStandard />} />
            <Route path="/schoolai/contacts" element={<ContactUs />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
      </BrowserRouter>
      </StripeContext>
    </AuthProvider>
  );
}

export default App;

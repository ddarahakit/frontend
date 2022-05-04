import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main/Main";
import CourseDetail from "./pages/Course/CourseDetail";
import CourseListMain from "./pages/CourseList/CourseListMain";
import TopicMain from "./pages/Topic/TopicMain";
import LoginMain from "./pages/User/LoginMain";
import SignupMain from "./pages/User/SignupMain";
import ClassRoom from "./pages/ClassRoom/ClassRoom";
import Payment from "./pages/Payment/Payment";

class Routing extends React.Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/classroom" element={<ClassRoom />} />
          <Route path="/courses/:school" element={<CourseListMain />} />
          <Route path="/course/:idx" element={<TopicMain />} />

          <Route path="/login" element={<LoginMain />} />
          <Route path="/signup" element={<SignupMain />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </Router>
    );
  }
}

export default Routing;

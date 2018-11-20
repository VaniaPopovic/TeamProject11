// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
// import ContentPaste from "@material-ui/icons/ContentPaste";
// core components/views
import DashboardPage from "views/Dashboard/Dashboard.jsx";


const dashboardRoutes = [
  {
    path: "/wordfind",
    sidebarName: "WordFind",
    navbarName: "WordFind",
    icon: Dashboard,
    component: DashboardPage
  },
  {
    path: "/wordsearch",
    sidebarName: "Word Search",
    navbarName: "Word Search",
    icon: Dashboard,
    component: DashboardPage
  }
];

export default dashboardRoutes;

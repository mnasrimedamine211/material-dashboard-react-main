/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/



// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Footer from "examples/Footer";
// Dashboard components
import BookingDashboardNav from "examples/Navbars/BookingDashboardNav";
import Condidats from "components/Condidats";
import DashboardBody from "./components/dashboardBody";

function BookingDashboard() {
  return (
    <DashboardLayout>
      <BookingDashboardNav />
      <Condidats />
      <DashboardBody />
      <Footer />
    </DashboardLayout>
  );
}

export default BookingDashboard;

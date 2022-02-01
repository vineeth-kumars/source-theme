/**
=========================================================
* Material Dashboard 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
// import MDAlert from "components/MDAlert";
import MDButton from "components/MDButton";
import MDSnackbar from "components/MDSnackbar";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

function Notifications() {
  // const [successSB, setSuccessSB] = useState(false);
  const [infoSB, setInfoSB] = useState(false);
  // const [warningSB, setWarningSB] = useState(false);
  // const [errorSB, setErrorSB] = useState(false);

  // const openSuccessSB = () => setSuccessSB(true);
  // const closeSuccessSB = () => setSuccessSB(false);
  const openInfoSB = () => setInfoSB(true);
  const closeInfoSB = () => setInfoSB(false);
  // const openWarningSB = () => setWarningSB(true);
  // const closeWarningSB = () => setWarningSB(false);
  // const openErrorSB = () => setErrorSB(true);
  // const closeErrorSB = () => setErrorSB(false);

  // const alertContent = (name) => (
  //   <MDTypography variant="body2" color="white">
  //     A simple {name} alert with{" "}
  //     <MDTypography component="a" href="#" variant="body2" fontWeight="medium" color="white">
  //       an example link
  //     </MDTypography>
  //     . Give it a click if you like.
  //   </MDTypography>
  // );

  // const renderSuccessSB = (
  //   <MDSnackbar
  //     color="success"
  //     icon="check"
  //     title="Material Dashboard"
  //     content="Hello, world! This is a notification message"
  //     dateTime="11 mins ago"
  //     open={successSB}
  //     onClose={closeSuccessSB}
  //     close={closeSuccessSB}
  //     bgWhite
  //   />
  // );

  const renderInfoSB = (
    <MDSnackbar
      icon="notifications"
      title="Material Dashboard"
      content="Hello, world! This is a notification message"
      dateTime="11 mins ago"
      open={infoSB}
      onClose={closeInfoSB}
      close={closeInfoSB}
    />
  );

  // const renderWarningSB = (
  //   <MDSnackbar
  //     color="warning"
  //     icon="star"
  //     title="Material Dashboard"
  //     content="Hello, world! This is a notification message"
  //     dateTime="11 mins ago"
  //     open={warningSB}
  //     onClose={closeWarningSB}
  //     close={closeWarningSB}
  //     bgWhite
  //   />
  // );

  // const renderErrorSB = (
  //   <MDSnackbar
  //     color="error"
  //     icon="warning"
  //     title="Material Dashboard"
  //     content="Hello, world! This is a notification message"
  //     dateTime="11 mins ago"
  //     open={errorSB}
  //     onClose={closeErrorSB}
  //     close={closeErrorSB}
  //     bgWhite
  //   />
  // );

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mt={12}>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} lg={12}>
            <Card>
              <MDBox p={2} lineHeight={0}>
                <MDTypography variant="h5">All Reports</MDTypography>
                <MDTypography variant="button" color="text" fontWeight="regular">
                  Check all the reports of your properties here
                </MDTypography>
              </MDBox>
              <MDBox p={2}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6} lg={3}>
                    <MDButton variant="gradient" color="info" onClick={openInfoSB} fullWidth>
                      transaction
                    </MDButton>
                    {renderInfoSB}
                  </Grid>

                  <Grid item xs={12} sm={6} lg={3}>
                    <MDButton variant="gradient" color="info" onClick={openInfoSB} fullWidth>
                      guest master
                    </MDButton>
                    {renderInfoSB}
                  </Grid>

                  <Grid item xs={12} sm={6} lg={3}>
                    <MDButton variant="gradient" color="info" onClick={openInfoSB} fullWidth>
                      Occupancy
                    </MDButton>
                    {renderInfoSB}
                  </Grid>

                  <Grid item xs={12} sm={6} lg={3}>
                    <MDButton variant="gradient" color="info" onClick={openInfoSB} fullWidth>
                      Notices
                    </MDButton>
                    {renderInfoSB}
                  </Grid>
                </Grid>
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Notifications;

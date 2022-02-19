import React, { useState, useEffect } from "react";
import { Steps, StepsProvider, useSteps } from "react-step-builder";
import { useNavigate } from "react-router-dom";
import Personal from "./Personal";
import Disability from "./Disability";
import JobSpecifics from "./Job_Specifics";
import Step4 from "./Step4";

function CompanyRegister() {
  const [companyDetails, setCompanyDetails] = useState({});
  let history = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("auth-token")) {
      history("/recruitnow", { replace: true });
    }
  }, []);

  return (
    <StepsProvider>
      <RegisterSteps
        companyDetails={companyDetails}
        setCompanyDetails={setCompanyDetails}
      />
    </StepsProvider>
  );
}

function RegisterSteps({ companyDetails, setCompanyDetails }) {
  // const { prev, next, jump, total, current, progress } = useSteps();
  return (
    <div className="Register">
      <Steps>
        <Personal
          companyDetails={companyDetails}
          setCompanyDetails={setCompanyDetails}
        />
        {/* Comapny Name
                Current Company Head
                Company password
                Phone no
                Email
                Website(nr)
                GSTIN */}
        <JobSpecifics />
        {/* Job Title
                Salary
                Sector
                Location(nr)
                Job type
                Disability
                Qualification */}
        <Step4 />
      </Steps>
    </div>
  );
}

export default CompanyRegister;

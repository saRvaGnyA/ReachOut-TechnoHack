import React from "react";
import { Steps, StepsProvider, useSteps } from "react-step-builder";
import Personal from "./Personal";
import Disability from "./Disability";
import JobSpecifics from "./Job_Specifics";
import Step4 from "./Step4";

function CompanyRegister() {
  return (
    <StepsProvider>
      <RegisterSteps />
    </StepsProvider>
  );
}

function RegisterSteps() {
  // const { prev, next, jump, total, current, progress } = useSteps();
  return (
    <div className="Register">
      <Steps>
        <Personal />
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

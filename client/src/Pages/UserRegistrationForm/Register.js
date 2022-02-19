import React, { useEffect, useState } from "react";
import { Steps, StepsProvider } from "react-step-builder";
import { useNavigate } from "react-router-dom";
import Personal from "./Personal";
import Disability from "./Disability";
import JobSpecifics from "./Job_Specifics";
import Step4 from "./Jobs";

function Register() {
  const [userDetails, setUserDetails] = useState({});
  let history = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("auth-token")) {
      history("/jobs", { replace: true });
    }
  }, []);

  return (
    <StepsProvider>
      <RegisterSteps
        userDetails={userDetails}
        setUserDetails={setUserDetails}
      />
    </StepsProvider>
  );
}

function RegisterSteps({ userDetails, setUserDetails }) {
  // const { prev, next, jump, total, current, progress } = useSteps();
  return (
    <div className="Register">
      <Steps>
        <Personal userDetails={userDetails} setUserDetails={setUserDetails} />
        {/*First Name
                    Last Name
                    Aadhar
                    Email
                    Mobile 
                    Age
                    preferred place of work*/}
        <Disability userDetails={userDetails} setUserDetails={setUserDetails} />
        {/*Mental/Physical
                    Disability
                    Severity(Slider)
                    Job preference - Part-Time/Free-Time/FreeLance
                    */}
        <JobSpecifics
          userDetails={userDetails}
          setUserDetails={setUserDetails}
        />
        {/*Job Type - Part-Time Job / Candidate for testing(Checkbox)
                    Qualifications - less than 10 / 10+2 / Degree 
                    Sector
                    */}
        <Step4 userDetails={userDetails} setUserDetails={setUserDetails} />
      </Steps>
      {/* <div className="navigation">
                <button onClick={prev}>Prev</button>
                <button onClick={next}>Next</button>
            </div> */}
    </div>
  );
}

export default Register;

import React from "react";
import { Steps, StepsProvider, useSteps } from "react-step-builder";
import Personal from "./Personal";
import Disability from "./Disability";
import JobSpecifics from "./Job_Specifics";
import Step4 from "./Step4";

function Register(){
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
                {/*First Name
                    Last Name
                    Aadhar
                    Email
                    Mobile 
                    Age
                    preferred place of work*/}
                <Disability />
                {/*Mental/Physical
                    Disability
                    Severity(Slider)
                    Job preference - Part-Time/Free-Time/FreeLance
                    */}
                <JobSpecifics />
                {/*Job Type - Part-Time Job / Candidate for testing(Checkbox)
                    Qualifications - less than 10 / 10+2 / Degree 
                    Sector
                    */}
                <Step4 />

            </Steps>
            {/* <div className="navigation">
                <button onClick={prev}>Prev</button>
                <button onClick={next}>Next</button>
            </div> */}
        </div>
    );
}



export default Register;
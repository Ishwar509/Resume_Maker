import  PersonalForm  from "./InfoComponents/Personal/PersonalForm";
import { EducationDetails } from "./InfoComponents/Education/Education";
import { ProfessionalDetails } from "./InfoComponents/Professional/Professional";

export default function Editor({ resumeInfo, dispatch }){
    return (
        <div className="px-4">
            <PersonalForm personalInfo={resumeInfo.personalInfo} dispatch={dispatch}></PersonalForm>
            <EducationDetails list={resumeInfo.educationInfoList} dispatch={dispatch}></EducationDetails>
            <ProfessionalDetails list={resumeInfo.professionalInfoList} dispatch={dispatch}></ProfessionalDetails>
        </div>
    )   
}
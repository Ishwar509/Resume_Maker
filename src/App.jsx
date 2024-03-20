import { useImmerReducer } from "use-immer";
import Resume from "./ResumeViewComponents/Resume.jsx";
import Editor from "./EditorComponents/Editor.jsx";
import { QualificationInfo} from './data/classes.js';
import { dummyData } from "./data/dummyData.js";

function reducer(draft, action){
    switch(action.type){
        case 'personalDataChanged': {
            draft.personalInfo[action.field] = action.value;
            break;
        }
        case 'educationDataChanged': {
            const item = draft.educationInfoList.find((item) => item.id === action.id);
            item[action.field] = action.value;
            break;
        }
        case 'educationDeleted': {
            const index = draft.educationInfoList.findIndex((item) => item.id === action.id);
            draft.educationInfoList.splice(index, 1);
            break;
        }
        case 'educationAdded': {
            draft.educationInfoList.push(new QualificationInfo());
            break;
        }
        case 'professionalDataChanged': {
            const item = draft.professionalInfoList.find((item) => item.id === action.id);
            item[action.field] = action.value;
            break;
        }
        case 'professionalDeleted': {
            const index = draft.professionalInfoList.findIndex((item) => item.id === action.id);
            draft.professionalInfoList.splice(index, 1);
            break;
        }
        case 'professionalAdded': {
            draft.professionalInfoList.push(new QualificationInfo());
            break;
        }
        default: {
            throw(new Error('unwanted event'));
        }       
    }
}

export default function App(){
    const [resumeInfo, dispatch] = useImmerReducer(reducer, dummyData);

    return (
        <div className="grid grid-cols-[2fr_3fr]">
            <Editor resumeInfo={resumeInfo} dispatch={dispatch}></Editor>
            <Resume resumeInfo={resumeInfo}></Resume>
        </div>
    )
}
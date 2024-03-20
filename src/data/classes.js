import { immerable } from "immer";
import {v4 as uuidv4} from 'uuid';

class QualificationInfo {
    constructor(qualification="", organization="", startDate="", endDate="", description=""){
        this.qualification = qualification;
        this.organization = organization;
        this.startDate = startDate;
        this.endDate = endDate;
        this.description = description;
        this[immerable] = true;
        this.id = uuidv4();
    }
}

class PersonalInfo {
    constructor(firstName="", lastName="", email="", address=""){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.address = address;
        this[immerable] = true;
    }
}

class ResumeInfo {
    constructor(){
        this.personalInfo = new PersonalInfo();
        this.educationInfoList = [];
        this.professionalInfoList = [];
        this[immerable] = true;
    }
}

export { PersonalInfo, ResumeInfo, QualificationInfo};
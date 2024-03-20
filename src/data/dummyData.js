import { ResumeInfo, PersonalInfo, QualificationInfo } from "./classes.js";

const personalInfo = new PersonalInfo("John", "Doe", "john.doe@example.com", "123 Main St, DC, USA")
const education = [
    new QualificationInfo("Bachelor in Computer Science", "University of XYZ", "September 2016", "June 2020", "Studied various computer science topics including algorithms and data structures."),
    new QualificationInfo("Master of Business Administration", "ABC Business School", "January 2021", "December 2023", "Specialized in marketing and finance."),
    new QualificationInfo("Certified Scrum Master", "Scrum Alliance", "May 2019", "May 2020", "Completed training and exam to become a Certified Scrum Master."),
]
const employmentHistory = [
    new QualificationInfo("Software Engineer", "Tech Company XYZ", "March 2018", "May 2022", "Worked on developing web applications using various technologies."),
    new QualificationInfo("Project Manager", "ABC Consulting Firm", "October 2020", "June 2021", "Managed multiple projects and teams to deliver successful outcomes."),
    new QualificationInfo("Intern", "Startup ABC", "June 2017", "August 2017", "Assisted with various tasks including software testing and documentation.")
];

const dummyData = new ResumeInfo();

dummyData.personalInfo = personalInfo;
dummyData.educationInfoList = education;
dummyData.professionalInfoList = employmentHistory;

export { dummyData };
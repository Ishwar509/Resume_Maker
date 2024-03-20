
function PersonalInfo({personalInfo}){
    const {firstName, lastName, email, address} = personalInfo;
    return (
        <section className="grid grid-rows-2 justify-items-center items-center">
            <div className="text-3xl first-letter:text-6xl font-semibold text-blue-800">{firstName} {lastName}</div>
            <div>
                <span className="mx-2">{email}</span>
                <span className="max-2">{address}</span>
            </div>
        </section>
    )
}

function ListItem({item}){
    const {qualification, organization, startDate, endDate, description} = item;
    return (
        <li className="my-2 list-disc">
            <p className="text-lg font-normal">{qualification} at {organization}</p>
            <p className="font-light text-slate-500">{startDate} - {endDate}</p>
            <p className="pl-2">{description}</p>
        </li>
    )
}

function InfoSection({title, list}){
    if(list.length === 0) return null;

    return (
        <section>
            <h2 className="text-xl font-bold font-mono">{title}</h2>
            <ul className="pl-3">
                {list.map((item) => <ListItem key={item.id} item={item}></ListItem>)}
            </ul>
        </section>
    )
}

export default function Resume({resumeInfo}){
    return (
        <div className="p-5 border-2 border-slate-800 m-2 bg-slate-50">
            <PersonalInfo personalInfo={resumeInfo.personalInfo}></PersonalInfo>
            <hr className="my-2 border-black" />
            <InfoSection key={"Employment"} title={"Employment History"} list={resumeInfo.professionalInfoList}></InfoSection>
            <hr className="my-2" />
            <InfoSection key={"Education"} title={"Education"} list={resumeInfo.educationInfoList}></InfoSection>
        </div>
        
    )
}
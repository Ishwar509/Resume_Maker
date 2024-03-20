import { Form, TextArea } from "../../FormComponents/Form";
import { Details } from "../../ListComponents/ListComponent";

function ProfessionalForm({data, dispatch}){
    const {qualification, organization, startDate, endDate, description} = data;
    const fields = [
        {title: "Job", id:"qualification", value: qualification, onChange: handleDataChange},
        {title: "Company", id:"organization", value: organization, onChange: handleDataChange},
        {title: "Start Date", id:"startDate", value: startDate, onChange: handleDataChange},
        {title: "End Date", id:"endDate", value: endDate, onChange: handleDataChange},
    ]

    function handleDataChange(e){
        dispatch({
            type: 'professionalDataChanged',
            id: data.id,
            field: e.target.id,
            value: e.target.value
        });
    }

    return (
        <div className="col-span-2">
            <Form fields={fields}></Form>
            <TextArea title={"Description"} id={"description"} value={description} onChange={handleDataChange}></TextArea>
        </div>
    );
}

function ProfessionalDetails({list, dispatch}){
    return (
        <Details type={"Professional"} list={list} dispatch={dispatch} FormComponent={ProfessionalForm}></Details>
    )
}

export { ProfessionalDetails }

import { Details } from "../../ListComponents/ListComponent";
import { Form, TextArea } from "../../FormComponents/Form";

function EducationForm({data, dispatch }){
    const {qualification, organization, startDate, endDate, description} = data;
    const fields = [
        {title: "Degree", id:"qualification", value: qualification, onChange: handleDataChange},
        {title: "School", id:"organization", value: organization, onChange: handleDataChange},
        {title: "Start Date", id:"startDate", value: startDate, onChange: handleDataChange},
        {title: "End Date", id:"endDate", value: endDate, onChange: handleDataChange},
    ]

    function handleDataChange(e){
        dispatch({
            type: 'educationDataChanged',
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

function EducationDetails({list, dispatch}){
    return (
        <Details type={"Education"} list={list} dispatch={dispatch} FormComponent={EducationForm}></Details>
    )
}

export {EducationDetails};
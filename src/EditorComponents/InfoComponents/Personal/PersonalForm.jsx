import { Form } from "../../FormComponents/Form";

export default function PersonalForm({ personalInfo, dispatch }){
    const {firstName, lastName, email, address} = personalInfo;
    const fields = [
        {title: "First Name", id: "firstName", value: firstName, onChange: handleDataChange},
        {title: "Last Name", id: "lastName", value: lastName, onChange: handleDataChange},
        {type: "email", title: "Email", id: "email", value: email, onChange: handleDataChange},
        {title: "Address", id: "address", value: address, onChange: handleDataChange},
    ];

    function handleDataChange(e){
        dispatch({
            type: 'personalDataChanged',
            field: e.target.id,
            value: e.target.value
        })
    }

    return (
        <section className="mb-4">
            <h2 className="text-xl text-black font-bold font-mono">Personal Details</h2>
            <Form fields={fields}></Form>
        </section>
    )
}
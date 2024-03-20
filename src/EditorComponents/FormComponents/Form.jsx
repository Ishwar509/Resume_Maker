function FormInput({type="text", title, id, value="", placeholder="example", onChange}){
    return (
        <div className="m-2">
            <label className="block text-sm text-gray-500 font-mono mb-2" htmlFor={id}>{title}</label>
            <input className="bg-slate-200 w-full h-12 p-4 rounded-sm focus:border-b-2 focus:border-b-blue-400 outline-0" onChange={onChange} type={type} id={id} value={value} placeholder={placeholder} />
        </div>
    )
}

function TextArea({title, id, value, onChange}){
    return (
        <div className="m-2 col-span-2">
            <label className="block text-sm text-gray-500 font-mono mb-2" htmlFor={id}>{title}</label>
            <textarea onChange={onChange} className="bg-slate-200 w-full h-24 p-4 rounded-sm focus:border-b-2 focus:border-b-blue-400 outline-0" id={id} value={value}></textarea>
        </div>
    )
}

function Form({fields}){
    return (
        <form className="grid grid-cols-2 gap-x-3" action="post">
            {fields.map((field) => <FormInput key={field.id} {...field}></FormInput>)}
        </form>
    );
}

export {Form, TextArea, FormInput};
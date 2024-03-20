import { useState } from "react";

function ListHeading({title, place, startDate, endDate}){
    return (
        <div>
            <p className="text-sm font-bold">{title} at {place}</p>
            <p className="text-sm text-gray-700">{startDate} - {endDate}</p>
        </div>
    );
}

function ListItem({ item, dispatch, formType, FormComponent }){
    const {qualification, organization, startDate, endDate} = item;
    const [isExpand, setExpand] = useState(false);

    function handleExpand(){
        setExpand(!isExpand);
    }

    function handleDeleteItem(){
        dispatch({
            type: `${formType}Deleted`,
            id: item.id
        })
    }

    return (
        <li className="grid grid-cols-[3fr_1fr] border border-gray-300 rounded-sm p-3 my-2">
            <ListHeading title={qualification} place={organization} startDate={startDate} endDate={endDate}></ListHeading>
            <div className="flex justify-evenly gap-2">
                <button onClick={handleExpand} className="border hover:bg-slate-300 rounded flex-1 border-slate-600">{isExpand ? 'Save' : 'Edit'}</button>
                <button onClick={handleDeleteItem} className="border hover:bg-red-400 rounded flex-1 border-slate-600">Delete</button>
            </div>
            {isExpand && <FormComponent data={item} dispatch={dispatch}></FormComponent>}
        </li>
    );
}

function List({ list, dispatch, formType, FormComponent }){
    const listItems = list.map((item) => <ListItem key={item.id} item={item} dispatch={dispatch} formType={formType} FormComponent={FormComponent}></ListItem>);
    return (
        <ul>
            { listItems }
        </ul>
    );
}

function Details({type, list, FormComponent, dispatch}){
    function handleAdd(){
        dispatch({
            type: `${type.toLowerCase()}Added`,
        })
    }

    return (
        <section className="mb-4">
            <h2 className="text-xl text-black font-bold font-mono">{type} Details</h2>
            <List list={list} dispatch={dispatch} formType={type.toLowerCase()} FormComponent={FormComponent}></List>
            <button onClick={handleAdd} className="text-blue-600 hover:bg-blue-100 font-mono before:content-['+'] before:text-xl"> Add {type}</button>
        </section>
    )
}

export {Details, List, ListHeading, ListItem};
import React, { useState } from 'react';

const Right = () => {
    const initialNames = {
        1: "Alice",
        2: "Bob",
        3: "Charlie",
        4: "David",
        5: "Eve",
        6: "Frank",
        7: "Grace",
        8: "Hannah",
        9: "Ivy",
        10: "Jack",
        11: "Kate",
        12: "Liam"

    };

    const [names, setNames] = useState(initialNames);
const [input, setInput] = useState('')

    const handleChange = (e, id) => {
        const updatedNames = { ...names }; // Create a copy of the names object
        updatedNames[id] = e.target.value; // Update the value at the specified ID
        setNames(updatedNames); // Update the state with the modified object
    };
        const addNew =(name)=>{
            if(name.trim().length> 1){

                const nextId = (Object.keys(names).length)+1;
                const updatedNames = {...names,[nextId]:name}
                setNames(updatedNames) 
                setInput("")
            }
        }


            return (
        <div>
            <h1 className="text-3xl text-center capitalize">Editable Names List</h1>
            <table className="w-full border-collapse border">
                <thead>
                    <tr>
                        <th className="border p-2">Name</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(names).map(([id, name]) => (
                        <tr key={id}>
                            <td className="border p-2">
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e)=>handleChange(e,id)}
                                    className="w-full outline-none"
                                />
                            </td>
                        </tr>
                    ))}
                   
                </tbody>
            </table>
            <input className='border px-2 py-2 fixed bg-black text-white top-0 right-0 ' type="text" value={input}   onChange={(e)=>setInput(e.target.value)} placeholder='type here'/>
            <button
                className="mt-4 px-4  py-2  hover:bg-slate-500  rounded-md  bg-black text-white fixed top-0 right-10"
                onClick={() => addNew(input)}
            >
                click here to add
            </button>
        </div>
    );
};

export default Right;

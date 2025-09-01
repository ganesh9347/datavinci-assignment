import React, {useState}from 'react'
import "./index.css"


const checkboxesData = [
    {
       id: 0,
         name: "Select All", 
        children: [
    {
        id: 1,
        name: "Fruits", 
        children: [
            {
                id: 2,
                name: "Citrus",  
                children: [
                    {
                        id: 3,
                        name: "Orange",
                    },
                    {
                        id: 4,
                        name: "Lemon", 
                    },
                ],
            },
            {
                id: 5,
                name: "Berries",  
                children: [
                    {
                        id: 6,
                        name: "Strawberry",
                    },
                    {
                        id: 7,
                        name: "Blueberry",
                    },
                ],
            }
        ]
    },
    {
        id: 8,
        name: "Vegetables",
        children: [
            {
                id: 9,
                name: "Leafy Greens", 
            },
            {
                id: 10,
                name: "Root Vegetables", 
            },
        ],
    },
    {
        id: 11,
        name: "Apple",
    },
] 
    }
]





const Checkboxes = ({data, checked, setChecked}) => {
    const handleChange = (isChecked, node) => {
        setChecked((prev) => {
            const newState = { ...prev, [node.id]: isChecked}; 

            const updatechildren = (node) => {
                node.children?.forEach((child) => {
                    newState[child.id] = isChecked;  
                    child.children && updatechildren(child);
                });
            }
            updatechildren(node); 


            const verifyChecked = (node) => {
                if (!node.children) return newState[node.id] || false; 

                const allChildrenChecked = node.children.every((child) => 
                    verifyChecked(child)
                ); 
            
                newState[node.id] = allChildrenChecked; 
                return allChildrenChecked; 
            } ;
            checkboxesData.forEach(node => verifyChecked(node));
            return newState;

        });
    };

    return (
        <div>
            {data.map((node) => (
                <div className="parent" key={node.id}>
                    <input type="checkbox" checked={checked[node.id] || false} onChange={ (e) => handleChange(e.target.checked,node) } /> 
                    <span>{node.name}</span>
                    {node.children && (<Checkboxes data={node.children} 
                    checked={checked} setChecked={setChecked} />)}
                </div>
            ))}
        </div>
    )
}

const Nestedcheckbox = () => {
    const [checked,setChecked] = useState({});
    return (
        <div>
           <Checkboxes checked={checked} setChecked={setChecked} data={checkboxesData} /> 
        </div>
    )
}

export default Nestedcheckbox;

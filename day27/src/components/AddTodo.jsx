

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../actions";

const AddTodo = () => {
    const [item, setItem] = useState("");
    const dispatch = useDispatch();

    return (
        <div>
            <input type="text" placeholder="Add a ToDo ... " value={item} 
            onChange={(e) =>{
                setItem(e.target.value);
            }
        }
            /> 
            <button onClick={() => {
                dispatch(addItem({
                    title:item,
                    done:false
                }));
                setItem("");
            }}>Add</button>
            {/* {item} */}
        </div>
    )
}
 export default AddTodo;

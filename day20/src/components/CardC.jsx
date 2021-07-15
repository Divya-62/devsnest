import Cards from "./Cards";

import { useState } from 'react';


const CardC = () => {
    const [data,setData] = useState([
        {name: "Pizza", calorie:"56"},
        {name: "Burger", calorie:"69"},
        {name: "Coke", calorie:"500"},
        {name: "Browne", calorie:"180"},
        {name: "Fried Rice", calorie:"90"},
        {name: "Lassania", calorie:"200"},
        {name: "Pani Puri", calorie:"10"}
    ])
    function Info(){
        if(data.length === 0)
            return <h1>No Entries !!</h1>
        else
            return <> </>
    }
    return (
        <div className="Container">
            

            <div className="CardC">
                {
                    data.map((food, index)=>(
                        <Cards key={index} name={food.name} calorie={food.calorie} data={data} setData={setData} index={index} />
                    ))
                }
                <Info />
            </div>

        </div>
    )
}

export default CardC

const Cards = ({name,calorie,data,setData,index}) => {
    return(
        <div className="Cards">
            <div>
                <h2>{name}</h2>
                You have consumed {calorie} calories today.
                <button  className="btn" onClick={()=>{
                    let newData = data.filter((el,i)=> i !== index)
                    setData(newData);
                }}>Delete</button>
            </div>
            
        </div>
    )
}

export default Cards;
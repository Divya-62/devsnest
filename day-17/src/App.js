import "./App.css";


const Item = (props) => {
    const {name, calorie} = props;
    return (
        <div className="item">
            <div className="item_name">
                {name}
            </div>
            <div className="calorie_count">
                You have consumed {calorie} Calories today.
            </div>
        </div>
    )
}



function App() {
  return (
    <div className="App">
      <div className="container">
            <Item name="Pizza" calorie="56" />
            <Item name="Burger" calorie="69" />
            <Item name="Coke" calorie="500"/>
            <Item name="Brownie" calorie="180"/>
            <Item name="Fried Rice" calorie="90"/>
            <Item name="Lassania" calorie="200"/>
            <Item name="Pani Puri" calorie="10"/>
            
           
        </div>
    </div>
  );
}

export default App;
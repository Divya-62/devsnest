
class HelloWorld extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                name:"clicked None"
            };
        }
        render() {
                return (
                    <div>
                        <button onclick={()=> this.setState({name:'clicked'})}>
                            Button{this.state.name}
                        </button>
                    </div>
                );
            }
        }
            ReactDOM.render(
                React.createElement(HelloWorld),
                document.getElementById("#root")
            )

             
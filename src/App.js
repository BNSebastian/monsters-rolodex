import { Component } from "react";
import "./App.css";

class App extends Component {
    constructor() {
        super();
        this.state = {
            monsters: [],
        };
        console.log("calling constructor");
    }

    componentDidMount() {
        console.log("component did mount");
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) =>
                this.setState(
                    () => {
                        return { monsters: data };
                    },
                    () => {
                        console.log(this.state);
                    }
                )
            );
    }

    render() {
        console.log("rendering app");
        return (
            <div className="App">
                <input />
                {this.state.monsters.map((current) => {
                    return (
                        <div key={current.id}>
                            <h1>{current.name}</h1>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default App;

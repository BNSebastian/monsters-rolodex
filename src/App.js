import React, { Component } from "react";
import "./App.css";

class App extends Component {
    constructor() {
        super();
        this.state = {
            monsters: [
                {
                    name: "mary",
                    id: "1123123",
                },
                {
                    name: "mary",
                    id: "11231321323",
                },
                {
                    name: "mary",
                    id: "11212323123",
                },
            ],
        };
    }

    render() {
        return (
            <div className="App">
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

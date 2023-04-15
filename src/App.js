import { Component } from "react";
import "./App.css";

class App extends Component {
    constructor() {
        super();
        this.state = {
            monsters: [],
            searchField: "",
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

        let filteredMonsters = this.state.monsters.filter((current) => {
            return current.name
                .toLocaleLowerCase()
                .includes(this.state.searchField);
        });

        return (
            <div className="App">
                <input
                    className="search-box"
                    type="search"
                    placeholder="search monsters"
                    onChange={(event) => {
                        let searchText = event.target.value.toLocaleLowerCase();
                        this.setState(() => {
                            return { searchField: searchText };
                        });
                    }}
                />

                {filteredMonsters.map((current) => {
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

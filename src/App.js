import { Component } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component.jsx";
import SearchBox from "./components/search-box/search-box.component";

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

    onSearchChange = (event) => {
        let searchText = event.target.value.toLocaleLowerCase();
        this.setState(() => {
            return { searchField: searchText };
        });
    };

    render() {
        console.log("rendering app");

        let filteredMonsters = this.state.monsters.filter((current) => {
            return current.name
                .toLocaleLowerCase()
                .includes(this.state.searchField);
        });

        return (
            <div className="App">
                <SearchBox
                    className="search-box"
                    placeholder="search for monster"
                    onChange={this.onSearchChange}
                />

                <CardList monsters={filteredMonsters} />
            </div>
        );
    }
}

export default App;

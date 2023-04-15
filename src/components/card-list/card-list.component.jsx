import { Component } from "react";

export default class CardList extends Component {
    render() {
        return (
            <div>
                {this.props.monsters.map((current) => {
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

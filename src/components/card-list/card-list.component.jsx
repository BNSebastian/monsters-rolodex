import { Component } from "react";

export default class CardList extends Component {
    render() {
        return (
            <div className="card-list">
                {this.props.monsters.map((current) => {
                    return (
                        <div className="card-container" key={current.id}>
                            <img
                                alt={`monster ${current.name}`}
                                src={`https://robohash.org/${current.id}?set=set4&size=180x180`}
                            />
                            <h2>{current.name}</h2>
                            <p>{current.email}</p>
                        </div>
                    );
                })}
            </div>
        );
    }
}

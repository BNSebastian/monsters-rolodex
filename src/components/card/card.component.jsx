import { Component } from "react";
import "./card.styles.css";

export default class Card extends Component {
    render() {
        // destructure this.props
        const { id, name, email } = this.props.data;
        // render
        return (
            <div className="card-container" key={id}>
                <img
                    alt={`monster ${name}`}
                    src={`https://robohash.org/${id}?set=set4&size=180x180`}
                />
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        );
    }
}

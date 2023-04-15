import { Component } from "react";
import Card from "../card/card.component";
import "./card-list.styles.css";

export default class CardList extends Component {
    render() {
        return (
            <div className="card-list">
                {this.props.monsters.map((current) => {
                    return <Card data={current} />;
                })}
            </div>
        );
    }
}

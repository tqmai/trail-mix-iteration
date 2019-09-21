/**
 * ************************************
 *
 * @module  ListContainer
 * @author
 * @date
 * @description stateful component that renders ListDisplay and TrainContainer
 * ************************************
 */
import React, { Component } from "react";
import ListDisplay from "../components/ListDisplay.jsx";
import TrailContainer from "./TrailContainer.jsx";


class ListContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <ListDisplay />
                <TrailContainer />
            </div>
        )
    }
}

export default ListContainer;
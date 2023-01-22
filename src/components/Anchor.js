import React from "react";

export default class Anchor extends React.Component {
    render() {
        return(
            <a target='_blank' rel="noreferrer" {...this.props}></a>
        )
    }
}
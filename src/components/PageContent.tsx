import * as React from "react";
import { DashboardElement } from "./DashboardElement";

export class PageContent extends React.Component<{}, {}> {
    render() {
        let styles = { backgroundColor: "pink" };

        // let elements = [];
        // for (var i = 0; i < 3; i++) {
        //     elements.push(<DashboardElement />);
        // }

        return (
            <div className="container" style={styles}>
                <h2>Sivun sisältöä</h2>
                { /* {elements} */}
                {this.props.children}
            </div>
        );
    }
}
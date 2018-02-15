import * as React from "react";

export interface HelloProps {
    compiler: string;
    framework: string;
    version: string;

}

export interface HelloState {
    time: string;
}

// export const Hello = (props: HelloProps) =>
// <h1>Hello from {props.compiler} and {props.framework}
// &nbsp;version {props.version}!</h1>;

let initialState : HelloState = {time: "(odota hetki)"};

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Hello extends React.Component<HelloProps, HelloState> {

    constructor(props : HelloProps) {
        console.log("constructor");
        super(props);
    }

    componentWillMount() {
        console.log("componentWillMount");
        this.setState(initialState);
    }

    render() {
        console.log("render");
        return <div>
            <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>
            <p>Kello on: {this.state.time}.</p>
        </div>;
    }

    componentDidMount() {
        console.log("componentDidMount");

        let url = "http://time.jsontest.com/";
        fetch(url, {
            method: "GET"
        }).then(res => res.json())
          .catch(error => console.error("Virhe:", error))
          .then(response => {
                console.log("Onnistui! ", response);

                // päivitetään tilaa muodostamalla kokonaan uusi objekti
                this.setState({ time: response.time });

                // väärä tapa:
                // this.state.time = "..";

                console.log("Tila päivitetty.");
          });
    }
}

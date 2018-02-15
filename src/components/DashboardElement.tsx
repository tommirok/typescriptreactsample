import * as React from "react";

export interface DashboardElementProps {
    url: string;
    showItem: string;
    callback: any;
}

export interface DashboardElementState {
    value: string;
}

let initialState: DashboardElementState = {
    value: "(please wait)"
}

export class DashboardElement extends React.Component<DashboardElementProps, DashboardElementState> {

    getBackendData = () =>{
      console.log("test");
      fetch(this.props.url, {
          method: "GET"
      }).then(res => res.json())
          .catch(error => console.error("Virhe:", error))
          .then(response => {
              console.log("Onnistui! ", response);

              let value = response[this.props.showItem];
              //let value = response.JokuArvo;

              // päivitetään tilaa muodostamalla kokonaan uusi objekti
              this.setState({ value: value });

              console.log("Tila päivitetty.");
          });
    }
    componentWillMount() {
        console.log("componentWillMount");
        this.setState(initialState);
    }

    render() {
        console.log("URL = " + this.props.url);
        console.log(`Item = ${this.props.showItem}`);

        let styles = {
            backgroundColor: "lightblue",
            margin: 10
        };

        return (
            <div className="col-md-3 dasboardElem" style={styles}>
                <h3>{this.props.showItem}</h3>
                {this.state.value}
            </div>
        );
    }

    componentDidMount() {
        console.log("componentDidMount");
        console.log("dashboard didmount");
        this.props.callback(this);
        this.getBackendData();
    }
}

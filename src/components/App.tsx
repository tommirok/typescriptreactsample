import * as React from "react";
import { PageContent } from "./PageContent";
import { DashboardElement } from
"./DashboardElement";
import { Counter } from "./Counter";

export class App extends React.Component<{}, {}> {

  private dashboardElements: DashboardElement[] = [] ;
  refreshpage = () => {
    alert("Nappia painettu");
    for(let i = 0; i<this.dashboardElements.length; i++){
      this.dashboardElements[i].getBackendData();
      console.log()
    }
  };
  registerCallBack = (element: DashboardElement) => {
    this.dashboardElements.push(element);
    console.log(`"ollaan metodissa redistercallback(), element = $element `);

  };

  render() {
    return (
      <div>
        <button onClick={this.refreshpage}>Click to refresh</button>
        <h1>SAP Dashboard</h1>
        <PageContent>
          <div className="row">
            <DashboardElement
              url="http://md5.jsontest.com/?text=ABCD"
              showItem="md5"
              callback={this.registerCallBack}
            />
            <DashboardElement
              url="http://time.jsontest.com/"
              showItem="time"
              callback={this.registerCallBack}
            />
            <DashboardElement
              url="http://ip.jsontest.com/"
              showItem="ip"
              callback={this.registerCallBack}
            />
          </div>
        </PageContent>
        <Counter initialValue={10}/>
      </div>
    );
  }
}

/*
List<int> numerot = new List<int>();
let olio = {};
*/

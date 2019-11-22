import React from 'react';
import Header from "../../components/Header"
import { Grid, GridItem, NerdletStateContext, PlatformStateContext, Icon} from 'nr1'
import Sites from "../../components/Sites"

// https://docs.newrelic.com/docs/new-relic-programmable-platform-introduction

export default class WorkshopNerdletNerdlet extends React.Component {
    constructor(props) {
        super(props);
        this.state = { deviceType: "ALL"};
    }

    async componentDidUpdate(){
        // let { launcherUrlState } = this.props
        // let newTimeRange = launcherUrlState.timeRange
    }

    changeDevice(deviceType) {
        this.setState({deviceType: deviceType})
    }

    render() {

        const config={
            domain: ["www.prezzoegifts.co.uk",
                "gigglingsquidgift.com",
                "www.vintageinngifts.co.uk",
                "www.sizzlingpubgifts.co.uk"
            ]
        }

        return <PlatformStateContext.Consumer>
            {(launcherUrlState) => (
              <NerdletStateContext.Consumer>
                {(nerdletUrlState) => (
                    <>
                    <Grid>
                    <GridItem className="headerRow" columnSpan={8}>
                        <Header title="Eagle Eye Dashboard" subtitle="All the apps in one place" />
                    </GridItem >
                    <GridItem className="headerRow" columnSpan={4}>
                        <div onClick={()=>{this.changeDevice('ALL')}}><Icon type={Icon.TYPE.HARDWARE_AND_SOFTWARE__HARDWARE__ANOMALIES} /> All</div>
                        <div onClick={()=>{this.changeDevice('MOBILE')}}><Icon type={Icon.TYPE.HARDWARE_AND_SOFTWARE__HARDWARE__MOBILE} /> Mobile & Tablet</div>
                        <div onClick={()=>{this.changeDevice('DESKTOP')}}><Icon type={Icon.TYPE.HARDWARE_AND_SOFTWARE__HARDWARE__DESKTOP} /> Desktop</div>

                    </GridItem >
                    </Grid>
                    <Sites config={config} deviceType={this.state.deviceType}/>
                    </>
                )}
                </NerdletStateContext.Consumer>
            )}
        </PlatformStateContext.Consumer>

    }
}

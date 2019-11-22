import React from 'react';
import Header from "../../components/Header"
import { Grid, GridItem, NerdletStateContext, PlatformStateContext} from 'nr1'
import Sites from "../../components/Sites"

// https://docs.newrelic.com/docs/new-relic-programmable-platform-introduction

export default class WorkshopNerdletNerdlet extends React.Component {
    
    async componentDidUpdate(){
        let { launcherUrlState } = this.props
        let newTimeRange = launcherUrlState.timeRange
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
                    <GridItem className="headerRow" columnSpan={12}>
                        <Header title="Eagle Eye Dashboard" subtitle="All the apps in one place" />
                    </GridItem >
                    </Grid>
                    <Sites config={config}/>
                    </>
                )}
                </NerdletStateContext.Consumer>
            )}
        </PlatformStateContext.Consumer>

    }
}

import React from 'react';
import { Grid, GridItem} from 'nr1'

// https://docs.newrelic.com/docs/new-relic-programmable-platform-introduction

export default class WorkshopNerdletNerdlet extends React.Component {
    render() {

        return <>
            <Grid>
                <GridItem className="headerRow" columnSpan={12}><div>Header</div></GridItem>
            </Grid>
            <Grid>
                <GridItem className="grey" style={{"border":"solid 1px red"}} columnSpan={3}><div>One</div></GridItem>
                <GridItem className="grey" columnSpan={3}><div>Two</div></GridItem>
                <GridItem className="grey" columnSpan={3}><div>Three</div></GridItem>
                <GridItem className="grey" columnSpan={3}><div>Four</div></GridItem>
            </Grid>
        </>
    }
}

import React from 'react';
import { Grid, GridItem} from 'nr1'

// https://docs.newrelic.com/docs/new-relic-programmable-platform-introduction

export default class WorkshopNerdletNerdlet extends React.Component {
    render() {

        return <>
            <Grid>
                <GridItem columnSpan={12}><div>Header</div></GridItem>
            </Grid>
            <Grid>
                <GridItem columnSpan={3}><div>One</div></GridItem>
                <GridItem columnSpan={3}><div>Two</div></GridItem>
                <GridItem columnSpan={3}><div>Three</div></GridItem>
                <GridItem columnSpan={3}><div>Four</div></GridItem>
            </Grid>
        </>
    }
}

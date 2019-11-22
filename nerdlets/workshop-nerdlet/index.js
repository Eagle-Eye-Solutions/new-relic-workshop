import React from 'react';
import Header from "../../components/Header"
import { Grid, GridItem} from 'nr1'
import Sites from "../../components/Sites"

// https://docs.newrelic.com/docs/new-relic-programmable-platform-introduction

export default class WorkshopNerdletNerdlet extends React.Component {
    render() {


        return <>
            <Grid>
                <GridItem className="headerRow" columnSpan={12}>
                    <Header title="Eagle Eye Dashboard" subtitle="All the apps in one place" />
                </GridItem>
            </Grid>
            <Sites />
        </>
    }
}

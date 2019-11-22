import React from 'react';
import { Grid, GridItem} from 'nr1'
import Header from "../../components/Header"

// https://docs.newrelic.com/docs/new-relic-programmable-platform-introduction

export default class WorkshopNerdletNerdlet extends React.Component {
    render() {

        const config={
            domain: ["www.prezzoegifts.co.uk",
                "gigglingsquidgift.com",
                "www.vintageinngifts.co.uk",
                "www.sizzlingpubgifts.co.uk"
            ]
        }


        let sites=[]
        config.domain.forEach((config)=>{
           sites.push(
            <Grid>
                <GridItem className="grey" style={{"border":"solid 1px red"}} columnSpan={3}><div>One</div></GridItem>
                <GridItem className="grey" columnSpan={3}><div>Two</div></GridItem>
                <GridItem className="grey" columnSpan={3}><div>Three</div></GridItem>
                <GridItem className="grey" columnSpan={3}><div>Four</div></GridItem>
            </Grid>
           ) 
        })

        return <>
            <Grid>
                <GridItem className="headerRow" columnSpan={12}>
                    <Header title="Eagle Eye Dashboard" subtitle="All the apps in one place" />
                </GridItem>
            </Grid>
            {sites}
        </>
    }
}

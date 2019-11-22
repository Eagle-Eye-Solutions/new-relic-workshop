import React, { Component } from 'react';
import { Grid, GridItem} from 'nr1'
import PropTypes from 'prop-types';

export default class Sites extends Component {

    render() {

       // const { title, subtitle } = this.props;
       const config={
        domain: ["www.prezzoegifts.co.uk",
            "gigglingsquidgift.com",
            "www.vintageinngifts.co.uk",
            "www.sizzlingpubgifts.co.uk"
        ]
    }
    
        let sites=[]
        config.domain.forEach((domain)=>{
        sites.push(
            <Grid key={domain}>
                <GridItem className="grey" style={{"border":"solid 1px red"}} columnSpan={3}><div>One</div></GridItem>
                <GridItem className="grey" columnSpan={3}><div>Two</div></GridItem>
                <GridItem className="grey" columnSpan={3}><div>Three</div></GridItem>
                <GridItem className="grey" columnSpan={3}><div>Four</div></GridItem>
            </Grid>
        ) 
        })

        return  <>{sites}</>
        
    }
}

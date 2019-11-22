import React, { Component } from 'react';
import { Grid, GridItem, NerdGraphQuery, Spinner} from 'nr1'
import PropTypes from 'prop-types';

export default class Sites extends Component {
    
    constructor(props) {
        super(props);
        this.state = { };
    }

    async componentDidMount() {
        this.loadData()
    }

    loadData() {

        const variables = {
            id: 692732 //eagleeye account id
        }
            
        let query = `
                query($id: Int!) {
                    actor {
                        account(id: $id) {
                                ${this.buildQueryObject()}    
                            }
                    }
                }
           `
        console.log(query);
        const q = NerdGraphQuery.query({ query: query, variables: variables })

        //Process the results of the API request
        q.then(results => {
            let resultsObj={}
            this.props.config.domain.forEach((domain,idx)=>{
                resultsObj[`site_${idx}`]=results.data.actor.account[`site_${idx}`].results
            })
            
            //set the state with the data from the query
            this.setState({ data: resultsObj})
        }).catch((error) => { console.log(error); })
    }

    buildQueryObject() 
    {
        let domains = this.props.config.domain; 
        let domainQueries = ''; 
        domains.forEach((domain, index) => {
            domainQueries += `site_${index}: nrql(query: "SELECT average(duration) as 'AvgDuration' from PageView where domain='${domain}' ") {results}`
        });

        return domainQueries;
    }    

    render() {

        const { config } = this.props
        const { data } = this.state
    
        let returnVal = <Spinner inline />

        if(data) {
            console.log("data",data)
            let sites=[]
            config.domain.forEach((domain,idx)=>{
            sites.push(
                <Grid key={domain}>
                    <GridItem className="grey" style={{"border":"solid 1px red"}} columnSpan={3}>
                    {domain}
                    </GridItem>
                    <GridItem className="grey" columnSpan={3}>{data[`site_${idx}`][0].AvgDuration}</GridItem>
                    <GridItem className="grey" columnSpan={3}><div>Three</div></GridItem>
                    <GridItem className="grey" columnSpan={3}><div>Four</div></GridItem>
                </Grid>
            ) 
            })
            returnVal=sites
        }



        return  returnVal
        
    }
}

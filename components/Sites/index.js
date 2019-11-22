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
                    <GridItem columnSpan={3}>
                    <h3>{domain}</h3>
                    </GridItem>
                    <GridItem className="LargeNumber" columnSpan={3}>{Number(data[`site_${idx}`][0].AvgDuration).toFixed(2)}
                    <div className="LargeNumberTitle">Average PageLoad</div></GridItem>
                    <GridItem columnSpan={3}><div>Three</div></GridItem>
                    <GridItem className="grey" columnSpan={3}><div>Four</div></GridItem>
                </Grid>
            ) 
            })
            returnVal=sites
        }



        return  returnVal
        
    }
}

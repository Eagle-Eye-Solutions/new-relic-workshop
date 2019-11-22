import React, { Component } from 'react';
import { Grid, GridItem, NerdGraphQuery, Spinner, SparkLine, LineChart} from 'nr1'
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
            

        let query = `query($id: Int!) {
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
                resultsObj[`site_${idx}_plseries`]=results.data.actor.account[`site_${idx}_plseries`].results
            })
            
            //set the state with the data from the query
            this.setState({ data: resultsObj})
        }).catch((error) => { console.log(error); })
    }

    buildQueryObject() 
    {
        let domains = this.props.config.domain; 
        let domainQueries = ''; 
        
        // const { duration } = this.props.nr1.launcher.state.timeRange;
        // const durationInMinutes = duration / 1000 / 60;
        const durationInMinutes = 60 
        domains.forEach((domain, index) => {
            domainQueries += `site_${index}: nrql(query: "SELECT average(duration) as 'AvgDuration' from PageView where domain='${domain}' since ${durationInMinutes} minutes ago") {results}`
            domainQueries += `site_${index}_plseries: nrql(query: "SELECT average(duration) as 'AvgDuration' from PageView where domain='${domain}' timeseries since ${durationInMinutes} minutes ago") {results}`
        });

        return domainQueries;
    }    

    convertChartData(data,fieldName) {
        const seriesData=data.map(i => { 
            i.x = i.endTimeSeconds
            i.y = i[fieldName]
            return i
        });
        const graphData = [
            {
                metadata: {
                    id: 'series-1',
                    name: this.props.title,
                    color: '#f41b1b',
                    viz: 'main',
                    units_data: {
                        x: 'TIMESTAMP',
                        y: 'TRANSACTIONS',
                    }
                },
                data: seriesData
            }
        ];
        return graphData
    }

    render() {

        const { config } = this.props
        const { data } = this.state
    
        let returnVal = <Spinner inline />

        if(data) {
            console.log("data",data)
            let sites=[]
            config.domain.forEach((domain,idx)=>{

            let seriesData=this.convertChartData(data[`site_${idx}_plseries`],"AvgDuration")
            console.log(seriesData)
            sites.push(
                <Grid key={domain}>
                    <GridItem columnSpan={3}>
                    <h3>{domain}</h3>
                    </GridItem>
                    <GridItem className="LargeNumber" columnSpan={3}>{Number(data[`site_${idx}`][0].AvgDuration).toFixed(2)}
                    <div className="LargeNumberTitle">Average PageLoad</div></GridItem>
                    <GridItem columnSpan={3}>
                        <LineChart  data={seriesData} /> {/* <SparkLine data={seriesData}/>  */}test
                    </GridItem>
                    <GridItem className="grey" columnSpan={3}><div>Four</div></GridItem>
                </Grid>
            ) 
            })
            returnVal=sites
        }



        return  returnVal
        
    }
}

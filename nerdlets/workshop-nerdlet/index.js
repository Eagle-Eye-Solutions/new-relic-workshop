import React from 'react';
import Header from "../../components/Header"
import { Grid, GridItem, NerdletStateContext, PlatformStateContext, Icon} from 'nr1'
import Sites from "../../components/Sites"
import { Map, Marker, Popup, TileLayer, CircleMarker } from 'react-leaflet'

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

        const position = [51.505, -0.09]
        const map = (
        <Map style={{ height: '200px' }} center={position} zoom={4}>
            <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            />
            <CircleMarker center={position} radius={30} color='#ff00ff' />
            <Marker position={position}>
                <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
            </Marker>
        </Map>
        )


        return <PlatformStateContext.Consumer>
            {(launcherUrlState) => (
              <NerdletStateContext.Consumer>
                {(nerdletUrlState) => (
                    <>
                    {map}
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

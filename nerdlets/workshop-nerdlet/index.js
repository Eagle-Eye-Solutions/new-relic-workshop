import React from 'react';
import { BarChart} from 'nr1'

// https://docs.newrelic.com/docs/new-relic-programmable-platform-introduction

export default class WorkshopNerdletNerdlet extends React.Component {
    render() {

        return <BarChart
            accountId={692732}
            query='SELECT count(*) FROM `Transaction` SINCE 1 DAY AGO'
        />;
    }
}

import React from 'react'
import { ResponsiveBar } from '@nivo/bar'
import UiBox from '../../../components/UiBox'
import { generateBarChartData } from '../utils'
import { EmrClientContext } from '../EmrClientProvider'

function EmrBarChart() {
    const { emrData = [] } = React.useContext(EmrClientContext)
    const { values, keys } = generateBarChartData(emrData)
    return <UiBox title="Stats by Event Date">
        <div style={{ width: "100%", height: "250px" }}>
            <ResponsiveBar
                data={values}
                keys={keys}
                indexBy="Event Date"
                margin={{ right: 100, bottom: 40, left: 50, top: 20 }}
                padding={0.3}
                valueScale={{ type: 'linear' }}
                indexScale={{ type: 'band', round: true }}
                colors={{ scheme: 'nivo' }}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Event Date',
                    legendPosition: 'middle',
                    legendOffset: 32
                }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'No of Object types',
                    legendPosition: 'middle',
                    legendOffset: -40
                }}
                labelSkipWidth={12}
                labelSkipHeight={12}
                labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
                legends={[
                    {
                        dataFrom: 'keys',
                        anchor: 'bottom-right',
                        direction: 'column',
                        justify: false,
                        translateX: 120,
                        translateY: 0,
                        itemsSpacing: 2,
                        itemWidth: 100,
                        itemHeight: 20,
                        itemDirection: 'left-to-right',
                        itemOpacity: 0.85,
                        symbolSize: 20,
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemOpacity: 1
                                }
                            }
                        ]
                    }
                ]}
                animate={true}
                motionStiffness={90}
                motionDamping={15}
            />
        </div>
    </UiBox>
}

export default EmrBarChart

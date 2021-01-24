import React from 'react'
import styled from 'styled-components'
import PageLayout from '../../components/PageLayout'
import UiBox from '../../components/UiBox'
import EmrBarChart from './components/EmrBarChart'
import EmrClientTable from './components/EmrClientTable'
import EmrPieChart from './components/EmrPieChart'
import EmrClientProvider from './EmrClientProvider'

function EmrClientDashboardContainer() {
    return <EmrClientProvider>
        <PageLayout className="ui__page__dashboard">
            <UiDashboardLayout className="container-fluid pb-4">
                <div className="row">
                    <div className="col-md-6 col-12">
                        <EmrBarChart />
                    </div>
                    <div className="col-md-6 col-12">
                        <EmrPieChart />
                    </div>
                    <div className="col-12 mt-2">
                        <UiBox title="EMR Client Table">
                            <div className="table-responsive">
                                <EmrClientTable />
                            </div>
                        </UiBox>
                    </div>
                </div>
            </UiDashboardLayout>

        </PageLayout>
    </EmrClientProvider>
}

const UiDashboardLayout = styled.section`
    height: 100%;
    overflow-y: auto;
`

export default EmrClientDashboardContainer

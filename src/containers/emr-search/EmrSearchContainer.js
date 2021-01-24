import React from 'react'
import PageLayout from '../../components/PageLayout'
import EmrSearch from './components/EmrSearch'

function EmrSearchContainer({ onSearch }) {
    return (
        <PageLayout className="ui__page__search bg-light">
            <EmrSearch onSearch={onSearch} />
        </PageLayout>
    )
}

export default EmrSearchContainer

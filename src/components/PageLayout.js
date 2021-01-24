import React from 'react'

function PageLayout({ children, className }) {
    return <main className={`ui__page ${className || ''}`}>
        {children}
    </main>
}

export default PageLayout

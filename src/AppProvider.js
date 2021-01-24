import React from 'react'

export const AppContext = React.createContext({});

function AppProvider({ children }) {
    // const [emrClientId, setMmrClientId] = React.useState("");
    const [showDashboard, setShowDashboard] = React.useState(false);

    return (
        <AppContext.Provider value={{
            showDashboard,
            setShowDashboard
        }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider

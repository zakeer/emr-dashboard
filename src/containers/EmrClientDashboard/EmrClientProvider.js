import React from 'react'
import socketIOClient from "socket.io-client";
const SOCKET_ENDPOINT = "http://localhost:3001";

export const EmrClientContext = React.createContext({});


function EmrClientProvider({ children }) {
    const [emrData, setEmrData] = React.useState([]);
    const [isApiInProgress, setIsApiInProgress] = React.useState(true);

    React.useEffect(() => {
        setIsApiInProgress(true)
        fetch("/api/data")
            .then(res => res.json())
            .then(data => {
                setEmrData(data);
                setIsApiInProgress(false)
            }).catch(error => {
                setIsApiInProgress(false)
            })

        const socket = socketIOClient(SOCKET_ENDPOINT);
        socket.on("FETCH_EMR_DATA", data => {
            if (!!data) {
                setEmrData(data);
            }
        });

    }, [])

    return <EmrClientContext.Provider value={{ emrData, isApiInProgress }}>
        {children}
    </EmrClientContext.Provider>
}

export default EmrClientProvider

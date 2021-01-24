const colors = [
    "hsl(22, 70%, 50%)",
    "hsl(26, 70%, 50%)",
    "hsl(40, 70%, 50%)",
    "hsl(167, 70%, 50%)",
    "hsl(105, 70%, 50%)"
]

export const generatePieChartData = (data = []) => {

    const dataByObjectType = (data || []).reduce((prev, curr) => {
        prev[curr.objecttype] = [...(prev[curr.objecttype] || []), curr];
        return prev;
    }, {});

    const values = Object.keys(dataByObjectType || {}).map((key) => {
        return {
            "id": key,
            "label": key,
            "value": ((dataByObjectType || {})[key] || []).length,
            "color": colors[Math.floor(Math.random() * colors.length)]
        }
    });

    return values;
}


export const generateBarChartData = (data = []) => {

    const dataByEventDate = (data || []).reduce((prev, curr) => {
        console.log(curr)
        prev[curr.eventdate] = [...(prev[curr.eventdate] || []), curr];
        return prev;
    }, {});

    const objectTypeKeys = generatePieChartData(data).map(({ label }) => label);


    const values = Object.keys(dataByEventDate || {}).map((key) => {
        const eventData = {
            id: key,
            "Event Date": key,
        };

        (objectTypeKeys || []).forEach(objectType => {
            console.log(objectType, key, dataByEventDate[key])
            eventData[objectType] = (dataByEventDate[key] || []).filter(object => object["objecttype"] === objectType).length
        });

        return {
            ...eventData,
        }
    });

    console.log({ values })

    return {
        values,
        keys: objectTypeKeys
    };
}
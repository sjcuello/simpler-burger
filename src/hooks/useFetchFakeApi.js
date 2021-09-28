import { useEffect, useState } from "react";

const useFetchFakeApi = (initialState:any, API:any) => {
    
    const [data, setData] = useState(initialState);

    useEffect(() => {
        fetch(API)
            .then(response => response.json())
            .then(info => setData(info))
    }, [API]);

    return data
}

export default useFetchFakeApi;
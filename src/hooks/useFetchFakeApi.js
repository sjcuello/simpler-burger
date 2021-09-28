import { useEffect, useState } from "react";

const useFetchFakeApi = (initialState, API) => {
    
    const [data, setData] = useState(initialState);

    useEffect(() => {
        fetch(API)
            .then(response => response.json())
            .then(info => setData(info))
    }, []);

    return data
}

export default useFetchFakeApi;
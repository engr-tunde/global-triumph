import { useEffect, useState } from "react";
import axios from "axios";
axios.defaults.withCredentials = true;

const useFetchWithCred = (url) => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        // abort controller for the useFfeect cleanup
        // const abortController = new AbortController();

        axios.get(url, { withCredentials: true})
        .then(response => {
            if(response.status !== 200){
                throw Error("Could not fetch data from the data source");
            }
            setData(response.data);
            setLoading(false);
        })
        .catch(err => {
            if(err.name === "CanceledError") {
                /* request aborted */
            } else {
                setLoading(false);
                setError(err.message);
                console.log(err.message);
            }
        })
    }, [url]);

    return {data, loading, error}
}

export default useFetchWithCred;
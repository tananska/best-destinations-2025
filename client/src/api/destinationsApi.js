import { useEffect, useState } from "react"
import { useParams } from "react-router"
import request from "../utils/request";
import useAuth from "../hooks/useAuth";

const baseUrl = 'http://localhost:3030/data/destinations';

export const useGetAllDestinations = () => {
    const [destinations, setDestinations] = useState([]);

    useEffect(() => {
        request('GET',baseUrl)
            .then(setDestinations)
    }, []);

    return {
        destinations,
    }
}

export const useGetOneDestination = () => {
    const [destination, setDestination] = useState({});
    const { destinationId } = useParams();

    useEffect(() => {
        request('GET',`${baseUrl}/${destinationId}`)
            .then(setDestination)

    }, [])
    return {
        destination,
    }
}

export const useCreateDestination = () => {
    const { options } = useAuth();

    const create = (destinationData) => request.post(baseUrl, destinationData, options);

    return {
        create
    }
}



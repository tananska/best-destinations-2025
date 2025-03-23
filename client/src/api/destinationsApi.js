import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router"
import request from "../utils/request";
import { UserContext } from "../contexts/UserContext";

const baseUrl = 'http://localhost:3030/data/destinations';

export const useGetAllDestinations = () => {
    const [destinations, setDestinations] = useState([]);

    useEffect(() => {
        request.get(baseUrl)
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
        request.get(`${baseUrl}/${destinationId}`)
            .then(setDestination)

    }, [])
    return {
        destination,
    }
}

export const useCreateDestination = () => {
    const { accessToken } = useContext(UserContext);

    const options = {
        headers: {
            'X-Authorization': accessToken,
        }
    }

    const create = (destinationData) => request.post(baseUrl, destinationData, options);

    return {
        create
    }
}



import { useEffect, useState } from "react"
import { useParams } from "react-router"
import request from "../utils/request";
import useAuth from "../hooks/useAuth";

const baseUrl = 'http://localhost:3030/data/destinations';

export const useGetAllDestinations = () => {
    const [destinations, setDestinations] = useState([]);

    useEffect(() => {
        request('GET', baseUrl)
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
        request('GET', `${baseUrl}/${destinationId}`)
            .then(setDestination)

    }, [])
    return {
        destination,
    }
}

export const useCreateDestination = () => {
    const { authorizationOptions } = useAuth();

    const create = (destinationData) => request('POST', baseUrl, destinationData, authorizationOptions);

    return {
        create
    }
}

export const useEditDestination = () => {
    const { authorizationOptions } = useAuth()
    const edit = (destinationId, destinationData) => request('PUT', `${baseUrl}/${destinationId}`, { ...destinationData, _id: destinationId }, authorizationOptions);

    return {
        edit
    }
}

export const useDeleteDestination = () => {
    const { authorizationOptions } = useAuth();
    const deleteDestination = (destinationId) => request('DELETE', `${baseUrl}/${destinationId}`, null, authorizationOptions);

    return {
        deleteDestination,
    }
}

export const useLatestDestinations = () => {
    const [latestDestinations, setLatestDestinations] = useState([]);

    useEffect(() => {
        const searchParams = new URLSearchParams({
            sortBy: '_createdOn desc',
            pageSize: 3,
            select: '_id,imageUrl,country,name',
        });

        request('GET', `${baseUrl}?${searchParams.toString()}`)
            .then(setLatestDestinations)
    }, []);

    return {
        latestDestinations
    }
}



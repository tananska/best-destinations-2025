import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import request from "../utils/request";

const baseUrl = 'http://localhost:3030/data/comments';

export const useGetAllComments = (destinationId) => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const searchParams = new URLSearchParams({
            where: `destinationId="${destinationId}"`,
        });

        request('GET', `${baseUrl}?${searchParams.toString()}`)
            .then(setComments);
    }, [destinationId]);

    return {
        comments,
        setComments,
    };
}

export const useCreateComment = () => {
    const { authorizationOptions } = useAuth();

    const create = (destinationId, commentData, author) => request('POST', baseUrl, { destinationId, comment: commentData, author }, authorizationOptions);

    return {
        create
    }
}
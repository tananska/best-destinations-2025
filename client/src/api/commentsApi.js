import useAuth from "../hooks/useAuth";
import request from "../utils/request";

const baseUrl = 'http://localhost:3030/data/comments';

export const useCreateComment = () => {
    const { authorizationOptions } = useAuth();

    const create = (destinationId, commentData) => request('POST', baseUrl, { destinationId, comment: commentData }, authorizationOptions);

    return {
        create
    }
}
import {gql} from "@apollo/client";

export const GET_ALL_MOVIES = gql`
    query {
        getAll{
            _id
            title
            plot
            releasedData
            rating
        }
    }
`;


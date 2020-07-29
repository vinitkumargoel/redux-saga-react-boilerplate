import {gql} from "@apollo/client";

export const ADD_MOVIE = gql`
    mutation ADD_MOVIE(
        $title:String!
        $plot: String!
        $releasedData:String!
        $rating: Float!
        $poster: String!
    ){
        addMovie(
            title:$title
            plot: $plot
            releasedData:$releasedData
            rating: $rating
            poster: $poster
        ){
            title
            plot
            releasedData
            rating
            poster
        }
    }
`;

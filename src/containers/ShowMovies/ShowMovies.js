import React from 'react';
import "./ShowMovies.scss"
import {GET_ALL_MOVIES} from "../../apollo/queries"
import {useQuery} from "@apollo/client";

function ShowMovies(props) {
    const {loading, error, data} = useQuery(GET_ALL_MOVIES);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    return (
        <div className='ShowMovies'>
            <ul>
                {data.getAll.map((a, i) => <li key={a._id}><strong>{a.title}</strong>: {a.plot}</li>)}
            </ul>
        </div>
    );
}

export default ShowMovies;

import React, {useState} from 'react';
import "./AddMovie.scss";
import {useMutation} from "@apollo/client";
import {ADD_MOVIE} from "../../apollo/mutations";


function AddMovie(props) {
    let [addMovie, {data}] = useMutation(ADD_MOVIE);
    let [state, setState] = useState({
        title: "",
        plot: "",
        releasedData: "",
        poster: "",
        rating: 0,
    });
    const onChange = ({target: {name, value}}) => {
        setState({
            ...state,
            [name]: value
        })
    };
    const onSubmit = async event => {
        event.preventDefault();
        await addMovie({
            variables: {
                ...state,
                rating: parseFloat(state.rating),
            }
        })
        setState({
            title: "",
            plot: "",
            releasedData: "",
            poster: "",
            rating: 0,
        });
    }
    return (
        <div className='AddMovie'>
            <h2>Add Movie</h2>
            <form onSubmit={onSubmit}>
                <span>
                <div>
                    <p>Movie Title:</p>
                    <input
                        required={true}
                        type="text"
                        name='title'
                        value={state.title}
                        onChange={onChange}/>
                </div>
                <div>
                    <p>Movie Plot:</p>
                    <textarea
                        required={true}
                        rows={3}
                        name="plot"
                        value={state.plot}
                        onChange={onChange}/>
                </div>
                <div>
                    <p>Rating:</p>
                    <input
                        required={true}
                        type="number"
                        name="rating"
                        value={state.rating}
                        onChange={onChange}/>
                </div>
                <div>
                    <p>Released Date:</p>
                    <input
                        required={true}
                        type="date"
                        name="releasedData"
                        value={state.releasedData}
                        onChange={onChange}/>
                </div>
                <div>
                    <p>Poster URL:</p>
                    <input
                        type="url"
                        required={true}
                        name="poster"
                        value={state.poster}
                        onChange={onChange}/>
                </div>
                </span>
                <button type={"submit"}>Save</button>
            </form>
        </div>
    );
}

export default AddMovie;

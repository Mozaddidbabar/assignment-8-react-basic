import React, { useState } from 'react';
import './Writter.css';

const Writter = (props) => {
    // console.log(props);
    const [status, setStatus] = useState(false);
    const { name, age, book, img, home, category } = props.writter; //destructor
    return (
        <div className="writter">
            <img src={img} alt="" />
            <h4>Name: {name} </h4>
            <h5>Profession: {category}</h5>
            <h5>Age: {age}</h5>
            <h5>Home: {home}</h5>
            <h5>Book Published: {book}</h5>
            <p><i class="fab fa-facebook-square"></i></p>

            {
                <button disabled={status ? true : false} onClick={() => {
                    props.handleAddToList(props.writter);
                    props.showClickedData(props.writter);
                    setStatus(true);
                }
                } className="addToList">Add to List</button>
            }
        </div>
    );
};

export default Writter;
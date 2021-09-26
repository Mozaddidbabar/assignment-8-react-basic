import React from 'react';
import './List.css';

const List = ({ list }) => {
    // const { writters } = props;
    // console.log(props);
    return (
        <div className="list-items">
            <p>Writters added: {list.length}</p>
            {
                list.map((p, idx) => <h4 key={idx}>{p.name}</h4>)
            }
            <button className="see-details">See Details</button>
        </div>
    );
};

export default List;
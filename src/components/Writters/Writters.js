import React, { useEffect, useState } from 'react';
import List from '../List/List';
import Writter from '../Writter/Writter';
import './Writters.css';

const Writters = () => {
    const [writters, setWritters] = useState([]);
    const [list, setList] = useState([]);
    const [listData, setListData] = useState([]);
    useEffect(() => {
        fetch('./writters.JSON')
            .then(res => res.json())
            .then(data => setWritters(data))
    }, [])

    const handleAddToList = (writter) => {
        const newList = [...list, writter];
        setList(newList);
    }
    const showClickedData = (writter) => {
        const newListData = [...listData, writter];
        setListData(newListData);
    }
    return (
        <div className="writters-container">
            <div className="writter-container">
                {
                    writters.map(writter => <Writter
                        key={writter.key}
                        writter={writter}
                        handleAddToList={handleAddToList}
                        showClickedData={showClickedData}
                    >
                    </Writter>
                    )
                }
            </div>
            <div className="list-container">
                <List list={list} listData={listData}></List>
            </div>
        </div>
    );
};

export default Writters;

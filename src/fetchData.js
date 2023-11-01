import { useState, useEffect } from "react";

function FetchData() {
    const [userInfo, setUserInfo] = useState([]);

    useEffect(() => {
        let url = "https://jsonplaceholder.typicode.com/users";

        fetch(url)
            .then((response) => response.json())
            .then((data) => setUserInfo(data));
    }, []);

    const parentDiv = {
       
    };
    const childDiv={
        border: '2px solid',
        display: 'inline-block',
        padding: '13px',
        borderRadius: '20px',
        backgroundColor: 'bisque',
        fontWeight: '500',
        fontStyle: 'oblique',
        margin: '.5%'
    }
    return (
        <>
            <h2>Fetch data from api</h2>
            <div style={parentDiv}>
            {
                userInfo.map((elements, i) => (
                    <div style={childDiv}>
                        <div>name: {elements.name}</div>
                        <div>username: {elements.username}</div>
                        <div>adress: {elements.address.city}</div>
                        <div>lat: {elements.address.geo.lat}</div>
                    </div>
                ))
            }
            </div>
        </>
    );
}

export default FetchData;
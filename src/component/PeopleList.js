import React, { useEffect, useState } from 'react';
import UseStore from '../store/UseStore';


const PeopleList = () => {

    const { UserStore } = UseStore();

    const column = ["이름", "흥미", "예정일"];

    const [inputForm, setInputForm] = useState('');

    const [list, setList]= useState([]); 

    const handleOnClick = () =>{
        UserStore.getUsers();
        setList(UserStore.userList);
    }

    return (
        <div>
            <div>
                <h1>전체목록</h1>
                <button onClick={handleOnClick}>조회</button>        
            </div>
            <div>
                <table>
                    <thead>
                        <tr>
                            {column.map((column) => (
                                <th key={column}>{column}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            list.map((data) => (
                                <tr key={data.id}>
                                    <td>{data.name}</td>
                                    <td>{data.interest}</td>
                                    <td>{data.retireDday}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PeopleList;
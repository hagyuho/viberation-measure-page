import React, { useState } from 'react';
import UseStore from '../store/UseStore';

const InputForm = () => {

    const {UserStore} = UseStore();

    const [inputForm, setInputForm] = useState('');
    
    const handleOnChange = (e) => {
        const{name, value} = e.target;
        setInputForm({
            ...inputForm,
            [name]:value,
        })
    }

    const handleOnClick = () => {
        UserStore.createUser(inputForm);
        alert("등록되었습니다. ")
        setInputForm({
            'name':'',
            "interest":'',
            "retireDday":'',
            
        })
    }

    const create = (inputForm) => {
        UserStore.createUser(inputForm);
    }

    return (
        <div>
            <hr></hr>
           <h1>팀원 정보를 입력해 주세요</h1>
           <ul>
               <li>
                   <label>이름</label>
                   <input
                    type="text"
                    name="name"
                    placeholder="이름"
                    onChange={handleOnChange}
                    />
               </li>
               <li>
                   <label>흥미</label>
                   <input
                    type="text"
                    name="interest"
                    placeholder="흥미"
                    onChange={handleOnChange}
                    />
               </li>
               <li>
                   <label>희망일</label>
                   <input
                    type="text"
                    name="retireDday"
                    placeholder="희망일"
                    onChange={handleOnChange}
                    />
               </li>
           </ul>
           <button onClick={handleOnClick}>확인</button>
        </div>
    );
};

export default InputForm;
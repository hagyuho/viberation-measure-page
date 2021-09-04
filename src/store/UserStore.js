import { observable, runInAction } from 'mobx';
import axios from 'axios';

const UserStore =  observable({

    userList:[],

    async getUsers(){
        try{
        let res = await axios.get("http://localhost:8080/api/aflist");
        console.log(res);

        runInAction(()=>{
            this.userList = [...res.data]; 
        });    
        }catch(err){
            console.log(err)
        }
    },  

    createUser(req){
        try{
            let res = axios.post("http://localhost:8080/api/aflist",req);
        }catch(err){
            console.log(err);
        }
    },

});

export default UserStore;



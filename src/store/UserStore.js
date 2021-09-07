import { observable, runInAction } from "mobx";
import axios from "axios";

const UserStore = observable({
  userList: [],

  //전체유저 조회
  async getUsers() {
    try {
      let res = await axios.get("http://localhost:8080/api/aflist");
      runInAction(() => {
        this.userList = [...res.data];
      });
    } catch (err) {
      console.log(err);
    }
  },

  // 유저 조회
  getUsersWithSearch(req) {
    axios
      .get("http://localhost:8080/api/aflist?searchWord="+req.searchWord+"&category="+req.category)
      .then((res) => {
        console.log(res);
        this.userList = [...res.data];
      })
      .catch((err) => {
        console.log(err);
      });
  },

  createUser(req) {
    axios
      .post("http://localhost:8080/api/aflist", req)
      .then(() => this.getUsers())
      .catch((error) => {
        alert(error);
      });
  },
});

export default UserStore;

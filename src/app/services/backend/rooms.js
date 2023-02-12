import axios from "../axios";

const Room = {

    index: (params) {
        axios.get("/rooms.json", params).then(res => res.to_json())
    },
    create: () {

    },
}

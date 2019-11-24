import axios from 'axios';

const KEY = "AIzaSyAygmMOwMevFCcXpdelKD4SwAw_UCgBO4Q";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params:{
        part : 'snippet',
        maxResults : 5,
        key : KEY
    }
});
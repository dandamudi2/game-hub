import axios from 'axios';


export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'7c4404e683b247a2b1476a6af69db5cb'
    }
})


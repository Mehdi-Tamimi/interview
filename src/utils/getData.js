import axios from "axios";



export default async function getData(url) {
    const rawData = await axios.get(url)
    return rawData.data

}
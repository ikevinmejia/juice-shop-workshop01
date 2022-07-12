export const URL = 'https://juice-shop-webside.herokuapp.com';

export const getData = async(url) => {
    const {data} = await axios.get(url);
    return data;
}

export const postData = async(url, objetc = {}) =>{
    try {

        await axios.post(url, objetc)

    }catch(error){
        console.log(error)
    }
}

export const DeleteData = async (url) => {
    try {
        
        await axios.delete(url);

    } catch (error) {
      console.log("error")
    }
}
export const postData = async(url, objetc = {}) =>{
    try {

        await axios.post(url, objetc)

    }catch(error){
        console.log(error)
    }
}
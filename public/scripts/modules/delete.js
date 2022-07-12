export const DeleteData = async (url) => {
    try {
        
        await axios.delete(url);

    } catch (error) {
      console.log("error")
    }
}
import Config from 'react-native-config'

const Data = () => {
    return(
        fetch(Config.endPoint)
        .then(response => response.json())
        .then(json => {
            return json
        })
        .catch (err => {
            console.log(err)
        })
    )
}

export default Data
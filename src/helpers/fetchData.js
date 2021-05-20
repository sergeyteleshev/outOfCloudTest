export function fetchData(path) {
    let json = readTextFile(path)
    if(json) {
        let data = JSON.parse(json)
        console.log(data)
        return data
    }

    return NaN
}

function readTextFile(file) {
    let rawFile = new XMLHttpRequest()
    rawFile.open("GET", file, false)
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status === 0)
            {
                return rawFile.responseText
            }
        }
    }
    rawFile.send(null)

    return NaN
}
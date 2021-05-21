async function myFetch(url, data) {
    console.log(url)
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data);
        }, 1000);
    })
}

export {myFetch};
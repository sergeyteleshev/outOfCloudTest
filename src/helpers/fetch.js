async function myFetch(url, context, args, callback) {
    console.log(url)
    const delay = ms => new Promise(res => setTimeout(res, ms))
    await delay(1000)

    callback.apply(context, args)
}

export {myFetch};
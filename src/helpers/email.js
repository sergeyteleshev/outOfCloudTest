function isEmailValid(email) {
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
}

export {isEmailValid};
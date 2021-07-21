function createSecretHolder(secret) {    
    return {
        _secret: secret,
        getSecret() {
            return this._secret
        },
        setSecret(value)  {
            this._secret = value
        }
    }   
}

// const obj = createSecretHolder(5)
// console.log(obj.getSecret()) // returns 5
// obj.setSecret(2)
// console.log(obj.getSecret()) // returns 2
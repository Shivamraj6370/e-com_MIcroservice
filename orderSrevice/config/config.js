const config = {
    local: {
        db: {
            host: "localhost",
            port: "27017",
            databaseName: "test",

        },
        api_port: 8002,
        client_secret_key: "thsgsjs"
    },
    staging: {
        db: {
            host: "172.10.1.3",
            port: "27017",
            databaseName: "siddhantsingh",
            userName: "siddhantsingh",
            password: "siddhantsingh87"
        }, api_port: 8002
    }
}
export const get = (env) => {
    return config[env]
}
export default get;

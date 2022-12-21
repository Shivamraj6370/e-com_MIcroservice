const config = {
    local: {
        DB: {
            HOST: "localhost",
            PORT: 27017,
            DATABASE: "test",
            MOONGOOSE: {
                useUnifiedTopology: true,
                useNewUrlParser: true,
            },
            USERNAME: "",
            PASSWORD: ""
        },
        PORTNO: 8003,
    },
    staging: {
        DB: {
            HOST: "172.10.1.3",
            PORT: 27017,
            DATABASE: "priyaranirai",
            MOONGOOSE: {
                useUnifiedTopology: true,
                useNewUrlParser: true,
            },
            USERNAME: "priyaranirai",
            PASSWORD: "priyaranirai56"
        },
        PORTNO: 8003
    }
}
export const get = function get(env) {
    return config[env];
}
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
        PORTNO: 9090,
    },
    staging: {
        DB: {
            HOST: "172.10.1.3",
            PORT: 27017,
            DATABASE: "shivamrawat",
            MOONGOOSE: {
                useUnifiedTopology: true,
                useNewUrlParser: true,
            },
            USERNAME: "shivamrawat",
            PASSWORD: "shivamrawat34"
        },
        PORTNO: 9090
    }
}
export const get = function get(env) {
    return config[env];
}
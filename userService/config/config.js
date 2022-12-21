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
        PORTNO: 8001,
    },



    staging: {
        DB: {
            host: "172.10.1.3",
            portno: 27017,
            dbname: "shivamrawat",
            username: "shivamrawat",
            password: "shivamrawat34"
        },
        PORTNO: 8001
    }
}
export const get = (env) => {
    return config[env];
}
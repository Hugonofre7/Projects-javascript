
const serviceRegistry = {
    services: [
        {
            id: 1,
            name: "auth-service",
            port: 3000,
            status: "active",
            metadata: {
                version: "1.0.0",
                region: "us-east"
            }
        },
        {
            id: 2,
            name: "auth-service",
            port: 3008,
            status: "active",
            metadata: {
                version: "1.0.1",
                region: "us-east"
            }
        },
        {
            id: 3,
            name: "auth-service",
            port: 3009,
            status: "active",
            metadata: {
                version: "1.0.2",
                region: "us-east"
            }
        }
    ]
};

console.log(JSON.stringify(serviceRegistry, null, 2))
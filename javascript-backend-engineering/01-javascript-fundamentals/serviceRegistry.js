
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
            name: "user-service",
            port: 3008,
            status: "inactive",
            metadata: {
                version: "1.0.1",
                region: "us-west"
            }
        },
        {
            id: 3,
            name: "payment-service",
            port: 3009,
            status: "active",
            metadata: {
                version: "1.0.2",
                region: "us-central"
            }
        }
    ]
};

console.log(JSON.stringify(serviceRegistry, null, 2))
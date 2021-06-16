const config = {
    s3: {
        REGION: "us-east-1",
        BUCKET: "s-notes-app-upload",
    },
    apiGateway: {
        REGION: "us-east-1",
        URL: "https://zti9vcql6e.execute-api.us-east-1.amazonaws.com/prod",
    },
    cognito: {
        REGION: "us-east-1",
        USER_POOL_ID: "us-east-1_71PHLEHq0",
        APP_CLIENT_ID: "1i3jtl730ekj1ij0q2ckp6bb4e",
        IDENTITY_POOL_ID: "us-east-1:0b515e84-717a-47d4-bc2d-fe728f413d5c",
    },
};

export default config;
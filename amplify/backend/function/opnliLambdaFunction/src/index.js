const neo4j = require('neo4j-driver');

exports.handler = async (event) => {
    console.log("Received event:", event);

    // Hardcoded Neo4j connection credentials
    const neo4jUri = 'neo4j+s://5159a76c.databases.neo4j.io';
    const user = 'neo4j';
    const password = 'iMPDP8-5B4wYGnQRNGIBKP4M7dEoR1EJ9APqT7YiDso';

    // Connect to the Neo4j database
    const driver = neo4j.driver(neo4jUri, neo4j.auth.basic(user, password));
    const session = driver.session();

    try {
        let data;
        if (!event) {
            throw new Error('No data provided in the request body');
        }

        const reqBody = event;
        console.log("Parsed request body:", reqBody);
        let { opnliId, firstName, middleName, lastName } = reqBody;
        
        if (!opnliId || !firstName || !lastName) {
            throw new Error('Missing required person data fields');
        }
        
        if(!middleName) {
            middleName = "";
        }

        // Run a Cypher query to create a new person node
        const result = await session.run(
            'CREATE (p:Person {person_id: $opnliId, first_name: $firstName, middle_name: $middleName, last_name: $lastName}) RETURN p',
            { opnliId, firstName, middleName, lastName }
        );

        await session.close();
        await driver.close();

        if (result.records.length === 0) {
            return {
                statusCode: 400,
                body: JSON.stringify({ message: "No new person was added" }),
            };
        }

        return {
            statusCode: 200,
            body: JSON.stringify({ message: "New Person Added" }),
        };

    } catch (error) {
        console.error("Error:", error);
        if (session) await session.close();
        if (driver) await driver.close();

        return {
            statusCode: 500,
            body: JSON.stringify({ message: "Error executing the Lambda function", error: error.message }),
        };
    }
};
import { Client } from 'pg';


async function getUser(email: string) {
    const client = new Client({
        host: 'localhost',
        port: 5432,
        database: 'postgres',
        user: 'postgres',
        password: 'postgres123',
    });
    

  try {
    await client.connect(); 
    const query = 'SELECT * FROM users1 WHERE email = $1';
    const values = [email];
    const result = await client.query(query, values);
    
    if (result.rows.length > 0) {
      console.log('User found:', result.rows[0]); 
      return result.rows[0]; 
    } else {
      console.log('No user found with the given email.');
      return null; 
    }
  } catch (err) {
    console.error('Error during fetching user:', err);
    throw err; // Rethrow or handle error appropriately
  } finally {
    await client.end(); // Close the client connection
  }
}

// Example usage
getUser('jane.smith@example.com').catch(console.error);
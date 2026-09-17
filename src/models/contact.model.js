const db = require("../config/database");

async function create(contact) {

    const query = `
        INSERT INTO web.contacts
        (full_name,email,phone,service,message)
        VALUES ($1,$2,$3,$4,$5)
        RETURNING *;
    `;

    const values = [
        contact.full_name,
        contact.email,
        contact.phone,
        contact.service,
        contact.message
    ];

    const result = await db.query(query, values);

    return result.rows[0];
}

async function  findAll() {
   const client = await db.connect();
   result=null;

    try{
     const query = `
        SELECT
            id,
            full_name,
            email,
            created_at
        FROM web.contacts
        ORDER BY created_at DESC;
    `;
    
    result = await db.query(query);
    } catch(errors){
        return errors;
    } finally{
        client.release();
    }

return result.rows;

    
}

module.exports = {
    create,
    findAll
};
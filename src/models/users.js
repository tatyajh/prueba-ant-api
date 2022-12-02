const db = require("../models/db");

const get = async () => {
  const result = await db.query(
    `SELECT 
        id,
        name,
        username,
        email,
        addressStreet,
        addressSuite,
        addressCity,
        addressZipcode,
        addressGeoLat,
        addressGeoLng,
        phone,
        website,
        companyName,
        companyCatchPhrase,
        companyBs
    FROM users`
  );

  return !result ? [] : result;
};

const create = async (user) => {
  const result = await db.query(
    `INSERT INTO users (
        name,
        username,
        email,
        addressStreet,
        addressSuite,
        addressCity,
        addressZipcode,
        addressGeoLat,
        addressGeoLng,
        phone,
        website,
        companyName,
        companyCatchPhrase,
        companyBs
    ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
    [
      user.name,
      user.username,
      user.email,
      user.addressStreet,
      user.addressSuite,
      user.addressCity,
      user.addressZipcode,
      user.addressGeoLat,
      user.addressGeoLng,
      user.phone,
      user.website,
      user.companyName,
      user.companyCatchPhrase,
      user.companyBs,
    ]
  );
  if (result.affectedRows) {
    return "User registered succesfully.";
  }
  return "An error has ocurred.";
};

const update = async (user) => {
  const result = await db.query(
    `UPDATE users SET
          name = ?,
          username = ?,
          email = ?,
          addressStreet = ?,
          addressSuite = ?,
          addressCity = ?,
          addressZipcode = ?,
          addressGeoLat = ?,
          addressGeoLng = ?,
          phone = ?,
          website = ?,
          companyName = ?,
          companyCatchPhrase = ?,
          companyBs = ?
      WHERE id = ?`,
    [
      user.name,
      user.username,
      user.email,
      user.addressStreet,
      user.addressSuite,
      user.addressCity,
      user.addressZipcode,
      user.addressGeoLat,
      user.addressGeoLng,
      user.phone,
      user.website,
      user.companyName,
      user.companyCatchPhrase,
      user.companyBs,
      user.id,
    ]
  );
  if (result.changedRows) {
    return "User updated succesfully.";
  }
  return "An error has ocurred.";
};

const remove = async (id) => {
  const result = await db.query(`DELETE FROM users WHERE id = ?`, [id]);
  if (result.affectedRows) {
    return "User deleted succesfully.";
  }
  return "An error has ocurred.";
};

module.exports = {
  get,
  create,
  update,
  remove,
};

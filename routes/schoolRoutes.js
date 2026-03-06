const express = require("express");
const router = express.Router();
const db = require("../db");

// --------------------
// ADD SCHOOL API
// --------------------

router.post("/addSchool", (req, res) => {
  const { name, address, latitude, longitude } = req.body;

  // validation
  if (!name || !address || !latitude || !longitude) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }

  const query = `
    INSERT INTO schools (name, address, latitude, longitude)
    VALUES (?, ?, ?, ?)
  `;

  db.query(query, [name, address, latitude, longitude], (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.json({
      message: "School added successfully",
      schoolId: result.insertId,
    });
  });
});

// --------------------
// LIST SCHOOLS API
// --------------------

router.get("/listSchools", (req, res) => {
  const userLat = parseFloat(req.query.latitude);
  const userLng = parseFloat(req.query.longitude);

  const query = "SELECT * FROM schools";

  db.query(query, (err, schools) => {
    if (err) {
      return res.status(500).json(err);
    }

    // calculate distance
    const sortedSchools = schools
      .map((school) => {
        const distance = Math.sqrt(
          Math.pow(userLat - school.latitude, 2) +
            Math.pow(userLng - school.longitude, 2),
        );

        return { ...school, distance };
      })
      .sort((a, b) => a.distance - b.distance);

    res.json(sortedSchools);
  });
});

module.exports = router;

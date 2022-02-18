const { body, validationResult } = require("express-validator");

module.exports.jobCreationValidationRules = () => {
  return [
    body("title", "Enter a valid title").isLength({ min: 3 }),
    body("sector", "Enter a valid sector").isLength({ min: 2 }),
    body("disability", "Enter a valid disability").isLength({ min: 2 }),
    body("qualification", "Enter a valid qualification").isLength({ min: 2 }),
  ];
};

import { body } from "express-validator";

const validator = [
  body("name").notEmpty().withMessage("Name is required"),
  body("email").isEmail().withMessage("Email is required"),
  body("artProjects")
    .isArray({ min: 1 })
    .withMessage("Array is required for art Projects"),
  body("portfolioLink")
    .isURL()
    .withMessage("Valid Link is required"),
];

export default validator;

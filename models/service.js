const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Service name is required'], // Adding required validation with custom error message
    trim: true, // Automatically remove leading and trailing spaces
  },
  description: {
    type: String,
    required: [true, 'Service description is required'], // Adding required validation
    trim: true,
  },
  price: {
    type: Number,
    required: [true, 'Price is required'], // Adding required validation
    min: [0, 'Price must be a positive number'], // Ensure price is not negative
  },
});

module.exports = mongoose.model('Service', serviceSchema);

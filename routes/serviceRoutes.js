const express = require('express');
const Service = require('../models/service');
const router = express.Router();

// Add a new service
router.post('/', async (req, res) => {
  const { name, description, price } = req.body;

  // Manual validation check
  if (!name || !description || price === undefined) {
    return res.status(400).json({
      error: 'All fields (name, description, price) are required.',
    });
  }

  // Validate if price is a number and greater than or equal to 0
  if (typeof price !== 'number' || price < 0) {
    return res.status(400).json({
      error: 'Price must be a non-negative number.',
    });
  }

  try {
    const newService = new Service({ name, description, price });
    await newService.save();
    res.status(201).json(newService);
  } catch (err) {
    // Handling Mongoose validation errors
    res.status(400).json({ error: err.message });
  }
});

// Get all services
router.get('/', async (req, res) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update a service
router.put('/:id', async (req, res) => {
  const { name, description, price } = req.body;

  // Manual validation check
  if (!name || !description || price === undefined) {
    return res.status(400).json({
      error: 'All fields (name, description, price) are required.',
    });
  }

  // Validate if price is a number and greater than or equal to 0
  if (typeof price !== 'number' || price < 0) {
    return res.status(400).json({
      error: 'Price must be a non-negative number.',
    });
  }

  try {
    const updatedService = await Service.findByIdAndUpdate(
      req.params.id,
      { name, description, price },
      { new: true, runValidators: true } // Ensures that validators are run again during update
    );
    if (!updatedService) {
      return res.status(404).json({ message: 'Service not found' });
    }
    res.json(updatedService);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete a service
router.delete('/:id', async (req, res) => {
  try {
    const deletedService = await Service.findByIdAndDelete(req.params.id);
    if (!deletedService) {
      return res.status(404).json({ message: 'Service not found' });
    }
    res.json({ message: 'Service deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
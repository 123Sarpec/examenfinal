const express = require('express');
const router = express.Router();
const proyectos = require('../controllers/tareas');

router.post('/api/proyectos/create', proyectos.create);
router.get('/api/proyectos/all', proyectos.retrieveAllProjects);
router.get('/api/proyectos/onebyid/:id', proyectos.getProjectById);
router.get('/api/proyectos/pagination', proyectos.pagination);
router.put('/api/proyectos/update/:id', proyectos.updateById);
router.delete('/api/proyectos/delete/:id', proyectos.deleteById);

module.exports = router;

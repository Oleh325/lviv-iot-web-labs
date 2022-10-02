const express = require('express');
const router = express.Router();
const Cat = require('../models/cat');

router.get('/', (req, res) => {
    Cat.findAll({ raw: true })
        .then(cats => {
            res.render('cats', { cats });
        })
        .catch(err => console.log(`Error: ${err}`))
});

router.get('/create', (req, res) => {
    res.render('create_main', { layout: 'create', cuteness: 69 });
});

router.get('/edit/:id', (req, res) => {
    const id = req.params.id;
    Cat.findByPk(id)
        .then(cat => {
            res.render('edit_main', {
                layout: 'edit',
                title: cat.title,
                description: cat.description,
                cuteness: cat.cuteness,
                id
            });
        });
});

router.post('/edit/:id', (req, res) => {
    const id = req.params.id;
    const { title, description, cuteness } = req.body;

    if (!title) {
        res.render('edit_main', { layout: 'edit', error: 'Title can\'t be empty!', description, cuteness, id });
    } else {
        Cat.update({
            title,
            description,
            cuteness
        }, { where: { id } })
            .then(() => {
                res.redirect('/cats');
                Cat.findAll({ raw: true })
                    .then(cats => {
                        res.render('cats', { cats });
                });
            });
    }
});

router.post('/create', (req, res) => {
    const { title, description, cuteness } = req.body;

    if (!title) {
        res.render('create_main', { layout: 'create', error: 'Title can\'t be empty!', description, cuteness });
    } else {
        Cat.create({
            title,
            description,
            cuteness
        });
        res.render('create_main', { layout: 'create', error: '', cuteness: 69 });
    }
});

router.get('/delete/:id', (req, res) => {
    const id = req.params.id;

    Cat.destroy({ where: { id } })
        .then(() => {
            res.redirect('/cats');
            Cat.findAll({ raw: true })
                .then(cats => {
                res.render('cats', { cats });
            });
        });
});

module.exports = router;
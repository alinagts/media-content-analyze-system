const express = require('express');
const router = new express.Router();

const conn = require('./connection');

const STATEMENTS = {
    GET_ALL: 'SELECT * FROM source',
    GET: 'SELECT * FROM source WHERE id = :id',
    INSERT: 'INSERT INTO source(url, request_id) VALUES(:url, :request_id)',
    DELETE: 'DELETE FROM source WHERE id = :id',
    UPDATE: 'UPDATE source SET url = :url, request_id = :request_id WHERE id = :id'
};

const SUCCESS_CODE = 200;
const SERVER_ERROR_CODE = 500;

router.get('/', (req, resp) => {
    conn.execute(STATEMENTS.GET_ALL, (err, res) => {
        if (err) resp.status(SERVER_ERROR_CODE).send('unable to get sources');
        else resp.status(SUCCESS_CODE).send(res);
    });
})
    .get('/:id', (req, resp) => {
        const {id} = req.params;
        conn.execute(STATEMENTS.GET, {id},
            (err, res) => {
                if (err) resp.status(SERVER_ERROR_CODE).send('unable to get source');
                else resp.status(SUCCESS_CODE).send(res);
            });
    })
    .post('/', (req, resp) => {
        const {url} = req.body;
        const {request_id} = req.body;
        conn.execute(STATEMENTS.INSERT, {url, request_id}, (err, res) => {
            if (err) {
                resp.status(SERVER_ERROR_CODE).send('unable to insert source');
                return;
            }
            conn.execute(STATEMENTS.GET, {id: res.insertId}, (err, res) => {
                if (err) resp.status(SERVER_ERROR_CODE).send('unable to get source');
                else resp.status(SUCCESS_CODE).send(res);
            });
        });
    })
    .put('/:id', (req, resp) => {
        const {id} = req.params;
        const {url} = req.body;
        const {request_id} = req.body;
        conn.execute(STATEMENTS.UPDATE, {id, url, request_id}, (err, res) => {
            if (err) {
                resp.status(SERVER_ERROR_CODE).send('unable to update source');
                return;
            }
            conn.execute(STATEMENTS.GET, {id}, (err, res) => {
                if (err) resp.status(SERVER_ERROR_CODE).send('unable to get source');
                else resp.status(SUCCESS_CODE).send(res);
            });
        });
    })
    .delete('/:id', (req, resp) => {
        const {id} = req.params;
        conn.execute(STATEMENTS.DELETE, {id}, (err, res) => {
            if (err) resp.status(SERVER_ERROR_CODE).send('unable to delete source')
            else resp.status(SUCCESS_CODE).send('source successfully deleted');
        });
    });
module.exports = router;

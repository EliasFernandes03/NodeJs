"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
// Define the directory path
const dirPath = '../files/';
// Create the Express app
const app = (0, express_1.default)();
// Enable JSON parsing middleware
app.use(express_1.default.json());
// GET /files - get a list of files in the directory
app.get('/files', (req, res) => {
    try {
        const files = fs_1.default.readdirSync(dirPath);
        res.send(files);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
// GET /files/:fileName - get the contents of a file in the directory
app.get('/files/:fileName', (req, res) => {
    try {
        const filePath = path_1.default.join(dirPath, req.params.fileName);
        const fileContents = fs_1.default.readFileSync(filePath, 'utf8');
        res.send(fileContents);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
// POST /rename - rename a file inside the directory
app.post('/rename', (req, res) => {
    const { oldName, newName, dirPath } = req.body;
    fs_1.default.rename(`${dirPath}/${oldName}`, `${dirPath}/${newName}`, (err) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error renaming file');
            return;
        }
        res.status(200).send('File renamed successfully');
    });
});
// DELETE /files/:fileName - delete a file from the directory
app.delete('/files/:fileName', (req, res) => {
    try {
        const filePath = path_1.default.join(dirPath, req.params.fileName);
        fs_1.default.unlinkSync(filePath);
        res.send(`${req.params.fileName} deleted successfully.`);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
// Start the app
app.listen(3000, () => {
    console.log('App listening on port 3000.');
});

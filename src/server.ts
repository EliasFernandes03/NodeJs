import express, { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';

// Define the directory path
const dirPath = '../files/';

// Create the Express app
const app = express();

// Enable JSON parsing middleware
app.use(express.json());

// GET /files - get a list of files in the directory
app.get('/files', (req: Request, res: Response) => {
  try {
    const files = fs.readdirSync(dirPath);
    res.send(files);
  } catch (error) {
    res.status(500).send(error);
  }
});

// GET /files/:fileName - get the contents of a file in the directory
app.get('/files/:fileName', (req: Request, res: Response) => {
  try {
    const filePath = path.join(dirPath, req.params.fileName);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    res.send(fileContents);
  } catch (error) {
    res.status(500).send(error);
  }
});

// POST /files - create a new file in the directory
app.post('/files', (req: Request, res: Response) => {
  try {
    const fileName = req.body.fileName;
    const fileContents = req.body.fileContents;
    const filePath = path.join(dirPath, fileName);
    fs.writeFileSync(filePath, fileContents);
    res.send(`${fileName} created successfully.`);
  } catch (error) {
    res.status(500).send(error);
  }
});

// PATCH /files/:fileName - update the contents of a file in the directory
app.patch('/files/:fileName', (req: Request, res: Response) => {
  try {
    const fileName = req.body.fileName;
    const filePath = path.join(dirPath, req.params.fileName);
    const fileContents = req.body.fileContents;
    fs.writeFileSync(filePath, fileContents);
    res.send(`${req.params.fileName} updated successfully.`);
  } catch (error) {
    res.status(500).send(error);
  }
});

// DELETE /files/:fileName - delete a file from the directory
app.delete('/files/:fileName', (req: Request, res: Response) => {
  try {
    const filePath = path.join(dirPath, req.params.fileName);
    fs.unlinkSync(filePath);
    res.send(`${req.params.fileName} deleted successfully.`);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Start the app
app.listen(3000, () => {
  console.log('App listening on port 3000.');
});
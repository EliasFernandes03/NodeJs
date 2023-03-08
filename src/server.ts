import express, { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';

// Define the directory path
const dirPath = '../files/';

// Create the Express app
const app = express();

// Enable JSON parsing middleware
app.use(express.json());

interface PatchRequisition {
  originalName: string;
  newName: string;
}

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

// POST /rename - rename a file inside the directory
app.post('/rename', (req: Request, res: Response) => {
  const { oldName, newName, dirPath } = req.body;
  
  fs.rename(`${dirPath}/${oldName}`, `${dirPath}/${newName}`, (err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error renaming file');
      return;
    }
    res.status(200).send('File renamed successfully');
  });
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
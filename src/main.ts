import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
// just to demonstrate importing it
import _ from 'lodash';

const app = express();
const port = 3000;

interface User {
  name: string;
  email: string;
}

const Store = {
  users: <User[]>[],
  addUser(user: User) {
    this.users.push(user);
    return user;
  },
  getUsers() {
    return this.users;
  }
}

app.use(bodyParser.json());

app.get('/', (_: Request, res: Response) => {
  res.send('Hello World!');
});

app.get("/api/users", (_: Request, res: Response) => {
  const users = Store.getUsers();
  res.json(users);
});

app.post('/api/users/create', (req: Request, res: Response) => {
  const { name, email } = req.body;

  const createdUser = Store.addUser({name, email});

  res.json(createdUser);
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});


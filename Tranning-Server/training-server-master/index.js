const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

let todos = [
  { id: 0, name: 'duyet', status: true },
  { id: 1, name: 'duyet vo', status: true }
]

let todosAPI = [
  { id: 0, name: 'duyet', level: 1 },
  { id: 1, name: 'duyet vo', level: 0 }
]

let users = [
  { id: 0, username: 'duyetvv', password: '12345' },
  { id: 1, username: 'duyet.vo', password: '123456789' }
]

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const router = express.Router();

function getMaxId (arr) {
  return Math.max.apply(null, [...arr.map(ele => ele.id), -1])
}

function findIndex(arr, id) {
  return arr.findIndex(ele => parseInt(ele.id) === parseInt(id));
}

router.route('')
  .get((req, res) => {
    res.send('Hello world')
  })

router.route('/todos')
  .get((req, res) => {
    res.json(todosAPI);
  })
  .post((req, res) => {
    const body = req.body;
    let level = 0;
    let msg = `Can't Post ${typeof body} to list`;
    
    let todo = {
      id: getMaxId(todosAPI) + 1,
      level: 1
    }

    if (Object.keys(body).length) {
      todosAPI.push({...todo, name: body.name });
      level = 1;
      msg = 'Element Posted';
    }
    res.json({ level, todosAPI, msg });
  })
  .put((req, res) => {
    const todo = req.body;
    let level = 0;
    let msg = `Can't Put ${typeof todo} to list`;

    if (todo) {
      todosAPI.push(todo);
      level = 1;
      msg = 'Element Put';
    }

    res.json({ level, todosAPI, msg });
  });


router.route('/todos/:id')
  .get((req, res) => {
    const id = req.params.id;
    const idx = findIndex(todos, id);
    let resObj = {};

    resObj = idx > -1 ? {todo: todos[idx]} : {msg: `Not found id ${id}`};

    res.json(resObj)
  })
  .post((req, res) => {
    const id = req.params.id;
    const todo = req.body;
    const idx = findIndex(todos, id);

    let msg = `Not found item has id ${id}`;

    if (idx > -1) {
      todos[idx] = todo;
      msg = 'Update success'
    }

    res.json({
      status: (idx > -1),
      msg,
      todos
    })
  })
  .delete((req, res) => {
    const id = req.params.id;
    const idx = findIndex(todos, id);

    let msg = `Not found item has id ${id}`;

    if (idx > -1) {
      todos.splice(idx, 1);
      msg = 'Delete success'
    }

    res.json({
      status: (idx > -1),
      msg,
      todos
    });
  })


router.route('/users')
  .post((req, res) => {
    const todo = req.body;
    let status = 0;

    if (todo) {
      todos.push(todo);
      status = 1;
    }

    res.json({ status, todos });
  })
  .get((req, res) => {
    res.json(todos);
  });

router.route('/users/:id')
  .delete((req, res) => {
    const id = req.params.id;
    const index = findIndex(users, id);

    if (index !== -1) {
      users.splice(index, 1);
    }

    res.json(users);
  })
  .get((req, res) => {
    const id = req.params.id;
    const index = findIndex(users, id);
    let resObj = {};

    if (index > -1) {
      resObj = users[index];
    }

    res.json({
      status: 0,
      msg: `Can\'t found todo has id ${id}`
    })
  })

app.use(router);

app.listen(process.env.PORT || 8080, () => {
  console.log('Example app listening on port 8080!')
})

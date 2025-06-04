// api to login to the app
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import express from 'express';
import bodyParser from 'body-parser';
import { login } from './login.js';
import { getUser } from './getUser.js';
import { getUserById } from './getUserById.js';
import { getUserByEmail } from './getUserByEmail.js';
import { getUserByUsername } from './getUserByUsername.js';
import { getUserByToken } from './getUserByToken.js';
import { getUserByEmailOrUsername } from './getUserByEmailOrUsername.js';
import { getUserByEmailOrUsernameAndPassword } from './getUserByEmailOrUsernameAndPassword.js';
import { getUserByEmailAndPassword } from './getUserByEmailAndPassword.js';
import { getUserByUsernameAndPassword } from './getUserByUsernameAndPassword.js';
import { getUserByTokenAndPassword } from './getUserByTokenAndPassword.js';
import { getUserByIdAndPassword } from './getUserByIdAndPassword.js';
import { getUserByEmailOrUsernameAndPasswordAndToken } from './getUserByEmailOrUsernameAndPasswordAndToken.js';
import { getUserByEmailAndPasswordAndToken } from './getUserByEmailAndPasswordAndToken.js';   
import { getUserByUsernameAndPasswordAndToken } from './getUserByUsernameAndPasswordAndToken.js';
import { getUserByIdAndPasswordAndToken } from './getUserByIdAndPasswordAndToken.js';
import { getUserByTokenAndPasswordAndToken } from './getUserByTokenAndPasswordAndToken.js';
import { getUserByEmailOrUsernameAndPasswordAndTokenAndId } from './getUserByEmailOrUsernameAndPasswordAndTokenAndId.js';
import { getUserByEmailAndPasswordAndTokenAndId } from './getUserByEmailAndPasswordAndTokenAndId.js';
import { getUserByUsernameAndPasswordAndTokenAndId } from './getUserByUsernameAndPasswordAndTokenAndId.js';
import { getUserByIdAndPasswordAndTokenAndId } from './getUserByIdAndPasswordAndTokenAndId.js';
import { getUserByTokenAndPasswordAndTokenAndId } from './getUserByTokenAndPasswordAndTokenAndId.js';           


const app = express();
app.use(bodyParser.json());
app.post('/login', async (req, res) => {
    try {
        const result = await login(req.body);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
app.get('/user', async (req, res) => {
    try {
        const result = await getUser(req.query);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
app.get('/user/id', async (req, res) => {
    try {
        const result = await getUserById(req.query);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// update user by email
app.get('/user/email', async (req, res) => {
    try {
        const result = await getUserByEmail(req.query);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

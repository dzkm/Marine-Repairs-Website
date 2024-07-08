import express from 'express';
import {Router, Request, Response} from 'express';

const app = express();
const route = Router();
app.use(express.json());

route.get('/', (req: Request, res: Response) => {
    res.json({message: 'hello world from Typescript'});
})

app.use(route);

app.listen(8080, () => 'server running on port 8080');
import App from '@/app';
import CharactersRoute from '@routes/characters.route';
import validateEnv from '@utils/validateEnv';
import ClansRoute from './routes/clans.route';

validateEnv();

const app = new App([new CharactersRoute(), new ClansRoute()]);

app.listen();

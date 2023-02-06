import App from '@/app';
import CharactersRoute from '@routes/characters.route';
import validateEnv from '@utils/validateEnv';

validateEnv();

const app = new App([new CharactersRoute()]);

app.listen();

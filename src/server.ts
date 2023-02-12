import App from '@/app';
import CharactersRoute from '@routes/characters.route';
import validateEnv from '@utils/validateEnv';
import AkatsukiRoute from './routes/akatsuki.route';
import ClansRoute from './routes/clans.route';
import KaraRoute from './routes/kara.route';

validateEnv();

const app = new App([new CharactersRoute(), new ClansRoute(), new AkatsukiRoute(), new KaraRoute()]);

app.listen();

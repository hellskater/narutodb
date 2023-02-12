import App from '@/app';
import CharactersRoute from '@routes/characters.route';
import validateEnv from '@utils/validateEnv';
import AkatsukiRoute from './routes/akatsuki.route';
import ClansRoute from './routes/clans.route';
import KaraRoute from './routes/kara.route';
import KekkeiGenkaiRoute from './routes/kekkeigenkai.route';
import TailedBeastsRoute from './routes/tailedbeasts.route';
import TeamsRoute from './routes/teams.route';
import VillagesRoute from './routes/villages.route';

validateEnv();

const app = new App([
  new CharactersRoute(),
  new ClansRoute(),
  new AkatsukiRoute(),
  new KaraRoute(),
  new TeamsRoute(),
  new VillagesRoute(),
  new KekkeiGenkaiRoute(),
  new TailedBeastsRoute(),
]);

app.listen();

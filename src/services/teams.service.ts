import fs from 'fs';
import { Response } from 'express';

export class TeamsService {
  public teams = JSON.parse(fs.readFileSync(require.resolve('../data/teams.json'), 'utf8'));

  public getAllTeams(req: any, res: Response) {
    const page = req.query.page || 1;
    const limit = req.query.limit || 20;

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const teamsToReturn = this.teams.slice(startIndex, endIndex);

    return res.json({
      teams: teamsToReturn,
      currentPage: page,
      pageSize: limit,
      totalTeams: this.teams.length,
    });
  }

  public getTeamById(req: any, res: Response) {
    const id = req.params.id;

    if (!id) {
      return res.status(400).send(`Id parameter is required`);
    }

    const team = this.teams.find(char => char.id == id);
    if (!team) {
      return res.status(404).send(`Team with id '${id}' not found`);
    }
    return res.json(team);
  }

  public getTeamByName(req: any, res: Response) {
    const name = req.query.name;

    if (!name) {
      return res.status(400).send(`Name query parameter is required`);
    }

    const team = this.teams.find(char => char.name.toLowerCase() === name.toLowerCase());
    if (!team) {
      return res.status(404).send(`Team with name '${name}' not found`);
    }
    return res.json(team);
  }
}

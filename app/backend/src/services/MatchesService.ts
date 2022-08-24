// import { Op } from 'sequelize';
import db from '../database/models';
import Match from '../database/models/match';
import IMatch from '../interfaces/IMatch';

class MatchesService {
  static async list(inProgress: any): Promise<IMatch[]> {
    console.log('inProgress no Service: ', inProgress);
    const matches: IMatch[] = await Match.findAll({
      include: [
        { model: db.models.teams, as: 'teamHome', attributes: { exclude: ['id'] } },
        { model: db.models.teams, as: 'teamAway', attributes: { exclude: ['id'] } },
      ],
    });
    if (inProgress === undefined) return matches;
    const result: IMatch[] = await Match.findAll({
      include: [
        { model: db.models.teams, as: 'teamHome', attributes: { exclude: ['id'] } },
        { model: db.models.teams, as: 'teamAway', attributes: { exclude: ['id'] } },
      ],
      where: {
        inProgress: (inProgress === 'true' ? 1 : 0),
      },
    });
    return result;
  }

  /* static async getById(id: string): Promise<IMatch> {
    const match: IMatch | null = await Match.findByPk(Number(id));
    if (!match) {
      const err = new Error('Not a valid match');
      err.name = ReasonPhrases.BAD_REQUEST;
      throw err;
    }

    return match;
  } */
}

export default MatchesService;

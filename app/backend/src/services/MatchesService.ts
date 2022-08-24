// import { Op } from 'sequelize';
import db from '../database/models';
import Match from '../database/models/match';
import IMatch from '../interfaces/IMatch';

class MatchesService {
  static async list(inProgress: any): Promise<IMatch[]> {
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

  static async create(payload: IMatch): Promise<IMatch> {
    const { homeTeam, awayTeam, homeTeamGoals, awayTeamGoals } = payload;
    const match = await Match.create({
      homeTeam,
      awayTeam,
      homeTeamGoals,
      awayTeamGoals,
      inProgress: true,
    });

    return match;
  }
}

export default MatchesService;

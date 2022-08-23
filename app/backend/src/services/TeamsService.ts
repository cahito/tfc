import Team from '../database/models/team';
import ITeam from '../interfaces/ITeam';

class TeamsService {
  static async list(): Promise<ITeam[]> {
    const teams: ITeam[] = await Team.findAll();

    return teams;
  }
}

export default TeamsService;

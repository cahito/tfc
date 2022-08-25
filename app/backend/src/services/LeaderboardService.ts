import Team from '../database/models/team';
import Match from '../database/models/match';
import classifyTeams from '../middlewares/classifyTeams';

class LeaderboardService {
  static endedHome = async () => {
    const endedHomeMatches = await Match.findAll({
      attributes: { exclude: ['id'] },
      where: { inProgress: 0 },
    });
    const teams = await Team.findAll();
    const result = classifyTeams(endedHomeMatches, teams);

    return result;
  };
}

export default LeaderboardService;

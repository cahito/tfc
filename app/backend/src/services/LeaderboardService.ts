import Team from '../database/models/team';
import Match from '../database/models/match';
import classifyTeamsHome from '../middlewares/classifyTeamsHome';
import classifyTeamsAway from '../middlewares/classifyTeamsAway';

class LeaderboardService {
  static endedHome = async () => {
    const endedHomeMatches = await Match.findAll({
      attributes: { exclude: ['id'] },
      where: { inProgress: 0 },
    });
    const teams = await Team.findAll();
    const result = classifyTeamsHome(endedHomeMatches, teams);

    return result;
  };

  static endedAway = async () => {
    const endedAwayMatches = await Match.findAll({
      attributes: { exclude: ['id'] },
      where: { inProgress: 0 },
    });
    const teams = await Team.findAll();
    const result = classifyTeamsAway(endedAwayMatches, teams);

    return result;
  };
}

export default LeaderboardService;

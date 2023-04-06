import Card from './Card'

const baseUrl = 'http://api.henrikdev.xyz/valorant'

interface League {
  name: string;
  identifier: string;
  icon: string;
  region: string;
  }
  
  interface Tournament {
  name: string;
  season: string;
  }
  
  interface Record {
    wins: number;
    losses: number;
  }
  
  interface Team {
    name: string;
    code: string;
    icon: string;
    has_won: boolean;
    game_wins: number;
    record: Record;
  }
  
  interface GameType {
  type: string;
  count: number;
  }
  
  interface Match {
  id: string;
  teams: Team[];
  game_type: GameType;
  }
  
  interface MatchEvent {
  date: string;
  state: string;
  type: string;
  vod: string;
  league: League;
  tournament: Tournament;
  match: Match;
  }
  
async function getTournament(): Promise<MatchEvent[]> {
  const res = await fetch(`${baseUrl}/v1/esports/schedule`, {
    cache: 'force-cache'
  })
  
  if(!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const result = await res.json()
  return result?.data

}



export default async function Tournament () {
  const tournaments = await getTournament()

  return (
    <div className='flex justify-center my-4'>
      <div className='grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3'>
        {tournaments.map(tournament => (
          <Card
            className='mt-4'
            key={tournament?.match?.id}
            leaugeName={tournament?.league?.name} 
            leaugeIcon={tournament?.league?.icon}
            teams={tournament?.match?.teams}
            vod={tournament?.vod}
          />
        ))}
      </div>
    </div>
  )
}
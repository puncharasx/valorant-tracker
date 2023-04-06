import Image from 'next/image'
import Link from 'next/link';
// import Tag from './Tag'

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

interface ICardProps {
  className?: string;
  leaugeName: string;
  leaugeIcon: string;
  teams: Team[];
  vod: string;
}

export default function Card ({ leaugeName, leaugeIcon, teams, vod, className } : ICardProps) {
  return (
    <div className={`${className}`}>
      <div className={`w-80 bg-cover h-64 bg-slate-700 bg-opacity-30`}>
        <div className="bg-[#F94350] text-white rounded-t-md">
          <div className='flex justify-center items-center'>
            <div>
            Leauge: {leaugeName} 
            </div>
            <div>
            <Image
                src={leaugeIcon}
                alt='ALT'
                width={80}
                height={80}
              />
            </div>
          </div>
        </div>
        <div className="p-4 text-white">
          <div className='flex justify-center items-center'>
            <div className='flex'>
              <Image
                src={teams[0]?.icon}
                alt='ALT'
                width={200}
                height={200}
              />
            </div>
            <div className={`text-3xl text-[#F94350] font-bold`}>
              VS
            </div>
            <div>
              <Image
                src={teams[1]?.icon}
                alt='ALT'
                width={200}
                height={200}
              />
            </div>
          </div>
        </div>
      </div>
      <Link href={vod ? vod : '#'} target='_blank'>
        <div className="bg-slate-950 p-4 text-white text-center cursor-pointer hover:bg-slate-700">
          Watching
        </div>
      </Link>
    </div>
  )
}
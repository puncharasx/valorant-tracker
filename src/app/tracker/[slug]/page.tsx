
const baseUrl = 'http://api.henrikdev.xyz/valorant'

async function getMatches(name: string, tag: string) {
  const res = await fetch(`${baseUrl}/v3/matches/ap/${name}/${tag}`, {
    cache: 'no-cache'
  })
  
  if(!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json()

}

interface ITackerParams {
  params: {
    slug: string
  }
}

export default function Tracker ({ params: { slug } }: ITackerParams) {
  return (
    <div>{slug}</div>
  )
}
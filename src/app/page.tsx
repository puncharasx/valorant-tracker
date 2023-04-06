import localFont from 'next/font/local';
import TextField from './TextField'
import Button from './Button'

const myFont = localFont({
  src: './ValorantFont.ttf',
  display: 'swap'
});

export default async function Home() {
  return (
    <div 
      className="flex flex-col justify-center items-center h-screen"
    >
      <div 
      className={`text-[#F94350] text-8xl ${myFont.className}`}
      >
        Valorant
      </div>
      <div className={`text-white ${myFont.className}`} >TRACKER</div>
      <div className='mt-8 w-2/5'>
      <TextField 
        placeholder='Player#Tag'
      />
      <Button 
        className='mt-12'
      >
        Search
      </Button>
      </div>
    </div>
  )
}
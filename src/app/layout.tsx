import './globals.css';
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Valorant Tracker',
  description: 'Valorant Tracker, Generated by Next.js',
  icons: {
    
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`bg-[#1C1A28]`}>
        <div className='flex justify-end px-14 my-4'>
          <Link
            href='https://github.com/puncharasx'
          >
            <Image
              className='cursor-pointer hover:opacity-90'
              src='/github-mark-white.png'
              alt='GITHUB'
              width={35}
              height={35}
            />
          </Link>
        </div>
        {children}
      </body>
    </html>
  )
}

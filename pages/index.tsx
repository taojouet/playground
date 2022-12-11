import CustomCursor from '../components/Cursor'
import Image from 'next/image'
import profilePic from '../public/img/tao.png'


export default function Home() {
  return (
    <div>
      <body>
        <CustomCursor />
        <main className="min-h-screen p-64 flex-1 justify-center items-center bg-dark-blue">
          <div className="container mx-auto p-4">
            <div className="flex items-center">
              <Image src={profilePic} alt="Picture of the author" width={5763} height={3842} className="w-1/3 mr-4" />
              <p className="text-center w-2/3">
                Hi! My name is Tao and I am a developer. This website will showcase my projects, my skills and anything I'd love to share with you.
                <p className="font-semibold text-yellow">Welcome to my playground!</p>
              </p>
            </div>
            
          </div>
        </main>
      </body>
    </div>
  )
  }
import CustomCursor from '../components/Cursor'
import Image from 'next/image'
import profilePic from '../public/img/tao.png'


export default function Home() {
  return (
    <div>
      <body>
        <CustomCursor />
        <main>

          {/* FIRST SECTION START */}

          <div className="min-h-screen p-64 flex-1 justify-center items-center bg-slate-400">
            <div className="container mx-auto p-4">
              <div className="flex items-center">
                <Image src={profilePic} alt="Picture of the author" width={5763} height={3842} className="w-1/3 mr-4" />
                <p className="text-center w-2/3">
                  Hi! My name is Tao and I am a developer. This website will showcase my projects, my skills and anything I'd love to share with you.
                  <br />
                  <span className="font-semibold text-yellow">Welcome to my playground!</span>
                </p>
              </div>
            </div>
          </div>
          {/* FIRST SECTION END */}



          {/* SECOND SECTION START */}
          {/* <div className="min-h-screen p-64 flex-1 justify-center items-center bg-slate-400">
            <div className="container mx-auto p-4">
              <div className="flex items-center">
                <div className="grid grid-cols-4 gap-4">
                  <p className="text-center w-2/3">
                    Hi! My name is Tao and I am a developer. This website will showcase my projects, my skills and anything I'd love to share with you.
                    <br />
                    <span className="font-semibold text-yellow">Welcome to my playground!</span>
                  </p>

                  <p className="text-center w-2/3">
                    Hi! My name is Tao and I am a developer. This website will showcase my projects, my skills and anything I'd love to share with you.
                    <br />
                    <span className="font-semibold text-yellow">Welcome to my playground!</span>
                  </p>

                  <p className="text-center w-2/3">
                    Hi! My name is Tao and I am a developer. This website will showcase my projects, my skills and anything I'd love to share with you.
                    <br />
                    <span className="font-semibold text-yellow">Welcome to my playground!</span>
                  </p>

                  <p className="text-center w-2/3">
                    Hi! My name is Tao and I am a developer. This website will showcase my projects, my skills and anything I'd love to share with you.
                    <br />
                    <span className="font-semibold text-yellow">Welcome to my playground!</span>
                  </p>
                </div>
              </div>
            </div>
          </div> */}
          {/* SECOND SECTION END */}


        </main>
      </body>
    </div>
  )
}
import CustomCursor from '../../components/global/Cursor'
import Presentation from '../../components/Presentation'
import Resume from '../../components/Resume'
// import CV from '../components/CV'

/**
 * 
 * @returns The home page of the website in English
 * 
 */

export default function Home() {
  return (
    <div>
      <body>
        {/* <CustomCursor /> */}
        <main>

          {/* FIRST SECTION START */}
          {/* This section is dedicated to a simple presentation */}

          <Presentation presentation={`Hi! My name is Tao and I am a developer. This website will showcase my projects, my skills and anything I'd love to share with you.`}/>

          {/* FIRST SECTION END */}


          {/* SECOND SECTION START */}

          {/* <Resume /> */}
           
          {/* SECOND SECTION END */}


        </main>
      </body>
    </div>
  )
}
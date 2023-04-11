import CustomCursor from '../../components/Cursor'
import Presentation from '../../components/Presentation'
import Resume from '../../components/Resume'
// import CV from '../components/CV'

/**
 * 
 * @returns The home page of the website in French
 */

export default function Home() {
  return (
    <div>
      <body>
        <CustomCursor />
        <main>

          {/* FIRST SECTION START */}
          {/* This section is dedicated to a simple presentation */}

          <Presentation presentation={`Salut ! Moi c'est Tao, je développe des applications depuis tout petit. Ce site à pour but de présenter mon cv et répertorier les projets sur lesquels j'ai eu la chance de travailler. Je pourrais aussi y partager des choses qui m'interreses.`}/>

          {/* FIRST SECTION END */}


          {/* SECOND SECTION START */}

          {/* <Resume /> */}
          
          {/* SECOND SECTION END */}


        </main>
      </body>
    </div>
  )
}
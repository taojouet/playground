import Image from 'next/image'

import linkedin from '../../public/logo/linkedin.svg'
import mailIcon from '../../public/logo/mailIcon.png'
import github from '../../public/logo/github.svg'


export default function Footer() {


    return (

        <footer className="bg-slate-400 text-white py-4">
            <div className="container mx-auto flex justify-around">

                <a href="https://www.linkedin.com/in/taojouet/" target="_blank">
                    <Image
                        src={linkedin}
                        alt="Linkedin page of Tao Jouet"
                        width={32} height={32}
                    />
                </a>

                <a href="mailto:contact@taojouet.com" target="_blank">
                    <Image
                        src={mailIcon}
                        alt="Send me an email!"
                        width={32} height={32}
                    />
                </a>

                <a href="https://github.com/taojouet" target="_blank">
                    <Image
                        src={github}
                        alt="Github page of Tao Jouet"
                        width={32} height={32}
                    />
                </a>

            </div>
        </footer>

    );
}
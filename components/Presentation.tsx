import Image from 'next/image';
import profilePicture from '../public/img/tao.png';

export default function Presentation(
  props: {
    presentation: string;
  }
) {
  return (
    <div className="min-h-screen p-64 flex-1 justify-center items-center bg-slate-400">
      <div className="container mx-auto p-4">
        <div className="flex items-center">
          <Image src={profilePicture} alt="Picture of the author" width={720} height={480} className="w-1/3 mr-4" />
          <p className="text-center w-2/3">
            {props.presentation}
            <br />
            <span className="font-semibold text-yellow">Welcome to my playground!</span>
          </p>
        </div>
      </div>
    </div>
  );
}
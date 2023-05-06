import ResumeCard from "./ResumeCard";
// cv_.*[^">]
export default function CV() {
    return (
        <>
            <div className="p-64 flex-1 justify-center items-center bg-slate-400">
                <div className="container mx-auto p-4">
                    <div className="flex items-center">
                        <div className="text-center w-1/4 border rounded-xl border-white ">
                            {/* <h1 className="flex-1 justify-center items-center bg-slate-400">CV</h1> */}
                            <ResumeCard
                                url={"http://localhost:3000/fr/IES"}
                                name={"Institut d'Electronique et des Systèmes - Stagiaire projet"}
                                date={"06/2020-08/2020"}
                                shortDescription={[
                                    `Conception d'un espace immersif dans le cadre du projet HUT (Human at Home projecT).`,
                                    `- Conception 3D`,
                                    `- Chiffrage`,
                                    `- Programmation électronique pour commander différents éléments`,
                                    `- Conception d'une interface "homme machine"`
                                ]} />
                        </div>

                        <div className="text-center w-2/4">
                            {/* <h1 className="flex-1 justify-center items-center bg-slate-400">CV</h1> */}
                            <ResumeCard
                                url={"http://localhost:3000/fr/IES"}
                                name={"Institut d'Electronique et des Systèmes - Stagiaire projet"}
                                date={"06/2020-08/2020"}
                                shortDescription={[
                                    `Conception d'un espace immersif dans le cadre du projet HUT (Human at Home projecT).`,
                                    `- Conception 3D`,
                                    `- Chiffrage`,
                                    `- Programmation électronique pour commander différents éléments`,
                                    `- Conception d'une interface "homme machine"`
                                ]} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
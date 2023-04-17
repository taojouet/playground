import ResumeCard from "./ResumeCard";

export default function CV() {
    return (
        <div className="cv">
            <div className="cv__header">
                <h1>CV</h1>
            </div>
            <div className="cv__content">
                <div className="cv__content__cards">
                    <ResumeCard
                        url={"http://localhost:3000/fr/IES"}
                        name={"nstitut d'Electronique et des Systèmes Stagiaire projet"}
                        date={""}
                        description={[
                            `Conception d'un espace immersif dans le cadre du projet HUT (Human at Home projecT).`, 
                            `- Conception 3D`,
                            `- Chiffrage`,
                            `- Programmation électronique pour commander différents éléments`,
                            `- Conception d'une interface "homme machine"`
                        ]} />
                </div>
            </div>
        </div>
    );
}
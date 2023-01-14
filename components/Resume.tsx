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
                        url={"https://taojouet.com"}
                        name="TOTO"
                    />
                </div>
            </div>
        </div>
    );
}
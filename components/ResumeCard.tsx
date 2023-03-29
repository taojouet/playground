export default function ResumeCard(
    props: {
        name: string;
        url: string;
        date: string;
        description: string;
    }
) {
    return (
        <div className="cv-card">
            <div className="cv-card__header">
                <div className="cv-card__header__title">
                    <h3>{props.name}</h3>
                    <p>at <a href={props.url}>Vegvesen</a></p>
                </div>
                <div className="cv-card__header__date">
                    <p>{props.date}</p>
                </div>
            </div>
            <div className="cv-card__content">
                <p>
                    {props.description}
                </p>
            </div>
        </div>
    );
}
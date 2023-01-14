export default function ResumeCard(
    url: any,
    name: string
) {
    return (
        <div className="cv-card">
        <div className="cv-card__header">
            <div className="cv-card__header__title">
            <h3>{name}</h3>
            <p>at <a href={url}>Vegvesen</a></p>
            </div>
            <div className="cv-card__header__date">
            <p>2019 - 2020</p>
            </div>
        </div>
        <div className="cv-card__content">
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
            pellentesque libero. Aenean vel est id lorem ultrices aliquam. Donec
            vitae semper nunc. Integer ut nisl auctor, lacinia erat eu, ultrices
            elit. Sed euismod, nisl ac aliquet tincidunt, velit ipsum ultricies
            libero, in ultrices nisl nunc sit amet nunc. Sed euismod, nisl ac
            aliquet tincidunt, velit ipsum ultricies libero, in ultrices nisl nunc
            sit amet nunc.
            </p>
        </div>
        </div>
    );
}
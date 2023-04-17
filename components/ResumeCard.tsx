import Link from 'next/link'

export default function ResumeCard(
    props: {
        name: string;
        url: string;
        date: string;
        description: Array<string>;
    }
) {
    return (
        <div className="">
            <div className="">
                <div className="">
                    <h3>{props.name}</h3>
                    <p>at <Link href={props.url}>here</Link></p>
                </div>
                <div className="">
                    <p>{props.date}</p>
                </div>
            </div>
            <div className="">
                <p>
                    {
                        props.description.map((line: string) => (
                                <span>{line}<br /></span>    
                            
                            
                        ))
                    }
                </p>
            </div>
        </div>
    );
}
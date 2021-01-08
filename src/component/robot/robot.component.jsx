import './robot.style.css';

export const Robot = ({robot}) => {

    return (
        <div className="robot">
            <img alt={robot.name} src={'https://robohash.org/'+robot.id+'?size=180x180'} />
            <p>{robot.username}</p>
            <p>{robot.email}</p>
        </div>
    );

}
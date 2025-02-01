import Friend from "../Friend/Friend";



const Cousine = ({name}) => {
    return (
        <div>
            <h2>Cousine</h2>
            <p>{name}</p>
            {name === "Biltu" && <Friend></Friend> }
         
            
        </div>
    );
};

export default Cousine;
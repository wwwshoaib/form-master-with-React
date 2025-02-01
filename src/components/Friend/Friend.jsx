import { AssetContext } from "../GrandPa/GrandPa";
import { useContext } from "react";


const Friend = () => {
    const gift = useContext(AssetContext);
    return (
        <div>
            <h2>Friend</h2>
            <section className="flex">
                <p>I have ... {gift}</p>

            </section>
            
        </div>
    );
};

export default Friend;
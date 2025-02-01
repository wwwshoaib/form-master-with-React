import { useContext } from "react";
import { AssetContext } from "../GrandPa/GrandPa";



const special = () => {
    const gift = useContext(AssetContext);
    return (
        <div>
            <h2>Special</h2>
            <section className="flex">
                <p>I have ... {gift}</p>

            </section>
            
        </div>
    );
};

export default special;

import Dad from "../Dad/Dad";
import Uncle from "../Uncle";
import Aunty from "../Aunty/Aunty";
import './GrandPa.css'
import { createContext, useState } from "react";
export const AssetContext = createContext('Gold')
export const MoneyContext = createContext(500);

const GrandPa = () => {
    const [money, setMoney] = useState(100)

    return (
        <div className="grandpa flex flex-col justify-center items-center m-5">
            <h2>Grandpa</h2>
            <p>Money: {money}</p>
            <div className="flex">
                <MoneyContext.Provider value={[money, setMoney]}>
                    <AssetContext.Provider value="gold">
                        <Dad></Dad>
                        <Uncle></Uncle>
                        <Aunty></Aunty>
                    </AssetContext.Provider>
                </MoneyContext.Provider>
             

            </div>

        </div>
    );
};

export default GrandPa;


import { useContext } from "react";
import Cousine from "../Cousine/Cousine";
import { MoneyContext } from "../GrandPa/GrandPa";
const Aunty = () => {
    const [money, setMoney] = useContext(MoneyContext)
    return (
        <div>
           <h2 className="text-center">Aunty</h2>
            <section className="flex">
            <Cousine name = {'Biltu'}></Cousine>
            <Cousine name = {'Hasan'}></Cousine>
            <p>Money : {money}</p>
            <br />
            <button className="btn success" onClick={() => setMoney(money + 1000)}>Add 1000 Tk</button>
              
            </section>
        </div>
    );
};

export default Aunty;
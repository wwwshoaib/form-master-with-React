
import Brother from "../Brother/Brother";
import Sister from "../Sister/Sister";
import Myself from "../Myself/Myself";

const Dad = () => {
    return (
        <div>
            <h2 className="text-center">Dad</h2>
            <section className="flex">
                <Brother></Brother>
                <Sister></Sister>
                <Myself ></Myself>
            </section>

        </div>
    );
};

export default Dad;



import Cousine from "./Cousine/Cousine";


const Uncle = () => {
 
    return (
        <div>
           <h2 className="text-center">Uncle</h2>
            <section className="flex">
            <Cousine  name = {'Maryam'}> </Cousine>
            <Cousine name = {'Sohana'}></Cousine>
            <Cousine name = {'Parvin'}></Cousine>
                
              
            </section>
        </div>
    );
};

export default Uncle;
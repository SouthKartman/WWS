import Stories from "./Stories"
import MiniProfile from "./MiniProfile"


function Feed ()
{
    return (

    // <div>
        <main className=" grid grid-cols-1 md:grid-col-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl max-auto">
        
        <section className=" col-span-2">

        {/* section */}
            {/* stories */}
            <Stories/>
            {/* posts */}
        </section>
        
    

        <section className="hidden xl: inline-grid md:col-span-1">
            <div className="fixed top-20"> 
            <MiniProfile/>
                {/* <Suggestions */}
            </div>
        </section>
        </main> 
        );
        }

    // {/* </div> */}

export default Feed
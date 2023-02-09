import Stories from "./Stories"



function Feed ()
{
    return (

    <div>
        <main className=" grid grid-cols-1 md:grid-col-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl max-auto">
        
        <section className=" col-span-2">

        {/* section */}
            {/* stories */}
            <Stories/>
            {/* posts */}
        </section>
        
        <section>

        {/* section */}
            {/* mini profile */}
            {/* suggestions */}
        </section>
        </main>
        

    </div>

    )
    
}
export default Feed
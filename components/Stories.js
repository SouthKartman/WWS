import { useEffect, useState } from "react";
import faker from "faker"

function Stories(){
const [suggestions, setSuggestions] = useState()

    useEffect(() => {
        const suggestions = [... Array(20)].map((_, i) => ({
            ...faker.helpers.contextualCard(),
            id: i,
        }));
    
        setSuggestions(suggestions);

    }, []);

    

    return (

        <div className="">
         
            {suggestions.map(profile =>{
                <Story key={profile.id}/>
            })}
         
            {/* story */}
            {/* story */}
            {/* story */}
            {/* story */}
            {/* story */}
            {/* story */}
        </div>

    )
}

export default Stories
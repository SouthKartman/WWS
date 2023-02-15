import { BookmarkIcon, ChatIcon, DotsCircleHorizontalIcon, HeartIcon, PaperAirplaneIcon } from "@heroicons/react/outline";

function Post ({id, username, userImg,img, caption})
{
    return(
        <div className="bg-white my-7 border rounded-sm">
            {/* Header */}
            <header className="flex items-center p-5 ">
               <img src="{userImg}" 
               className="rounded-full h-12 w-12 
               object-contain border p-1 mr-3" 
               alt=""/> 

               <p className="flex-1 font-bold">{username}</p>
               <DotsCircleHorizontalIcon className=" h-5"/>
            </header>
            {/* img */}
            <img src={img} className="object-cover w-full" alt=""/>
            {/* buttons */}
            <div className="flex justify-between px-4 pt-4">
                <div className="flex space-x-4">
                    <HeartIcon className="btn"/>
                    <ChatIcon className="btn"/>
                    <PaperAirplaneIcon className="btn"/>
                </div>

                <BookmarkIcon className="btn"/>
            </div>
            
            {/* caption */}
            <div>
                <p className="p-5 truncate">
                    <span className="font-bold mr-1">{username}</span>
                    {caption}

                </p>
            </div>
            {/* comments */}
            {/* input box */}
            <form>
                
            </form>
        </div>
    );
}

export default Post
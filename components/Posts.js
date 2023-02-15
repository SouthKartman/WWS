import Post from "./Post"

const posts = [ 
    {
        id: '123',
        username: 'ssssangha',
        userImg: 'https://links.papareact.com/3ke',
        img: 'https://links.papareact.com/3ke',
        caption: 'This is "Subscribe and destroy the like button for the YT algorithm!"',
    },
    {
        id: '123',
        username: 'ssssangha',
        userImg: 'https://links.papareact.com/3ke',
        img: 'https://links.papareact.com/3ke',
        caption: 'This is "Subscribe and destroy the like button for the YT algorithm!"',
    },
];


function Posts () {
    return (

        <div>
            {posts.map(post =>(
            <Post key={post.id} id={post.id}
            username={post.username}
            userImg={post.userImg}
            img={post.img}
            caption={post.caption}

            />  
                ))}
            
            <Post/>
            <Post/>
            <Post/>

        </div>
    );
}

export default Posts
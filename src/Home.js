import { useState } from 'react';
import BlogList from './BlogList';
const Home = () => {
    const [blogs, setBlogs] = useState([
        { title : 'My New Website!', body: 'lorem....', author: 'mario', id: 1},
        { title : 'Welcome Party!', body: 'lorem....', author: 'yoshi', id: 2},
        { title : 'Web Dev Top Tips!', body: 'lorem....', author: 'mario', id: 3}
    ]);

    return (
        <div className="home">
            <BlogList blogs = { blogs } title = "All Blogs..."/>
        </div>
    );
}

export default Home;
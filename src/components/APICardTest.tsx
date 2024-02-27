// a live api endpoint on a static site
import { useState } from "react";

type Data = {
    id: string;
    slug: string;
    body: string;
    collection: "tags";
    data: {
        selected: string;
        color: string;
        location: string;
        annotation: string;
        book: string;
    }
};


const APICardTest = () => {
    const [tags, setTags] = useState([])

    const handleClick = async () => {
        const res = await fetch("/endpoint.json");
        const data = await res.json();
        setTags(data);
        console.log("Data====>>>", data)
    }
    return <div>
        <p>Get more items</p>
        {tags.length > 0 && tags.map((tagsData: Data) => <p key={tagsData.id} >{tagsData.data.selected}</p>)

        }
        <button onClick={handleClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Get it</button>
    </div>;
};
export default APICardTest;
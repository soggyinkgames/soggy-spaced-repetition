// a live api endpoint on a static site
import { useState } from "react";
import TailWindscard from "./TailWindcard";

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


const TagsCardDeck = () => {
    const [tags, setTags] = useState([])

    const handleClick = async () => {
        const res = await fetch("/endpoint.json");
        const data = await res.json();
        setTags(data);
        console.log("Data====>>>", data)
    }
    return <div>
        {/* <p>Get more items, these are coming from tags getCollections</p> */}

        {tags.length > 0 && tags.map((tagsData: Data) => (

            <TailWindscard title={tagsData.data.selected} text={tagsData.data.annotation} image={tagsData.data.color == "yelow" ? "https://res.cloudinary.com/soggy-ink-games/image/upload/v1708528565/soggy-ink-brain_dggi8h.jpg" : "https://res.cloudinary.com/soggy-ink-games/image/upload/v1708528565/soggy-ink-brain_dggi8h.jpg"} ></TailWindscard>

        ))}

        <button onClick={handleClick} className="bg-accent hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">Get it</button>
    </div >;
};
export default TagsCardDeck;
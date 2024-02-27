import { getCollection } from "astro:content";

const tags = await getCollection("tags");//you can import a collection or...
// import authors from "../data/data3"; //data from a json file

export const GET = async ({}) => {
    return new Response(JSON.stringify(/*{ hi: "heya hows it going"}**/ tags), { headers: {
        "content-type": "application/json",
    },
    status: 200,
});
};
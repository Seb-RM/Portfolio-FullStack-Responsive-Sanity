import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const projectId = process.env.REACT_APP_SANITY_PROJECT_ID.replace(/;$/, "");
const token = process.env.REACT_APP_SANITY_TOKEN.replace(/;$/, "");

export const client = sanityClient({
    projectId: projectId,
    dataset: "data-base",
    apiVersion: "2022-02-01",
    useCdn: true,
    token: token,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source)
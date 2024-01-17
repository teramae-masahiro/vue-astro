import { createClient } from "microcms-js-sdk";
const client = createClient({
  serviceDomain: import.meta.env.SERVICE_DOMAIN,
  apiKey: import.meta.env.API_KEY,
});

export const getBlogs = async (queries) => {
  return await client.get({ endpoint: "news", queries });
};

export const getBlogsDetail = async (postId, queries) => {
  return await client.getListDetail({ endpoint: "news",contentId: postId, queries  });
}

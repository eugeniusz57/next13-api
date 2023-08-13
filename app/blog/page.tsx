import PostSearch from "@/components/PostSearch";
import { Posts } from "@/components/Posts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Next App",
};

function Blog() {
  return (
    <>
      <h1>Blog page</h1>
      <PostSearch />
      <Posts />
    </>
  );
}

export default Blog;

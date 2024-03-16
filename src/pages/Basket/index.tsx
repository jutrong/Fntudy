import PostList from "../../components/Home/Post";
import { useEffect, useState } from "react";
import { TPost } from "../../types/posts";
import { useQuery } from "@tanstack/react-query";
import postApi from "../../apis/posts";


const Basket = () => {
  const { data: postData } = useQuery({ queryKey: ['posts'], queryFn: postApi.getPostData });
  const [activePost, setActivePost] = useState<TPost[]>()

  useEffect(() => {
    setActivePost(postData?.filter((post) => post.isActive === true))

  }, [postData])

  return (
    <>
      {!activePost?.length &&
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
          장바구니에 담긴 전시회가 없습니다.
        </div>}
      {activePost?.map((post) => (
        <PostList key={post.id} post={post} /> // 
      ))}
    </>
  )
}

export default Basket;
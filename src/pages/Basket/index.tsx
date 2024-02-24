import { useRecoilValue } from "recoil";
import { basketIdState } from "../../recoil/atom/Basket";
import PostList from "../../components/Home/PostList";
import axios from "axios";
import { useEffect, useState } from "react";
import { TPost } from "../../types/posts";


const Basket = () => {
  const [basketPost, setBasketPost] = useState<TPost[]>();
  const basketId = useRecoilValue(basketIdState);



  const fetchFilteredPosts = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/postData`);
      const allPosts = response.data;

      // basket 상태에 있는 id 배열을 사용하여 필터링합니다.
      const filteredPosts = allPosts.filter((post: any) => basketId.postId.includes(post.id));

      // 필터링된 게시물을 postData 상태에 저장합니다.
      setBasketPost(filteredPosts);
    } catch (error) {
      console.error('Fetching filtered posts failed:', error);
    }
  };

  useEffect(() => {
    fetchFilteredPosts();
  }, [basketId.postId])


  return (
    <>
      {!basketPost?.length &&
        <div
          style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>장바구니에 담긴 전시회가 없습니다.
        </div>}
      {basketPost?.map((post) => (
        <PostList key={post.id} post={post} /> // 
      ))}
    </>
  )
}

export default Basket;
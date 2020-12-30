import React from "react";
import SearchForm from "./SearchForm";
import blog02 from "../../images/blog02.jpg";
import blog03 from "../../images/blog03.jpg";
import blog04 from "../../images/blog04.jpg";
import * as T from "../../Components/Typography";
import * as S from "./style";
export default function Aside() {
  return (
    <S.Aside>
      <SearchForm />
      <S.Categories>
        <T.H3>Categories</T.H3>
        <div>
          <S.CategoryLink href="#">
            Web
            <S.CategorySpan>12</S.CategorySpan>
          </S.CategoryLink>
          <S.CategoryLink href="#">
            Css
            <S.CategorySpan>5</S.CategorySpan>
          </S.CategoryLink>
          <S.CategoryLink href="#">
            Wordpress
            <S.CategorySpan>24</S.CategorySpan>
          </S.CategoryLink>
          <S.CategoryLink href="#">
            Html
            <S.CategorySpan>78</S.CategorySpan>
          </S.CategoryLink>
          <S.CategoryLink href="#">
            Business<S.CategorySpan>36</S.CategorySpan>
          </S.CategoryLink>
        </div>
      </S.Categories>
      <S.RecentsPosts>
        <T.H3>Recents Posts</T.H3>
        <S.SinglePost>
          <S.SinglePostImgLink href="https://preview.colorlib.com/theme/edusite/blog-post.html">
            <S.PostImg src={blog02} alt="blog02" />
          </S.SinglePostImgLink>
          <S.PostContent>
            <a
              href="https://preview.colorlib.com/theme/edusite/blog-post.html"
              className="link"
            >
              Pro eu error molestie deserunt..
            </a>
            <p style={{ margin: "0 0 10px" }}>
              <small>By : John Doe .18 Oct, 2017</small>
            </p>
          </S.PostContent>
        </S.SinglePost>
        <S.SinglePost>
          <S.SinglePostImgLink href="https://preview.colorlib.com/theme/edusite/blog-post.html">
            <S.PostImg src={blog04} alt="blog04" />
          </S.SinglePostImgLink>
          <S.PostContent>
            <a
              href="https://preview.colorlib.com/theme/edusite/blog-post.html"
              className="link"
            >
              Pro eu error molestie deserunt.
            </a>
            <p>
              <small>By : John Doe .18 Oct, 2017</small>
            </p>
          </S.PostContent>
        </S.SinglePost>
        <S.SinglePost>
          <S.SinglePostImgLink href="https://preview.colorlib.com/theme/edusite/blog-post.html">
            <S.PostImg src={blog03} alt="blog03" />
          </S.SinglePostImgLink>
          <S.PostContent>
            <a
              href="https://preview.colorlib.com/theme/edusite/blog-post.html"
              className="link"
            >
              Pro eu error molestie deserunt.
            </a>
            <p>
              <small>By : John Doe .18 Oct, 2017</small>
            </p>
          </S.PostContent>
        </S.SinglePost>
      </S.RecentsPosts>
      <S.Tags>
        <T.H3>Tags</T.H3>
        <div>
          <S.TagLink href="#">Web</S.TagLink>
          <S.TagLink href="#">Photography</S.TagLink>
          <S.TagLink href="#">Css</S.TagLink>
          <S.TagLink href="#">Responsive</S.TagLink>
          <S.TagLink href="#">Wordpress</S.TagLink>
          <S.TagLink href="#">Html</S.TagLink>
          <S.TagLink href="#">Website</S.TagLink>
          <S.TagLink href="#">Business</S.TagLink>
        </div>
      </S.Tags>
    </S.Aside>
  );
}

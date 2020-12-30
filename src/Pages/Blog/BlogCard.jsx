import React from "react";
import * as T from "../../Components/Typography";
import styled from "styled-components";
import { BlogComment } from "../../Components/Icon";

const Card = styled.div`
  // col-md-6
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  width: 50%;
`;

const SingleBlog = styled.div`
  // single-blog
  font-family: "Montserrat", sans-serif;
  font-size: 15px;
  font-weight: 400;
  color: #798696;
  margin-bottom: 40px;
`;
const BlogImg = styled.div``;
const BlogImglink = styled.a`
  position: relative;
  display: block;
  overflow: hidden;
  &:hover {
    &::after {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
      background-color: #ff6700;
      opacity: 0.7;
      transition: 0.2s opacity;
    }
  }
`;
const Image = styled.img`
  // blog-img
  width: 100%;
  vertical-align: middle;
  border: 0;
  border-radius: 4px;
`;
const Hlink = styled.a`
  font-family: "Lato", sans-serif;
  color: #374050;
  font-weight: 700;
  text-decoration: none;
  &:hover {
    opacity: 0.7;
  }
`;
const BlogMeta = styled.div`
  margin-top: 20px;
  padding-top: 10px;
  border-top: 1px solid #ebebeb;
  font-family: "Lato", sans-serif;
  font-weight: 400;
  display: flex;
  justify-content: space-between;
`;
const SpanLink = styled.a`
  color: #ff6700;
  font-weight: 700;
  text-decoration: none;
  &:hover {
    opacity: 0.8;
  }
`;
const PullRight = styled.div``;
const BlogMetaComments = styled.span`
  margin-left: 10px;
  color: #798696;
`;
const CommentsLink = styled.a`
  color: #798696;
  text-decoration: none;
  &:hover {
    opacity: 0.8;
  }
`;
export default function BlogCard({ src }) {
  return (
    <Card>
      <SingleBlog>
        <BlogImg>
          <BlogImglink href="https://preview.colorlib.com/theme/edusite/blog-post.html">
            <Image src={src} />
          </BlogImglink>
        </BlogImg>
        <T.H4>
          <Hlink href="https://preview.colorlib.com/theme/edusite/blog-post.html">
            Pro eu error molestie deserunt. At per viderer bonorum persecuti.
          </Hlink>
        </T.H4>
        <BlogMeta>
          <span>
            By: <SpanLink href="#">John Doe</SpanLink>
          </span>
          <PullRight>
            <span>18 Oct, 2017</span>
            <BlogMetaComments>
              <CommentsLink href="#">
                <BlogComment /> 35
              </CommentsLink>
            </BlogMetaComments>
          </PullRight>
        </BlogMeta>
      </SingleBlog>
    </Card>
  );
}

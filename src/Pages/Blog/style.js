import styled from "styled-components";
export const Blog = styled.div`
  position: relative;
  padding-top: 80px;
  padding-bottom: 80px;
  padding-right: 15px;
  padding-left: 15px;
  /* padding: 80px 15px; */
  margin-right: 5em;
  margin-left: 5em;
  display: flex;
`;
export const BlogWrap = styled.div`
  position: relative;
  min-height: 1px;
  width: 75%;
  padding-right: 15px;
  padding-left: 15px;
`;
export const Row = styled.div`
  margin-right: -15px;
  margin-left: -15px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
export const Pagination = styled.div`
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: -15px;
  margin-left: -15px;
`;
export const PostPagination = styled.div`
  margin-top: 40px;
  text-align: center;
  display: flex;
  justify-content: space-between;
  color: #374050;
  font-family: "Lato", sans-serif;
  font-weight: 700;
`;
export const PaginationBack = styled.a`
  display: flex;
  align-items: center;
  border-radius: 40px;
  background-color: #ebebeb;
  transition: 0.2s all;
  height: 40px;
  padding: 0px 30px;
  line-height: 40px;
  /* font-family: "Lato", sans-serif;
  font-weight: 700; */
  &:hover {
    color: #fff;
    background-color: #ff6700;
    text-decoration: none;
    outline: none;
    opacity: 0.9;
  }
`;
export const PagList = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding-left: 0px;
  width: 23%;
  &:first-child {
    &:active {
      background-color: #ff6700;
      color: #fff;
    }
  }
`;
export const PagNumber = styled.li`
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border-radius: 50%;
  background-color: #ebebeb;
  transition: 0.2s all;
  &:hover {
    color: #fff;
    background-color: #ff6700;
    text-decoration: none;
    outline: none;
    opacity: 0.9;
  }
`;
export const PagNumberLink = styled.a`
  transition: 0.2s color;
  font-family: "Lato", sans-serif;
  color: #374050;
  font-weight: 700;
  text-decoration: none;
`;
// Right:
export const Aside = styled.div`
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  width: 25%;
`;
export const Categories = styled.div`
  margin-top: 40px;
`;
export const CategoryLink = styled.a`
  display: block;
  text-transform: uppercase;
  padding-top: 10px;
  padding-bottom: 10px;
  font-family: "Lato", sans-serif;
  font-size: 15px;
  line-height: 1.42857143;
  color: #374050;
  font-weight: 700;
  text-decoration: none;
  border-bottom: 1px solid #ebebeb;
  &:last-child {
    border-bottom: none;
  }
  &::before {
    content: "";
    display: inline-block;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: #ff6700;
    margin-right: 10px;
  }
  &:hover {
    opacity: 0.9;
    outline: none;
  }
`;
export const CategorySpan = styled.span`
  font-size: 14px;
  margin-left: 10px;
  color: #798696;
  font-family: "Lato", sans-serif;
  font-size: 15px;
  line-height: 1.42857143;
`;
export const RecentsPosts = styled.div`
  margin-top: 40px;
`;
export const SinglePost = styled.div`
  display: flex;
  margin-top: 20px;
`;
export const SinglePostImgLink = styled.a`
  position: relative;
  width: 80px;
  margin-right: 10px;
  margin-top: 3px;
  overflow: hidden;
  display: block;
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
export const PostImg = styled.img`
  width: 100%;
  vertical-align: middle;
  border: 0;
  border-radius: 4px;
`;
export const PostContent = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Tags = styled.div`
  margin-top: 40px;
`;
export const TagLink = styled.a`
  display: inline-block;
  font-size: 14px;
  text-transform: uppercase;
  margin-right: 5px;
  margin-top: 5px;
  padding: 5px 15px;
  border-radius: 40px;
  border: 1px solid #ebebeb;
  color: #798696;
  transition: 0.2s all;
  font-family: "Lato", sans-serif;
  text-decoration: none;
  &:hover {
    background-color: #ff6700;
    border-color: #ff6700;
    color: #fff;
  }
`;

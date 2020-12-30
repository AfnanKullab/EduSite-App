import React from "react";
import NavBar from "../../Components/NavBar";
import HeroArea from "../../Components/HeroArea";
import BlogCard from "./BlogCard";
import Aside from "./Aside";
import Footer from "../../Components/Footer";
import blog01 from "../../images/blog01.jpg";
import blog02 from "../../images/blog02.jpg";
import blog03 from "../../images/blog03.jpg";
import blog04 from "../../images/blog04.jpg";
import { Back, Next } from "../../Components/Icon";
import * as S from "./style";
import "../../App.css";
export default function Blog() {
  return (
    <div className="blog">
      <NavBar />
      <HeroArea title="Blog Page" subTitle="Blog" />
      <S.Blog>
        <S.BlogWrap>
          <S.Row>
            <BlogCard src={blog01} alt="blog01" />
            <BlogCard src={blog02} alt="blog02" />
            <BlogCard src={blog03} alt="blog03" />
            <BlogCard src={blog04} alt="blog04" />
          </S.Row>
          <S.Pagination>
            <S.PostPagination>
              <S.PaginationBack>
                <Back />
                Back
              </S.PaginationBack>
              <S.PagList>
                <S.PagNumber>
                  <S.PagNumberLink href="#">1</S.PagNumberLink>
                </S.PagNumber>
                <S.PagNumber>
                  <S.PagNumberLink href="#">2</S.PagNumberLink>
                </S.PagNumber>
                <S.PagNumber>
                  <S.PagNumberLink href="#">3</S.PagNumberLink>
                </S.PagNumber>
                <S.PagNumber>
                  <S.PagNumberLink href="#">4</S.PagNumberLink>
                </S.PagNumber>
              </S.PagList>
              <S.PaginationBack>
                Next
                <Next />
              </S.PaginationBack>
            </S.PostPagination>
          </S.Pagination>
        </S.BlogWrap>
        <Aside />
      </S.Blog>
      <Footer />
    </div>
  );
}

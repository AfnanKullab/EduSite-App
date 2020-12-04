import React from "react";
import * as S from "./style";
import * as I from "../Icon/index";
import course01 from "../../images/course01.jpg";
import course02 from "../../images/course02.jpg";
import course03 from "../../images/course03.jpg";
import course04 from "../../images/course04.jpg";
import course05 from "../../images/course05.jpg";
import course06 from "../../images/course06.jpg";
import course07 from "../../images/course07.jpg";
import course08 from "../../images/course08.jpg";

export default function CourseCard() {
  return (
    <S.CardWrapper>
      <S.Card>
        <S.Course>
          <S.CourseLink>
            <S.CourseImg src={course01} alt="course01" />
            <I.CourseLinkIcon />
          </S.CourseLink>
          <S.CourseTitle>
            Beginner to Pro in Excel: Financial Modeling and Valuation
          </S.CourseTitle>
          <S.CourseDetails>
            <S.CourseCategory>Business</S.CourseCategory>
            <S.CourseFree>Free</S.CourseFree>
          </S.CourseDetails>
        </S.Course>
      </S.Card>

      <S.Card>
        <S.Course>
          <S.CourseLink>
            <S.CourseImg src={course02} alt="course02" />
            <I.CourseLinkIcon />
          </S.CourseLink>
          <S.CourseTitle>Introduction to CSS </S.CourseTitle>
          <S.CourseDetails>
            <S.CourseCategory>Web Design</S.CourseCategory>
            <S.CoursePremium>Premium</S.CoursePremium>
          </S.CourseDetails>
        </S.Course>
      </S.Card>

      <S.Card>
        <S.Course>
          <S.CourseLink>
            <S.CourseImg src={course03} alt="course03" />
            <I.CourseLinkIcon />
          </S.CourseLink>
          <S.CourseTitle>
            The Ultimate Drawing Course | From Beginner To Advanced
          </S.CourseTitle>
          <S.CourseDetails>
            <S.CourseCategory>Drawing</S.CourseCategory>
            <S.CoursePremium>Premium</S.CoursePremium>
          </S.CourseDetails>
        </S.Course>
      </S.Card>

      <S.Card>
        <S.Course>
          <S.CourseLink>
            <S.CourseImg src={course04} alt="course04" />
            <I.CourseLinkIcon />
          </S.CourseLink>
          <S.CourseTitle>The Complete Web Development Course</S.CourseTitle>
          <S.CourseDetails>
            <S.CourseCategory>Web Development</S.CourseCategory>
            <S.CourseFree>Free</S.CourseFree>
          </S.CourseDetails>
        </S.Course>
      </S.Card>

      <S.Card>
        <S.Course>
          <S.CourseLink>
            <S.CourseImg src={course05} alt="course05" />
            <I.CourseLinkIcon />
          </S.CourseLink>
          <S.CourseTitle>PHP Tips, Tricks, and Techniques</S.CourseTitle>
          <S.CourseDetails>
            <S.CourseCategory>Web Development</S.CourseCategory>
            <S.CourseFree>Free</S.CourseFree>
          </S.CourseDetails>
        </S.Course>
      </S.Card>

      <S.Card>
        <S.Course>
          <S.CourseLink>
            <S.CourseImg src={course06} alt="course06" />
            <I.CourseLinkIcon />
          </S.CourseLink>
          <S.CourseTitle>All You Need To Know About Web Design</S.CourseTitle>
          <S.CourseDetails>
            <S.CourseCategory>Web Design</S.CourseCategory>
            <S.CourseFree>Free</S.CourseFree>
          </S.CourseDetails>
        </S.Course>
      </S.Card>

      <S.Card>
        <S.Course>
          <S.CourseLink>
            <S.CourseImg src={course07} alt="course07" />
            <I.CourseLinkIcon />
          </S.CourseLink>
          <S.CourseTitle>How to Get Started in Photography</S.CourseTitle>
          <S.CourseDetails>
            <S.CourseCategory>Photography</S.CourseCategory>
            <S.CourseFree>Free</S.CourseFree>
          </S.CourseDetails>
        </S.Course>
      </S.Card>

      <S.Card>
        <S.Course>
          <S.CourseLink>
            <S.CourseImg src={course08} alt="course08" />
            <I.CourseLinkIcon />
          </S.CourseLink>
          <S.CourseTitle>Typography From A to Z</S.CourseTitle>
          <S.CourseDetails>
            <S.CourseCategory>Typography</S.CourseCategory>
            <S.CourseFree>Free</S.CourseFree>
          </S.CourseDetails>
        </S.Course>
      </S.Card>
    </S.CardWrapper>
  );
}

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFlask,
  faUsers,
  faComments,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import * as S from "./style";

export const Flask = () => {
  return (
    <S.FeatureIcon>
      <FontAwesomeIcon icon={faFlask} />
    </S.FeatureIcon>
  );
};
export const Users = () => {
  return (
    <S.FeatureIcon>
      <FontAwesomeIcon icon={faUsers} />
    </S.FeatureIcon>
  );
};
export const Comments = () => {
  return (
    <S.FeatureIcon>
      <FontAwesomeIcon icon={faComments} />;
    </S.FeatureIcon>
  );
};
export const CourseLinkIcon = () => {
  return (
    <S.CourseLinkIcon>
      <FontAwesomeIcon icon={faLink} />;
    </S.CourseLinkIcon>
  );
};

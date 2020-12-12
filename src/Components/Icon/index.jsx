import React from "react";
// import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFlask,
  faUsers,
  faComments,
  faLink,
  faPlay,
  faEnvelope,
  faPhoneAlt,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faGooglePlusG,
  faInstagram,
  faYoutube,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
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
export const Play = () => {
  return (
    <S.Play>
      <FontAwesomeIcon icon={faPlay} />
    </S.Play>
  );
};
// Socialmedia Icons
export const Facebook = () => {
  return (
    <S.Facebook>
      <FontAwesomeIcon icon={faFacebookF} />
    </S.Facebook>
  );
};
export const Twitter = () => {
  return (
    <S.Twitter>
      <FontAwesomeIcon icon={faTwitter} />
    </S.Twitter>
  );
};
export const GooglePlus = () => {
  return (
    <S.GooglePlus>
      <FontAwesomeIcon icon={faGooglePlusG} />
    </S.GooglePlus>
  );
};
export const Instagram = () => {
  return (
    <S.Instagram>
      <FontAwesomeIcon icon={faInstagram} />
    </S.Instagram>
  );
};
export const Youtube = () => {
  return (
    <S.Youtube>
      <FontAwesomeIcon icon={faYoutube} />
    </S.Youtube>
  );
};
export const LinkedinIn = () => {
  return (
    <S.LinkedIn>
      <FontAwesomeIcon icon={faLinkedinIn} />
    </S.LinkedIn>
  );
};
export const Envelope = () => {
  return (
    <S.ContactIcons>
      <FontAwesomeIcon icon={faEnvelope} />
    </S.ContactIcons>
  );
};
export const Phone = () => {
  return (
    <S.ContactIcons>
      <FontAwesomeIcon icon={faPhoneAlt} />
    </S.ContactIcons>
  );
};
export const MapMarker = () => {
  return (
    <S.ContactIcons>
      <FontAwesomeIcon icon={faMapMarkerAlt} />
    </S.ContactIcons>
  );
};

import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
import Form from "./Form";
import * as S from "./style";
import * as T from "../Typography";
import * as I from "../Icon";
import "../../App.css";
export default function ContactForm() {
  return (
    <S.FormWrapper>
      <S.Container>
        <S.Row>
          <S.LeftForm>
            <T.H4>Send A Message</T.H4>
            <Form />
          </S.LeftForm>
          <S.RightForm>
            <T.H4>Contact Information</T.H4>
            <S.ContactList>
              <S.Items>
                <I.Envelope />
                Educate@email.com
              </S.Items>
              <S.Items>
                <I.Phone />
                122-547-223-45
              </S.Items>
              <S.Items>
                <I.MapMarker />
                4476 Clement Street
              </S.Items>
            </S.ContactList>
            <MapContainer
              center={[31.5086271, 34.4309158]}
              zoom={5}
              scrollWheelZoom={false}
              className="map"
              style={{ position: "unset" }}
            >
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
            </MapContainer>
          </S.RightForm>
        </S.Row>
      </S.Container>
    </S.FormWrapper>
  );
}

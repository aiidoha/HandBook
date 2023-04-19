import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn,
} from "mdb-react-ui-kit";
import "../components/general.css";
import insta from "../assets/insta.png";
import git from "../assets/git.png";
import tg from "../assets/tg.png";
const Footer = () => {
  return (
    <div>
      <>
        <MDBFooter
          id="foot"
          className="text-center"
          color="white"
          bgColor="dark"
        >
          <MDBContainer className="p-4">
            <section className="mb-4">
              <img className="imgIcons" src={insta} alt="insta" />
              <img className="imgIcons" src={git} alt="git" />
              <img className="imgIcons" src={tg} alt="tg" />
            </section>

            <section className="">
              <form action="">
                <MDBRow className="d-flex justify-content-center">
                  <MDBCol size="auto">
                    <p className="pt-2">
                      <strong>Here is your e-mail address</strong>
                    </p>
                  </MDBCol>

                  <MDBCol md="5" start>
                    <MDBInput
                      contrast
                      type="email"
                      label="Email address"
                      className="mb-4"
                    />
                  </MDBCol>

                  <MDBCol size="auto">
                    <MDBBtn
                      outline
                      color="light"
                      type="submit"
                      className="mb-4"
                    >
                      Subscribe
                    </MDBBtn>
                  </MDBCol>
                </MDBRow>
              </form>
            </section>
          </MDBContainer>

          <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © 2020 Copyright:
            <a className="text-white" href="https://mdbootstrap.com/">
              aidainadyrbekova
            </a>
          </div>
        </MDBFooter>
      </>
    </div>
  );
};

export default Footer;

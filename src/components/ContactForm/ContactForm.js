import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Formik, Field } from "formik";
import parse from "html-react-parser";

import Image from "../Image/Image";

import {
  StyledContactForm,
  StyledTitleWrapper,
  StyledErrorMessage,
  StyledCustomCheckbox,
  StyledInputWrapper,
  StyledSubmit,
  StyledIconTitle,
} from "./StyledContactForm";

import { initialState, contactSchema } from "./form.constants";

const ContactForm = () => {
  const data = useStaticQuery(graphql`
    query contactQueryForm {
      wpPage(id: { eq: "cG9zdDoxOA==" }) {
        global {
          formularzKontaktowy {
            emailLabel
            imieLabel
            tekstWPrzycisku
            trescWiadomosciLabel
            tytul
            wyrazamZgodeLabel
            formIcon {
              altText
              title
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
        }
      }
    }
  `);

  const shortData = data.wpPage.global.formularzKontaktowy;

  const handleSubmit = () => {
    console.log("elo");
  };

  return (
    <StyledContactForm>
      <Formik
        initialValues={initialState}
        validationSchema={contactSchema}
        onSubmit={handleSubmit}
        validateOnChange={false}
        validateOnBlur={false}
      >
        {({ errors, values, handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            <StyledTitleWrapper>
              <StyledIconTitle>
                <Image imageDesktop={shortData.formIcon} />
              </StyledIconTitle>
              {shortData.tytul ? parse(shortData.tytul) : null}
            </StyledTitleWrapper>
            <StyledInputWrapper iserror={errors.firstName}>
              <label htmlFor="firstName">{shortData.imieLabel}</label>
              <Field type="text" name="firstName" id="firstName" />
              <StyledErrorMessage
                iserror={errors.firstName}
                name="firstName"
                component="div"
              />
            </StyledInputWrapper>
            <StyledInputWrapper iserror={errors.email}>
              <label htmlFor="email">{shortData.emailLabel}</label>
              <Field type="email" name="email" id="email" />
              <StyledErrorMessage
                iserror={errors.email}
                name="email"
                component="div"
              />
            </StyledInputWrapper>
            <StyledInputWrapper iserror={errors.message}>
              <label htmlFor="message">{shortData.trescWiadomosciLabel}</label>
              <Field as="textarea" id="message" name="message" />
              <StyledErrorMessage
                iserror={errors.message}
                name="message"
                component="div"
              />
            </StyledInputWrapper>
            <StyledCustomCheckbox
              iserror={errors.termsAndConditions}
              value={values.termsAndConditions}
            >
              <Field
                type="checkbox"
                name="termsAndConditions"
                id="termsAndConditions"
              />
              <label htmlFor="termsAndConditions">
                {/* ikonka */}
                {shortData.wyrazamZgodeLabel
                  ? parse(shortData.wyrazamZgodeLabel)
                  : null}
              </label>
            </StyledCustomCheckbox>
            <StyledSubmit type="submit" disabled={isSubmitting}>
              {shortData.tekstWPrzycisku}
            </StyledSubmit>
          </form>
        )}
      </Formik>
    </StyledContactForm>
  );
};

export default ContactForm;

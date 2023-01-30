import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Formik, Field } from "formik";
import parse from "html-react-parser";
import axios from "axios";

import {
  StyledContactForm,
  StyledTitleWrapper,
  StyledErrorMessage,
  StyledCustomCheckbox,
  StyledInputWrapper,
  StyledSubmit,
  StyledIconTitle,
  StyledSuccessMessage,
} from "./StyledContactForm";
import { StyledText } from "../Text/StyledText"

import { initialState, contactSchema } from "./form.constants";

const ContactForm = () => {
  const [isSend, setIsSend] = useState(false);
  const [isError, setIsError] = useState(false);
  
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
            trescWiadomoscPoPoprawnymWyslaniu
          }
        }
      }
    }
  `);

  const shortData = data.wpPage.global.formularzKontaktowy;

  const handleSubmit = async (data, { setSubmitting, resetForm }) => {
    setSubmitting(true);
    const formData = new FormData();

    for (let field of Object.keys(data)) {
      formData.append(field, data[field]);
    }

    try {
      await axios.post(
        `${process.env.GATSBY_WORDPRESS_URL}/wp-json/contact-form-7/v1/contact-forms/${process.env.GATSBY_WORDPRESS_FORM_ID}/feedback`,
        formData
      );
      setIsError(false);
      setSubmitting(false);
      setIsSend(true);
      resetForm();
    } catch (err) {
      setSubmitting(false);
      setIsSend(false);
      setIsError(true);
      console.error("handleSubmit", err);
    }
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
                <svg width="81" height="64" viewBox="0 0 81 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.1" d="M38.9844 0V18.4062C38.9844 23.6536 37.9753 29.0625 35.957 34.6328C34.0195 40.2031 31.3958 45.4909 28.0859 50.4961C24.776 55.4206 21.1432 59.6185 17.1875 63.0898L0.839844 53.6445C3.82682 48.8815 6.36979 43.7148 8.46875 38.1445C10.5677 32.4935 11.6172 25.9544 11.6172 18.5273V0H38.9844ZM80.7617 0V18.4062C80.7617 23.6536 79.7526 29.0625 77.7344 34.6328C75.7969 40.2031 73.1732 45.4909 69.8633 50.4961C66.5534 55.4206 62.9206 59.6185 58.9648 63.0898L42.6172 53.6445C45.6042 48.8815 48.1471 43.7148 50.2461 38.1445C52.3451 32.4935 53.3945 25.9544 53.3945 18.5273V0H80.7617Z" fill="#203533"/>
                </svg>
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
                <span>&#10003;</span>
                {shortData.wyrazamZgodeLabel
                  ? parse(shortData.wyrazamZgodeLabel)
                  : null}
              </label>
            </StyledCustomCheckbox>
            <StyledSubmit type="submit" disabled={isSubmitting} aria-label="submit">
              {shortData.tekstWPrzycisku}
            </StyledSubmit>
            {isSend ? (
              <StyledSuccessMessage>
                {shortData.trescWiadomoscPoPoprawnymWyslaniu
                  ? parse(shortData.trescWiadomoscPoPoprawnymWyslaniu)
                  : null}
              </StyledSuccessMessage>
            ) : null}
            {isError ?
              <StyledSuccessMessage>
                <StyledText hasdeclaredfontsize="18px" hasdeclaredfontcolor="var(--errorColor)">
                  Wystąpił problem podczas wysyłania formularza.
                </StyledText>
              </StyledSuccessMessage> 
            : null}
          </form>
        )}
      </Formik>
    </StyledContactForm>
  );
};

export default ContactForm;

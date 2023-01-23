import * as Yup from "yup";

export const initialState = {
  firstName: "",
  email: "",
  message: "",
  termsAndConditions: false,
};

export const contactSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(3, "Imię powinno mieć 3-30 znaków.")
    .required("Wprowadź swoje imię")
    .max(30, "Imię powinno mieć 3-30 znaków."),
  email: Yup.string()
    .email("Proszę o podanie poprawnego adresu E-mail.")
    .required("Wprowadź prawidłowy adres e-mail."),
  message: Yup.string()
    .required("Wprowadź tekst ")
    .max(1200, "Wiadomość zbyt długa (maks. 1200 znaków)."),
  termsAndConditions: Yup.bool()
    .required("Akceptacja polityki prywatności jest wymagana.")
    .oneOf([true], "Akceptacja polityki prywatności jest wymagana."),
});

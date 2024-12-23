import * as Yup from "yup";
export const validationSchemas = [
  Yup.object({
    runningCategory: Yup.string().required("This field is required"),
    firstName: Yup.string()
      .required("This field is required")
      .min(3, "Name should not be less than 3 characters"),
    lastName: Yup.string()
      .required("This field is required")
      .min(2, "Name should not be less than 2 characters"),
    mobile: Yup.string()
      .required("This field is required")
      .matches(/^[6-9]\d{9}$/, "Please provide a Valid mobile number"),
    email: Yup.string()
      .email("Invalid email")
      .required("This field is required"),
    gender: Yup.string().required("This field is required"),
    dateOfBirth: Yup.date().required("This field is required"),
    tShirtSize: Yup.string().required("This field is required"),
    city: Yup.string().required("This field is required"),
    state: Yup.string().required("This field is required"),
  }),
  Yup.object({
    bloodGroup: Yup.string().required("This field is required"),
    bibName: Yup.string().required("This field is required"),
    runningClub: Yup.string().required("This field is required"),
    emergencyContactName: Yup.string().required("This field is required"),
    emergencyContactRelation: Yup.string().required("This field is required"),
    emergencyContactNumber: Yup.string()
      .required("This field is required")
      .matches(/^[6-9]\d{9}$/, "Please provide a Valid mobile number"),
  }),
  Yup.object({
    cardiovascularDisease: Yup.string().required("This field is required"),
    medicalSupervision: Yup.string().required("This field is required"),
    pregnancyRisk: Yup.string().required("This field is required"),
    asthma: Yup.string().required("This field is required"),
    dizziness: Yup.string().required("This field is required"),
    chestPain: Yup.string().required("This field is required"),
    chronicIllness: Yup.string().required("This field is required"),
    otherMedicalConditions: Yup.string(),
  }),
  Yup.object({
    timingCertificates: Yup.string()
      .url("Must be a valid URL")
      .required("This field is required"),
    waiverAcknowledgement: Yup.boolean().oneOf(
      [true],
      "You must acknowledge the waiver form"
    ),
    joinClub: Yup.boolean(),
  }),
];
export const initialValues = {
  runningCategory: "",
  firstName: "",
  lastName: "",
  mobile: "",
  email: "",
  gender: "",
  dateOfBirth: "",
  tShirtSize: "",
  city: "",
  state: "",
  bloodGroup: "",
  bibName: "",
  runningClub: "",
  emergencyContactName: "",
  emergencyContactRelation: "",
  emergencyContactNumber: "",
  cardiovascularDisease: "",
  medicalSupervision: "",
  pregnancyRisk: "",
  asthma: "",
  dizziness: "",
  chestPain: "",
  chronicIllness: "",
  otherMedicalConditions: "",
  timingCertificates: "",
  waiverAcknowledgement: false,
  joinClub: false,
};

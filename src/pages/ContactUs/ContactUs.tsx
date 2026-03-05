import { Helmet } from "react-helmet";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactHeader from "../../components/ContactHeader/ContactHeader";

const ContactUs = () => {
  return (
    <>
      <Helmet>
        <title>Contact Pride MMA | MMA Gym in Whitefield Bangalore</title>

        <meta
          name="description"
          content="Contact Pride MMA gym in Whitefield Bangalore for MMA training, fitness classes, and membership details. Visit our gym or get in touch with our trainers today."
        />
      </Helmet>
      <ContactHeader />
      <ContactForm />
    </>
  );
};

export default ContactUs;

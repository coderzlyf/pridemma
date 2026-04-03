import { Helmet } from "react-helmet";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactHeader from "../../components/ContactHeader/ContactHeader";

const ContactUs = () => {
  return (
    <>
      <Helmet>
        <title>
          Contact Pride MMA | MMA Gym in Horamavu & Whitefield Bangalore
        </title>
        <meta
          name="description"
          content="Contact Pride MMA for MMA, boxing, fitness, and self-defense training in Bangalore. Visit our Horamavu and Whitefield branches."
        />
      </Helmet>
      <ContactHeader />
      <ContactForm />
    </>
  );
};

export default ContactUs;

import "./Contact.css";
import msgIcon from "../assets/edusity/msg-icon.png";
import mail from "../assets/edusity/mail-icon.png";
import phone from "../assets/edusity/phone-icon.png";
import location from "../assets/edusity/location-icon.png";
import React from "react";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "ac0d29f4-db7c-4c2e-8767-cf9bee9f7ac1");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send Message <img src={msgIcon} alt="" />
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          dicta eos commodi consequatur voluptatem id ad velit, illum odio
          doloribus? Assumenda tempora quia veritatis esse dolores tempore
          impedit beatae hic.
        </p>
        <ul>
          <li>
            {" "}
            <img src={mail}></img>dagi@gmail.com
          </li>
          <li>
            {" "}
            <img src={phone}></img> +251 927610843
          </li>
          <li>
            {" "}
            <img src={location}></img>Bahirdar infront of soliyana hotel
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            required
          ></input>
          <label>Your Phone</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter Your phone"
            required
          ></input>
          <label>Write Your Message</label>
          <textarea name="msg" id="msg"></textarea>
          <button className="btn dark-btn">Submit</button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;

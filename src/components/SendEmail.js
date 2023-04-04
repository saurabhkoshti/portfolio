import Button from "../components/Button";

const SendEmail = () => {
  function sendEmail() {
    window.open(
      "mailto:skoshti.1409@gmail.com?subject=SendMail&body=Description"
    );
  }
  return (
    <Button className="sendemail-btn" onClick={sendEmail}>
      Send Email
    </Button>
  );
};

export default SendEmail;

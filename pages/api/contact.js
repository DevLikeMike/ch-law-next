// Lib requires
const SibApiV3Sdk = require("sib-api-v3-sdk");
let defaultClient = SibApiV3Sdk.ApiClient.instance;

// Set API key
let apiKey = defaultClient.authentications["api-key"];
apiKey.apiKey = process.env.EMAILAPI;

// Set instance
let apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

// Declarations for smtp
let sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

export default async (req, res) => {
  // Check method to be POST
  if (req.method === "POST") {
    // Destruct the request body information
    const { firstName, lastName, phone, email, message } = req.body;

    try {
      // Build the email
      sendSmtpEmail.subject = `${firstName} ${lastName} - ${phone}`;
      sendSmtpEmail.htmlContent = `<html><body><p>New Form Submission from your site</p>
      <p><strong>First Name: </strong> ${firstName} </p>
      <p><strong>Last Name: </strong> ${lastName} </p>
      <p><strong>Phone: </strong> ${phone} </p>
      <p><strong>Message: </strong> ${message} </p></body></html>`;
      sendSmtpEmail.sender = { name: `${firstName}`, email: `${email}` };
      sendSmtpEmail.to = [{ email: `${process.env.user}` }];

      // Await the sendEmail function
      const emailRes = await apiInstance.sendTransacEmail(sendSmtpEmail).then(
        function (data) {
          console.log(
            "API called successfully. Returned data: " + JSON.stringify(data)
          );

          // Status response if successfully sent
          res.status(200).json({ message: `Message Sent` });
        },
        function (error) {
          console.error(error);

          // Status response for bad request
          res.status(400).json({ message: "Bad Response" });
        }
      );
    } catch (error) {
      console.log(error);
    }
  } else {
    // Only allow post methods
    res.setHeader("Allow", ["POST"]);

    // Status
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
};

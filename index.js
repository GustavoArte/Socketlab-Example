require('dotenv').config(); // Carga las variables del archivo .env

const { SocketLabsClient, BulkMessage, BulkRecipient } = require('@socketlabs/email');

const client = new SocketLabsClient(parseInt(process.env.SOCKETLABS_SERVER_ID), process.env.SOCKETLABS_INJECTION_API_KEY);

let bulkMessage = new BulkMessage();

const trackingId = "SampleMessageId"; // Este ID debe ser único para cada correo

const textBody = `
VV        VV  LLLLLL     EEEEEEEE  SSSSSS   IIIIII  M     M
 VV      VV   LL         EE        SS         II    MM   MM
  VV    VV    LL         EEEEEEEE  SSSSSS     II    M M M M
   VV  VV     LL         EE            SS     II    M  M  M
    VVVV      LLLLLL     EEEEEEEE  SSSSSS   IIIIII  M     M

Visita nuestra página: https://vlesim.com?trackingId=${trackingId}
`;

const htmlBody = `
<pre style="font-family: monospace;">
VV        VV  LLLLLL     EEEEEEEE  SSSSSS   IIIIII  M     M
 VV      VV   LL         EE        SS         II    MM   MM
  VV    VV    LL         EEEEEEEE  SSSSSS     II    M M M M
   VV  VV     LL         EE            SS     II    M  M  M
    VVVV      LLLLLL     EEEEEEEE  SSSSSS   IIIIII  M     M
</pre>
<p>Visita nuestra página: <a href="https://vlesim.com?trackingId=${trackingId}">https://vlesim.com/</a></p>
`;
bulkMessage.textBody = textBody;
bulkMessage.htmlBody = htmlBody;
bulkMessage.subject = "VLESIM Mailing";
bulkMessage.setFrom("from@sandbox.socketlabs.dev"); // Usa setFrom para asignar el remitente

// Lista de destinatarios
const recipients = [
    // "dvnstevenb@gmail.com",
    // "hozkar178@gmail.com",
    // "javierrevelof@gmail.com",
    "didiervillaquiran934@gmail.com",
    // "gustavoarteaga0508@gmail.com",
    // "support@vlesim.com"
];

// Añadir destinatarios al mensaje
recipients.forEach(email => {
    let recipient = new BulkRecipient(email);
    bulkMessage.to.push(recipient);
});

client.send(bulkMessage).then(response => {
    console.log('Email sent successfully:', response);
}).catch(error => {
    console.error('Error sending email:', error);
});

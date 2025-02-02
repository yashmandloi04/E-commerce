const router = require('express').Router()
const puppeteer = require('puppeteer')
const path = require('path')
const Orders = require('../Models/OrderModel')
const AdmZip = require('adm-zip');
let PDF;

router.get('/:orderId', async (req, res) => {
  let response = await Orders.findOne({ _id: req.params.orderId }).populate('user_id').populate('product_id').exec()
  let product_info = response.product_id;
  let user_info = response.user_id;
  let order_info = response
  let orderDate = new Date(order_info.order_date).getDate() + "/" + (new Date(order_info.order_date).getMonth() + 1) + "/" + new Date(order_info.order_date).getFullYear();
  let subTotal = (product_info.price - (product_info.price * product_info.discount / 100));
  let taxGst = subTotal + ((subTotal * 18) / 100)

  const htmlContent = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <style>
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap");
        /* @media print { */
        body {
          display: flex;
          justify-self: center;
          justify-items: center;
          align-items: center;
          flex-direction: column;
          width: 90%;
          font-family: "Inter";
        }
        .col-2 {
          width: 100%;
          display: flex;
          justify-content: space-between;
        }
        .col-2 h2:first-child {
          font-weight: 500;
          color: #3d4d88;
        }
        .invoice-details {
          border-collapse: collapse;
        }
        .invoice-details tr th {
          text-align: right;
          padding-right: 20px;
        }
        .invoice-details tr td {
          text-align: center;
          border: 1px solid black;
          padding: 8px;
        }
        .heading-color {
          background-color: #3b4d88;
          color: white;
          font-weight: 600;
          padding: 3px 0 3px 20px;
          width: 250px;
        }
        .padding-left-20 {
          padding-left: 20px;
        }
        .invoice-item {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
          font-size: 16px;
          margin-top: 20px;
          border: 2px solid black;
        }
        .invoice-item th {
          background-color: rgb(59, 77, 136);
          color: white;
          padding: 3px;
          border: 1px solid rgb(59, 77, 136);
        }
        .invoice-item tr th:first-child {
          padding-left: 18px;
        }
        .invoice-item td {
          padding: 3px;
          border: 1px solid rgb(221, 221, 221);
        }
        .invoice-item tr:nth-child(even) {
          background-color: rgb(242, 242, 242);
        }
        .invoice-item tr:nth-child(odd):not(:first-child) {
          background-color: rgb(255, 255, 255);
        }
        .calculated-price {
          width: 300px;
        }
        .calculated-price td {
          padding: 0;
        }
        .calculated-price .cal-heading {
        }
        .calculated-price .cal-data {
          text-align: right;
        }
        /* } */
      </style>
    </head>
    <body>
      <div class="col-2">
        <h2>Famms Ltd.</h2>
        <h2 class="doc-type">INVOICE</h2>
      </div>
      <div class="col-2">
        <p class="padding-left-20">
          M.G.Road, Goregaon <br />
          Mumbai, 452001 <br />
          Phone: 1234-454-789 <br />
          Website: famms.com
        </p>
        <table class="invoice-details">
          <tr>
            <th>DATE</th>
            <td>${orderDate}</td>
          </tr>
          <tr>
            <th>INVOICE <i>#</i></th>
            <td>${order_info.invoice_id}</td>
          </tr>
          <tr>
            <th>CUSTOMER ID</th>
            <td>${user_info._id}</td>
          </tr>
          
        </table>
      </div>
      <div class="col-2">
        <div>
          <div class="heading-color">BILL TO</div>
  <p class="padding-left-20">
            ${user_info.name} <br />
            ${order_info.address} <br />
            
            ${order_info.contact}
          </p>
        </div>
      </div>
      <table class="invoice-item">
        <tr>
          <th>DESCRIPTION</th>
          <th>UNIT PRICE</th>
          <th>QTY</th>
          <th>DISCOUNT</th>
          <th>PAYMENT MODE</th>
          <th>AMOUNT</th>
        </tr>
        <tr>
          <td>${product_info.name}</td>
          <td>${product_info.price}</td>
          <td>${1}</td>
          <td>-${product_info.price * product_info.discount / 100}</td>
          <td>${order_info.mode}</td>
          <td>${subTotal}</td>
        </tr>
        
      </table>
      <div class="col-2">
        <p class="padding-left-20" style="width: 55%">
          COMMENTS: <br />
          <br />
          1. Total payment due in 30 days <br />
          2. Please include the invoice number on your check
        </p>
        <table class="calculated-price">
          <tr>
            <td>Subtotal</td>
            <td class="cal-data">${subTotal}}</td>
          </tr>
          <tr>
            <td>Taxable</td>
            <td class="cal-data">+${taxGst}</td>
          </tr>
          <tr>
            <td>Tax Rate</td>
            <td class="cal-data">${18}%</td>
          </tr>
          <tr>
            <td>Tax Due</td>
            <td class="cal-data">+${4.69}</td>
          </tr>
          <tr>
            <td>Other</td>
            <td class="cal-data">+${200}</td>
          </tr>
          <tr>
            <td>Total</td>
            <td class="cal-data" style={text-decoration: underline;text: bold;}>&#8377;${(subTotal + taxGst + 200 + 4.69).toFixed(2)}</td>
          </tr>
        </table>
      </div>
      <p style="width: 500px; text-align: center">
        If you have any questions about this invoice, Please Contact
        <b>[Yash mandloi, +91-8871569811, fammsEmart.co.in]</b><br /><b
          ><i>Thank you for your business!</i></b
        >
      </p>
    </body>
  </html>
  
  `;

  async function convertHTMLToPDF(htmlContent, outputPath) {
    const browser = await puppeteer.launch({
      args: ['--no-sandbox']
    });
    const page = await browser.newPage();

    await page.setContent(htmlContent);
    await page.pdf({
      path: outputPath,
      format: "A4",
      printBackground: true, // Ensures backgrounds are rendered
    });

    await browser.close();
  }

  const pdfToZip = (pdf)=>{

  
    let pathToZip = path.resolve() + "/assets/order-zip/" + 'Invoice_' +  order_info.invoice_id + ".zip";
  
  
    let zip = new AdmZip();
  
    zip.addLocalFile(pdf);
    zip.writeZip(pathToZip);
  }

  await convertHTMLToPDF(htmlContent, path.resolve() + "/assets/order-invoice/" + order_info.invoice_id + ".pdf");
  PDF = path.resolve() + "/assets/order-invoice/" + order_info.invoice_id + ".pdf"
  pdfToZip(PDF)
  res.send({
    fileName: order_info.invoice_id + ".pdf",
    zipName: 'Invoice_' + order_info.invoice_id + '.zip',
  })

})

module.exports = router
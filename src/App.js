
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
// import axios from 'axios'

function App() {
  let [bdsno, setBdsno] = useState('90348539/39/23/2011')
  let [bdsdoc, setBdsdoc] = useState('2011-12-10')
  let [suplier, setSuplier] = useState('')
  let [supliertax, setSupliertax] = useState('101.303.3405029034')
  let [transaction, setTransaction] = useState('other')
  let [bankname, setBankname] = useState('bca')
  let [bankacc, setBankacc] = useState('01')
  let [bankaccname, setBankaccname] = useState('PT Metrodata')
  let [paymentplandate, setPaymentplandate] = useState('2012-03-10')
  let [paiddate, setPaiddate] = useState('2012-03-10')


  const onChangebdsno = (e) => {
    const value = e.target.value;
    setBdsno(value);
  };
  const onChangebdsdoc = (e) => {
    const value = e.target.value;
    setBdsdoc(value);
  };

  const onChangesuplier = (e) => {
    const value = e.target.value;
    setSuplier(value);
  };

  const onChangesupliertax = (e) => {
    const value = e.target.value;
    setSupliertax(value);
  };

  const onChangetransaction = (e) => {
    const value = e.target.value;
    setTransaction(value);
  };

  const onChangebankname = (e) => {
    const value = e.target.value;
    setBankname(value);
  };

  const onChangebankacc = (e) => {
    const value = e.target.value;
    setBankacc(value);
  };

  const onChangebankaccname= (e) => {
    const value = e.target.value;
    setBankaccname(value);
  };

  const onChangepaymentplandate = (e) => {
    const value = e.target.value;
    setPaymentplandate(value);
  };

  const onChangepaiddate = (e) => {
    const value = e.target.value;
    setPaiddate(value);
  };

  let download =(event) =>{
      event.preventDefault();
      
      fetch('https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/pdf',
        },
      })
      .then((response) => response.blob())
      .then((blob) => {
        // Create blob link to download
        const url = window.URL.createObjectURL(
          new Blob([blob]),
        );
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute(
          'download',
          `FileName.pdf`,
        );
    
        // Append to html link element page
        document.body.appendChild(link);
    
        // Start download
        link.click();
    
        // Clean up and remove the link
        link.parentNode.removeChild(link);
      });
  }
  return (
    <div className="">
      <div className='outlined rounded border m-5'>
          <div className='bg-secondary outlined border m-0 px-5'> <h3>
              Invoice Claim</h3></div>
        
          <Row className='p-3 m-1'>
            <Form className='d-flex justify-content-flex-start'>
            <Col className='w-50 p-3 align-center'>
              <div className='d-flex align-center'>  
              <label className='m-1 w-50 '>BDS Doc No</label>
              <input type="text"className='w-50 rounded border bg-secondary p-2 pl-4' value={bdsno} onchange={onChangebdsno} name="bdsno"></input>
              </div>

              <div className='d-flex my-1'> 
              <label className='m-1 w-50'>BDS Doc Date</label>
              <input type="date" className='w-50 rounded border form-control bg-secondary p-2 pl-4' value={bdsdoc} onchange={onChangebdsdoc} name="bdsdoc"></input>
              </div>

              <div className='d-flex my-1'> <label className='m-1 w-50'>Suplier</label>
              <Form.Select className='w-50 rounded border' value={suplier} onchange={onChangesuplier} name="suplier">
                <option value="metrodata">PT Metrodata</option>
                <option value="metromini">PT Metromini</option>
                <option value="metropolitan">PT Metropolitan</option>
              </Form.Select>
              </div>

              <div className='d-flex'> 
              <label className='m-1 w-50'>Suplier Tax</label>
              <input type="text" className='w-50 rounded border bg-secondary p-2' name="Supliertax" value={supliertax} onchange={onChangesupliertax}></input>
              </div>

              <div className='d-flex my-1'>
                 <label className='m-1 w-50'>Transcation</label>
              <Form.Select className='w-50' value={transaction} onchange={onChangetransaction} name="transaction">
                <option value="other">Other</option>
                <option value="transfer">Transfer</option>
                <option value="qrcode">Scan QR Code</option>
              </Form.Select>
              </div>
            </Col>
            <Col className='w-50 p-3 align-center'> 
              <div className='align-center'> 
              <div className='d-flex my-1'> <label className='m-1 w-50'>Bank Name</label>
              <Form.Select className='w-50' name="bankname"value={bankname} onchange={onChangebankname}>
                <option value="bca">BCA</option>
                <option value="bni">BNI</option>
                <option value="btn">BTN</option>
              </Form.Select>
              </div>

              <div className='d-flex my-1'> <label className='m-1 w-50'>Bank Account</label>
              <Form.Select className='w-50' name='bankacc' value={bankacc} onchange={onChangebankacc}>
                <option value="01">12323421</option>
                <option value="02">3453453</option>
                <option value="03">3453523</option>
              </Form.Select>
              </div>

              <div className='d-flex my-1'> <label className='m-1 w-50'>Bank Account Name</label>
              <input className='m-1 w-50 border rounded bg-secondary p-2' type="text" name="bankaccname" value={bankaccname} onchange={onChangebankaccname}></input>
              </div>
              
              <div className='d-flex my-1'> <label className='m-1 w-50'>Support Doc (Invoice)</label>
              <label className='m-1 w-50 text-primary text-decoration' onClick={(event) => download(event)}> 
                <u>DOWNLOAD
                </u>
              </label>
              </div>

              <div className='d-flex my-1'> <label className='m-1 w-50'>Support Doc (Agreement)</label>
              <label className='m-1 w-50 text-primary' onClick={(event) => download(event)}> 
                <u>DOWNLOAD
                </u>
              </label>
              </div>

              <div className='d-flex my-1'> <label className='m-1 w-50'>Payment Plan Date</label>
              <input type="date" className='m-1 w-50 rounded p-2 border bg-secondary'name="paymentplandate" value={paymentplandate} onchange={onChangepaymentplandate}></input>
              </div>

              <div className='d-flex my-1'> <label className='m-1 w-50'>Paid Date</label>
              <input type="date" className='m-1 w-50 rounded border p-2 bg-secondary'name="paiddate" value={paiddate} onchange={onChangepaiddate}></input>
              </div>
              
              </div>
            </Col>
            </Form>            
          </Row>
        
      </div>
    </div>
  );
}

export default App;

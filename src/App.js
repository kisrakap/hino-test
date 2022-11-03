
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

function App() {
 
  return (
    <div className="">
      <div className='outlined rounded border m-5'>
          <div className='bg-secondary outlined border m-0 px-5'> <h3>
              Invoice Claim</h3></div>
        
          <Row className='p-3 m-1'>
            <Form className='d-flex justify-content-flex-start'>
            <Col className='w-50 p-3 align-center'>
              <div className='d-flex align-center'>  
              <label className='m-1 w-50 bg-'>BDS Doc No</label>
              <input type="text"className='w-50 rounded border bg-secondary p-2 pl-4' name="bdsno" ></input>
              </div>

              <div className='d-flex my-1'> 
              <label className='m-1 w-50'>BDS Doc Date</label>
              <input type="date" className='w-50 rounded border bg-secondary p-2 pl-4' name="bdsno" ></input>
              </div>

              <div className='d-flex my-1'> <label className='m-1 w-50'>Suplier</label>
              <Form.Select className='w-50 rounded border' >
                <option>PT Metrodata</option>
                <option>PT Metromini</option>
                <option>PT Metropolitan</option>
              </Form.Select>
              </div>

              <div className='d-flex'> 
              <label className='m-1 w-50'>Suplier Tax</label>
              <input type="text" className='w-50 rounded border bg-secondary p-2'name="Supliertax" ></input>
              </div>

              <div className='d-flex my-1'>
                 <label className='m-1 w-50'>Transcation</label>
              <Form.Select className='w-50'>
                <option>Other</option>
                <option>Transfer</option>
                <option>Scan QR Code</option>
              </Form.Select>
              </div>
            </Col>
            <Col className='w-50 p-3 align-center'> 
              <div className='align-center'> 
              <div className='d-flex my-1'> <label className='m-1 w-50'>Bank Name</label>
              <Form.Select className='w-50'>
                <option>BCA</option>
                <option>BNI</option>
                <option>BTN</option>
              </Form.Select>
              </div>

              <div className='d-flex my-1'> <label className='m-1 w-50'>Bank Account</label>
              <Form.Select className='w-50'>
                <option>12323421</option>
                <option>3453453</option>
                <option>3453523</option>
              </Form.Select>
              </div>

              <div className='d-flex my-1'> <label className='m-1 w-50'>Bank Account Name</label>
              <input className='m-1 w-50 border rounded bg-secondary p-2' type="text" name="bankaccname" ></input>
              </div>
              
              <div className='d-flex my-1'> <label className='m-1 w-50'>Support Doc (Invoice)</label>
              <label className='m-1 w-50 text-primary'> <a href={'https://drive.google.com/file/d/1MnilaKQZRxxOvI4WJ2WeXASbD89rqvwx/view?usp=sharing'}>DOWNLOAD </a> </label>
              </div>

              <div className='d-flex my-1'> <label className='m-1 w-50'>Support Doc (Agreement)</label>
              <label className='m-1 w-50 text-primary'> <a href={'https://drive.google.com/file/d/1MnilaKQZRxxOvI4WJ2WeXASbD89rqvwx/view?usp=sharing'}>DOWNLOAD </a> </label>
              </div>

              <div className='d-flex my-1'> <label className='m-1 w-50'>Payment Plan Date</label>
              <input type="date" className='m-1 w-50 rounded p-2 border bg-secondary'name="bankaccname" ></input>
              </div>

              <div className='d-flex my-1'> <label className='m-1 w-50'>Paid Date</label>
              <input type="date" className='m-1 w-50 rounded border p-2 bg-secondary'name="paiddate" ></input>
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

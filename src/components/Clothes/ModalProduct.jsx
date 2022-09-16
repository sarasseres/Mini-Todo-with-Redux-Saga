import React, { useState, useEffect } from 'react';
import { Link, Redirect, useHistory, useParams } from 'react-router-dom';
import { connect, useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Row, Col, Spinner, Button } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function ModalProduct(props) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Modal isOpen={modal} fade={false} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Do Something
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default connect(ModalProduct);

// actions

// function PaymentSubmissions(props) {
//   const dispatch = useDispatch();
//   let history = useHistory();
//   let { contest } = useParams();

//   //   console.log(dataDetail, 'GOT IT');

//   // post payment
//   const [bank, setBank] = useState('');
//   const [account, setAccount] = useState('');
//   const [evidence, setEvidence] = useState(null);
//   // const data = {
//   //   bank_provider: bank,
//   //   account_number_provider: account,
//   //   evidence: evidence
//   // }
//   // console.log(data, 'INPUT');
//   const dataPayment = useSelector((state) => state.postPaymentProvider.dataJson);
//   const loading = useSelector((state) => state.postPaymentProvider.loading);
//   const error = useSelector((state) => state.postPaymentProvider.error);
//   const submit = (e) => {
//     e.preventDefault();
//     let formData = new FormData();
//     formData.append('bank_provider', bank);
//     formData.append('account_number_provider', account);
//     formData.append('evidence', evidence);
//     console.log(formData, 'DATA');
//   };
//   if (dataPayment) {
//     // history.push(`/provider/contest/waitpayment/${contest}`);
//     // history.push(`/provider/contest`);
//   }
//   // post payment ends

//   // error
//   let errorMain, errorBank, errorAccount, errorImage;
//   if (error) {
//     if (error.id_contest) {
//       errorMain = error.id_contest.msg;
//     }
//     if (error.bank_provider) {
//       errorBank = error.bank_provider.msg;
//     }
//     if (error.account_number_provider) {
//       errorAccount = error.account_number_provider.msg;
//     }
//     if (error.evidence) {
//       errorImage = error.evidence.msg;
//     }
//   }
//   // error ends

//   return (
//     <div>
//       <Container className="formTemplate" style={{ minHeight: '750px' }} data-aos="fade">
//         <Row>
//           <Col sm="12" md={{ size: 8, offset: 2 }}>
//             <h1>Payment Submission</h1>
//             <p>{/* Amount to transfer: <b>{dataDetail ? dataDetail.prize : null}</b> */}</p>
//             <form>
//               <div className="inputContainer">
//                 <div>
//                   <label for="bank">Bank</label>
//                   <input type="text" id="bank" name="bank" placeholder="Bank" onChange={(e) => setBank(e.target.value)} className={errorBank ? 'errorInput' : null} />
//                   <p className="errorText">{errorBank ? errorBank : null}</p>
//                 </div>
//                 <div>
//                   <label for="account">Account Number</label>
//                   <input type="number" id="account" name="account" placeholder="1234567890" onChange={(e) => setAccount(e.target.value)} className={errorAccount ? 'errorInput' : null} />
//                   <p className="errorText">{errorAccount ? errorAccount : null}</p>
//                 </div>
//                 <div>
//                   <label for="evidence">Upload payment evidence</label>
//                   <input type="file" id="evidence" name="evidence" onChange={(e) => setEvidence(e.target.files[0])} className={errorImage ? 'errorInput' : null} />
//                   <p className={errorImage ? 'errorText' : 'errorTextNo'}>{errorImage ? errorImage : 'File must be jpg, jpeg, or png with maximum size of 2MB.'}</p>
//                 </div>
//               </div>
//               <p className="errorText errorPaymentSubmission">{errorMain ? errorMain : null}</p>
//               <button
//                 className="button"
//                 onClick={submit}
//                 disabled={loading ? 'true' : ''}
//                 style={{ cursor: `${loading ? 'not-allowed' : 'pointer'}`, backgroundColor: `${loading ? '#A8CC74' : '#8FBD4B'}`, marginBottom: '0', marginTop: '30px' }}
//                 title="Submit Payment Evidence"
//               >
//                 {loading ? <Spinner size="sm" color="light" className="spinner" /> : 'Submit'}
//               </button>
//               <div style={{ height: '70px', margin: '10px 0 -20px' }}>
//                 {dataPayment ? (
//                   <p className="success">
//                     <i class="fas fa-check-circle"></i>success submit your payment
//                     <br />
//                     wait until your payment approved by admin and your contest will be opened
//                   </p>
//                 ) : null}
//               </div>
//             </form>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// }

// export default connect(PaymentSubmissions);

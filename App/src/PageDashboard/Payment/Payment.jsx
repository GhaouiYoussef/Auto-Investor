import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom'; // Changed useHistory to useNavigate

import './payment.scss';
import CreditCardIcon from '@mui/icons-material/CreditCard';

function PaymentForm() {
  const navigate = useNavigate(); // Changed to useNavigate

  const handleConfirmPayment = () => {
    // Navigate to success page upon confirming payment
    navigate('/Dashboard/PaymentSuccess'); // Changed to navigate
  };
  return (
    <Card className="payment-card">
      <Card.Body>
        <Card.Title>Payment Information</Card.Title>
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your first name" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your last name" />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridCardNumber">
            <Form.Label>Credit Card Number</Form.Label>
            <Form.Control type="text" placeholder="Enter your credit card number" />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridSecurityCode">
              <Form.Label>Security Code</Form.Label>
              <Form.Control type="text" placeholder="Enter security code" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridExpiration">
              <Form.Label>Card Expiration</Form.Label>
              <Form.Control type="text" placeholder="MM/YY" />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridPaymentMethod">
            <Form.Label>Payment Method</Form.Label>
            <div>
              <Form.Check
                type="radio"
                label={<FormCheckLabel label="Credit/Debit Card" icon={<CreditCardIcon />} />}
                name="paymentMethod"
                id="creditDebitCard"
              />
              <Form.Check
                type="radio"
                label={<FormCheckLabel label="Paypal" icon={<CreditCardIcon />} />}
                name="paymentMethod"
                id="paypal"
              />
              <Form.Check
                type="radio"
                label={<FormCheckLabel label="Edinar" icon={<CreditCardIcon />} />}
                name="paymentMethod"
                id="edinar"
              />
            </div>
          </Form.Group>

          <Button variant="primary" type="button" onClick={handleConfirmPayment}>
            Confirm Payment
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}
// Custom FormCheckLabel component to include an icon
const FormCheckLabel = ({ label, icon }) => (
  <div style={{ display: 'flex', alignItems: 'center' }}>
    {icon && <span style={{ marginRight: '8px' }}>{icon}</span>}
    {label}
  </div>
);

export default PaymentForm;

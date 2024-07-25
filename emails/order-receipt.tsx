import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface Product {
  name: string;
  quantity: number;
  price: number;
}

interface OrderReceiptProps {
  orderCode: string;
  date: string;
  trackingLink: string;
  products: Product[];
  shippingPrice: number;
  tax: number;
  shippingInfo: string;
  isBillingInfoShippingInfo: boolean;
  billingInfo: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  paymentMethod: string;
  lastCreditCardDigits: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

const formatPrice = (price: number): string =>
  Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);

const calculateSubtotalPrice = (products: Product[]): number => {
  return products.reduce((total, product) => {
    return total + product.quantity * product.price;
  }, 0);
};

export const OrderReceiptEmail = ({
  date,
  orderCode,
  trackingLink,
  products,
  shippingPrice,
  tax,
  shippingInfo,
  isBillingInfoShippingInfo,
  billingInfo,
  customerEmail,
  customerName,
  customerPhone,
  paymentMethod,
  lastCreditCardDigits,
}: OrderReceiptProps) => (
  <Html>
    <Head />
    <Preview>Your RET Order Summary</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={box}>
          <Img
            src={`${baseUrl}/static/ret.png`}
            width="36"
            height="36"
            alt="React Email Template"
            style={padding}
          />
          <Heading style={title}>Receipt</Heading>
          <Text style={description}>
            For more details, please visit your{" "}
            <Link style={link} href="https://example.com">
              Orders page
            </Link>
            .
          </Text>
          <Section style={orderHeading}>
            <Row>
              <Column>
                <Text style={orderCodeStyle}>Order {orderCode}</Text>
                <Text style={dateStyle}>Date: {date}</Text>
              </Column>
              <Column align="right">
                <Button href={trackingLink} style={trackingButton}>
                  <Img
                    src={`${baseUrl}/static/truck.png`}
                    width={14}
                    height={14}
                  />
                </Button>
              </Column>
            </Row>
          </Section>
          <Section style={receipt}>
            <Section>
              <Row>
                <Column>
                  <Text style={boldStyle}>Order Details</Text>
                </Column>
              </Row>
              {products.map((product) => (
                <Row style={marginRow}>
                  <Column>
                    <Text style={mutedStyle}>
                      {product.name} x {product.quantity}
                    </Text>
                  </Column>
                  <Column align="right">
                    <Text style={resetText}>
                      {formatPrice(product.price * product.quantity)}
                    </Text>
                  </Column>
                </Row>
              ))}
            </Section>
            <Section style={marginHr}>
              <Hr />
            </Section>
            <Section>
              <Row style={marginRow}>
                <Column>
                  <Text style={mutedStyle}>Subtotal</Text>
                </Column>
                <Column align="right">
                  <Text style={resetText}>
                    {formatPrice(calculateSubtotalPrice(products))}
                  </Text>
                </Column>
              </Row>
              <Row style={marginRow}>
                <Column>
                  <Text style={mutedStyle}>Shipping</Text>
                </Column>
                <Column align="right">
                  <Text style={resetText}>{formatPrice(shippingPrice)}</Text>
                </Column>
              </Row>
              <Row style={marginRow}>
                <Column>
                  <Text style={mutedStyle}>Tax</Text>
                </Column>
                <Column align="right">
                  <Text style={resetText}>{formatPrice(tax)}</Text>
                </Column>
              </Row>
              <Row style={marginRow}>
                <Column>
                  <Text style={totalPriceStyle}>Total</Text>
                </Column>
                <Column align="right">
                  <Text style={boldStyle}>
                    {formatPrice(
                      calculateSubtotalPrice(products) + shippingPrice + tax
                    )}
                  </Text>
                </Column>
              </Row>
            </Section>
            <Section style={marginHr}>
              <Hr />
            </Section>
            <Section>
              <Row style={marginRow}>
                <Column style={columnLeft}>
                  <Text style={boldStyle}>Shipping Information</Text>
                  <Text style={shippingAndBillingStyle}>{shippingInfo}</Text>
                </Column>
                <Column style={columnRight}>
                  <Text style={boldStyle}>Billing Information</Text>
                  <Text style={shippingAndBillingStyle}>
                    {isBillingInfoShippingInfo
                      ? "Same as shipping address"
                      : billingInfo}
                  </Text>
                </Column>
              </Row>
            </Section>
            <Section style={marginHr}>
              <Hr />
            </Section>
            <Section>
              <Row style={marginRow}>
                <Column>
                  <Text style={boldStyle}>Customer Information</Text>
                </Column>
              </Row>
              <Row style={marginRow}>
                <Column>
                  <Text style={mutedStyle}>Customer</Text>
                </Column>
                <Column align="right">
                  <Text style={resetText}>{customerName}</Text>
                </Column>
              </Row>
              <Row style={marginRow}>
                <Column>
                  <Text style={mutedStyle}>Email</Text>
                </Column>
                <Column align="right">
                  <Text style={resetText}>{customerEmail}</Text>
                </Column>
              </Row>
              <Row style={marginRow}>
                <Column>
                  <Text style={mutedStyle}>Phone</Text>
                </Column>
                <Column align="right">
                  <Text style={resetText}>{customerPhone}</Text>
                </Column>
              </Row>
            </Section>
            <Section style={marginHr}>
              <Hr />
            </Section>
            <Section>
              <Row style={marginRow}>
                <Column>
                  <Text style={boldStyle}>Payment Information</Text>
                </Column>
              </Row>
              <Row style={marginRow}>
                <Column>
                  <Text style={mutedStyle}>{paymentMethod}</Text>
                </Column>
                <Column align="right">
                  <Text style={resetText}>
                    **** **** **** {lastCreditCardDigits}
                  </Text>
                </Column>
              </Row>
            </Section>
          </Section>
          <Section style={padding}>
            <Hr />
          </Section>
          <Text style={footer}>
            React Email Templates, Suite 425 59431 Allen View, East Sherell, MT
            81789
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

OrderReceiptEmail.PreviewProps = {
  orderCode: "QnXzixMT",
  date: "July 23, 2024",
  trackingLink: "https://example.com",
  products: [
    { name: "Awesome Email Template", quantity: 2, price: 299.0 },
    { name: "Awful Email Template", quantity: 3, price: 1.99 },
  ],
  shippingPrice: 5.0,
  tax: 25.0,
  shippingInfo: "Liam Johnson 1234 Main St. Anytown, CA 12345",
  isBillingInfoShippingInfo: true,
  customerName: "Liam Johnson",
  customerEmail: "liam@example.com",
  customerPhone: "+1 234 567 890",
  paymentMethod: "Visa",
  lastCreditCardDigits: "4242",
} as OrderReceiptProps;

export default OrderReceiptEmail;

const resetText: React.CSSProperties = { margin: 0 };

const boldStyle: React.CSSProperties = { ...resetText, fontWeight: 600 };

const mutedStyle: React.CSSProperties = { ...resetText, color: "#71717a" };

const padding: React.CSSProperties = { padding: "0 24px" };

const marginHr: React.CSSProperties = { marginTop: "16px" };

const marginRow: React.CSSProperties = { marginTop: "10px" };

const main: React.CSSProperties = {
  backgroundColor: "#fafafa",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container: React.CSSProperties = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  borderRadius: "8px",
  border: "1px solid #e4e4e7",
};

const box: React.CSSProperties = {
  padding: "24px 0 16px",
};

const title: React.CSSProperties = {
  ...padding,
  color: "#09090b",
  fontSize: "24px",
  fontWeight: "bold",
  marginTop: "32px",
};

const description: React.CSSProperties = {
  ...padding,
  marginTop: "8px",
  lineHeight: "28px",
  fontSize: "16px",
};

const link: React.CSSProperties = {
  color: "#09090b",
  textDecoration: "underline",
  textUnderlineOffset: "4px",
  fontWeight: 600,
};

const receipt: React.CSSProperties = { padding: "24px" };

const orderHeading: React.CSSProperties = {
  backgroundColor: "#F9F9FA",
  padding: "24px",
};

const trackingButton: React.CSSProperties = {
  border: "1px solid #e4e4e7",
  padding: "6px 12px",
  borderRadius: "4px",
  backgroundColor: "white",
};

const orderCodeStyle: React.CSSProperties = {
  fontSize: "18px",
  fontWeight: 600,
  lineHeight: "28px",
  margin: 0,
};

const totalPriceStyle: React.CSSProperties = { ...boldStyle, ...mutedStyle };

const columnLeft: React.CSSProperties = { paddingRight: "8px" };

const columnRight: React.CSSProperties = { paddingLeft: "8px" };

const shippingAndBillingStyle: React.CSSProperties = {
  ...resetText,
  marginTop: "12px",
  color: "#71717a",
};

const dateStyle: React.CSSProperties = {
  color: "#71717a",
  lineHeight: "20px",
  margin: 0,
};

const footer: React.CSSProperties = {
  ...padding,
  color: "#71717a",
  fontSize: "14px",
  lineHeight: "20px",
  marginTop: "24px",
};

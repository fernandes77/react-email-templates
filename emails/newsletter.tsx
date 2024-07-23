import {
  Body,
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

interface NewsletterProps {
  date: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const NewsletterEmail = ({ date }: NewsletterProps) => (
  <Html>
    <Head />
    <Preview>RET Newsletter</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={box}>
          <Section style={paddings}>
            <Row>
              <Column>
                <Img
                  src={`${baseUrl}/static/ret.png`}
                  width="40"
                  height="30"
                  alt="React Email Template"
                />
              </Column>
              <Column align="right">
                <Text style={{ margin: 0 }}>RET Newsletter {date}</Text>
              </Column>
            </Row>
          </Section>
          <Heading style={title}>
            This week: How we can reduce email development headaches by
            developing them with React
          </Heading>
          <Text style={textBody}>
            Last week, we kicked things off with basic HTML emails. We "coded"
            up the emails from week one in our #EmailChallenge:{" "}
            <Link style={link} href="https://example.com">
              HTML collection
            </Link>
            .
          </Text>
          <Text style={textBody}>This week, we move on to React Email📧</Text>
          <Text style={textBody}>
            Developing emails with React is all about mastering component-based
            architecture. Take control of reusability and you can simplify the
            email development process 🧙
          </Text>
          <Section>
            <Row>
              <Column align="center">
                <Img
                  src={`${baseUrl}/static/duck.gif`}
                  height={100}
                  alt="Walking duck"
                />
              </Column>
            </Row>
          </Section>
          <Text style={textBody}>
            This week is a fun chance to work on your React skills, or dive into
            a library like Next.js for server-side rendering.
          </Text>
          <Text style={textBody}>
            <Link style={link} href="https://example.com">
              This week's starter template
            </Link>{" "}
            features a section to help inspire a "dynamic" idea for your email.
            As always, the template is just a jumping-off point. Feel free to
            incorporate it in your creation, add more elements, or start over
            from scratch!
          </Text>
          <Text style={textBody}>
            Let's reduce email development headaches by leveraging React's
            powerful features!
          </Text>
          <Section style={paddings}>
            <Hr />
          </Section>
          <Text style={footer}>
            You can adjust your{" "}
            <Link style={footerLink} href="https://example.com">
              email preferences
            </Link>{" "}
            any time, or{" "}
            <Link style={footerLink} href="https://example.com">
              unsubscribe
            </Link>{" "}
            of emails of this kind.
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

NewsletterEmail.PreviewProps = {
  date: "July 2024",
} as NewsletterProps;

export default NewsletterEmail;

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

const paddings: React.CSSProperties = { padding: "0 24px" };

const title: React.CSSProperties = {
  color: "#09090b",
  fontSize: "24px",
  fontWeight: "bold",
  marginTop: "32px",
  backgroundColor: "#f4f4f5",
  margin: "16px 0",
  padding: "24px",
};

const textBody: React.CSSProperties = {
  ...paddings,
  marginTop: "8px",
  lineHeight: "28px",
  fontSize: "16px",
  color: "#09090b",
};

const link: React.CSSProperties = {
  color: "#09090b",
  textDecoration: "underline",
  textUnderlineOffset: "4px",
  fontWeight: 600,
};

const footer: React.CSSProperties = {
  ...paddings,
  color: "#71717a",
  fontSize: "14px",
  lineHeight: "20px",
  marginTop: "24px",
};

const footerLink: React.CSSProperties = {
  color: "#71717a",
  textDecoration: "underline",
  textUnderlineOffset: "4px",
  fontWeight: 600,
};

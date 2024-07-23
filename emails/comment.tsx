import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface CommentProps {
  commentMessage: string;
  commenterName: string;
  commentPlace: string;
  actionLink: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const CommentEmail = ({
  commentMessage,
  commentPlace,
  commenterName,
  actionLink,
}: CommentProps) => (
  <Html>
    <Head />
    <Preview>New comment on {commentPlace}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={box}>
          <Img
            src={`${baseUrl}/static/ret.png`}
            width="36"
            height="36"
            alt="React Email Template"
          />
          <Text style={description}>
            <b style={bold}>{commenterName}</b> commented on{" "}
            <b style={bold}>{commentPlace}</b>:
          </Text>
          <Text style={comment}>"{commentMessage}"</Text>
          <Section style={buttonSection}>
            <Button style={button} href={actionLink}>
              View comment
            </Button>
          </Section>
          <Hr style={hr} />
          <Text style={footer}>
            React Email Templates, Suite 425 59431 Allen View, East Sherell, MT
            81789
          </Text>
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

CommentEmail.PreviewProps = {
  commentMessage:
    "I was thinking that there should be “properties” tab in the menu because the only way to search is by going to the spot on the page where it says search on the home page but not in the menu.",
  commenterName: "John Von Neumann",
  commentPlace: "BestRegards Workspace",
  actionLink: "https://example.com",
} as CommentProps;

export default CommentEmail;

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
  padding: "24px 24px 16px 24px",
};

const description: React.CSSProperties = {
  marginTop: "24px",
  lineHeight: "28px",
  fontSize: "16px",
};

const bold: React.CSSProperties = { fontWeight: 600 };

const comment: React.CSSProperties = {
  borderLeft: "2px solid #e4e4e7",
  paddingLeft: "24px",
  fontStyle: "italic",
  lineHeight: "24px",
  fontSize: "16px",
};

const buttonSection: React.CSSProperties = {
  textAlign: "center",
  marginTop: "24px",
};

const button: React.CSSProperties = {
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  whiteSpace: "nowrap",
  borderRadius: "6px",
  fontSize: "14px",
  fontWeight: "600",
  backgroundColor: "#18181B",
  color: "#fafafa",
  padding: "12px 16px",
};

const hr: React.CSSProperties = { marginTop: "24px" };

const footer: React.CSSProperties = {
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

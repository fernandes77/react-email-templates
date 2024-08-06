import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import * as React from "react";
import tailwindConfig from "../tailwindConfig";

interface AbandonedCartProps {
  productName: string;
  customerName: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const AbandonedCartEmail = ({
  customerName,
  productName,
}: AbandonedCartProps) => (
  <Html>
    <Head />
    <Preview>Hey {customerName}, you've left something behind...</Preview>
    <Tailwind>
      <Body className="bg-zinc-50 font-sans">
        <Container className="bg-white mx-auto rounded-lg border border-solid border-zinc-200 shadow-sm">
          <Section className="p-6 pb-4">
            <Img
              src={`${baseUrl}/static/ret.png`}
              width="36"
              height="36"
              alt="React Email Template"
            />
            <Heading className="text-neutral-900 text-2xl font-bold mt-8">
              We saved your shopping bag!
            </Heading>
            <Text className="mt-2 text-base leading-7">
              Recently, you've come across our{" "}
              <b className="font-semibold">{productName}</b> but haven't decided
              to purchase it. We've saved your session so that you can return
              when you're ready. If you need help, please{" "}
              <Link
                className="text-neutral-900 underline underline-offset-4 font-semibold"
                href="https://example.com"
              >
                contact us
              </Link>
              .
            </Text>
            <Section className="text-center mt-6 mb-4">
              <Button
                className="inline-flex justify-center items-center whitespace-nowrap rounded-lg text-sm font-semibold bg-neutral-900 text-zinc-50 px-4 py-3"
                href="https://example.com"
              >
                Continue with your order
              </Button>
            </Section>
            <Text className="text-gray-500 mt-4">
              Best,
              <br />
              RET Team
            </Text>
            <Hr />
            <Text className="text-gray-500 text-sm leading-5 mt-6">
              React Email Templates, Suite 425 59431 Allen View, East Sherell,
              MT 81789
            </Text>
          </Section>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

AbandonedCartEmail.PreviewProps = {
  customerName: "Alan",
  productName: "Enterprise Plan",
} as AbandonedCartProps;

export default AbandonedCartEmail;

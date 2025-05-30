import {
	Body,
	Button,
	Container,
	Head,
	Heading,
	Hr,
	Html,
	Link,
	Preview,
	Text,
	Tailwind,
	Section,
} from "@react-email/components";
import { User } from "better-auth";

interface BetterAuthVerifyEmailProps {
	user?: User;
	url?: string;
    token?: string;
}

export const VerifyEmail = ({
	user,
	url,
    token
}: BetterAuthVerifyEmailProps) => {
	const previewText = `Verdant Assistant: Verify your email address`;
	return (
		<Html>
			<Head />
			<Preview>{previewText}</Preview>
			<Tailwind>
				<Body className="bg-white my-auto mx-auto font-sans px-2">
					<Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]">
						<Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
							Verify <strong>your Verdant</strong> password
						</Heading>
						<Text className="text-black text-[14px] leading-[24px]">
							Hello {user?.name || "Friend"},
						</Text>
						<Text className="text-black text-[14px] leading-[24px]">
							We received a request to verify your email address for your Better Auth
							account. If you didn't make this request, you can safely ignore
							this email.
						</Text>
						<Section className="text-center mt-[32px] mb-[32px]">
							<Button
								className="bg-[#000000] rounded text-white text-[12px] font-semibold no-underline text-center px-5 py-3"
								href={url}
							>
								Verify Email
							</Button>
						</Section>
						<Text className="text-black text-[14px] leading-[24px]">
							Or copy and paste this URL into your browser:{" "}
							<Link href={url} className="text-blue-600 no-underline">
								{url}
							</Link>
						</Text>
						<Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
						<Text className="text-[#666666] text-[12px] leading-[24px]">
							If you didn't request a password reset, please ignore this email
							or contact support if you have concerns.
						</Text>
					</Container>
				</Body>
			</Tailwind>
		</Html>
	);
};

export function reactVerifyEmail(
	props: BetterAuthVerifyEmailProps,
) {
	console.log(props);
	return <VerifyEmail {...props} />;
}
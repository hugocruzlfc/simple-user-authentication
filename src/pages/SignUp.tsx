import { SignUp } from "@clerk/clerk-react";

export default function SignUpPage() {
  return (
    <section className="flex flex-col items-center mt-20">
      <SignUp path="/sign-up" />;
    </section>
  );
}

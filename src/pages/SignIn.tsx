import { SignIn } from "@clerk/clerk-react";

export default function SignInPage() {
  return (
    <section className="flex flex-col items-center mt-20">
      <SignIn path="/sign-in" />
    </section>
  );
}

import { LoginForm } from "@/components/auth/login-form";
import { Button } from "@/components/ui/custom-button";
import { HomeIcon } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="flex flex-col gap-2 w-full max-w-sm">
        <LoginForm />
      <p className="text-sm mx-auto">
        Back to{' '}
        <Button variant={'inlineLink'} asChild>
          <Link href={'/'}>
            Home
          </Link>
        </Button>
      </p>
      </div>
    </div>
  );
}

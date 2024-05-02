import { Button } from "@nextui-org/button";
import { useDisclosure } from "@nextui-org/react";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

function Login() {
  const {
    isOpen: isOpenSignUp,
    onOpen: onOpenSignUp,
    onOpenChange: onOpenChangeSignUp,
  } = useDisclosure();
  const {
    isOpen: isOpenSignIn,
    onOpen: onOpenSignIn,
    onOpenChange: onOpenChangeSignIn,
  } = useDisclosure();

  return (
    <>
      <div className="flex justify-center items-center w-screen h-screen">
        <div className="bg-light bg-no-repeat bg-cover w-5/12 h-full flex justify-center items-center">
          <img src="logo.png" className="rotate-180 w-64" />
        </div>
        <div className="bg-[#15202b] w-7/12 h-full">
          <div className="flex flex-col pl-8 pt-8 w-1/2">
            <img src="logo.png" className="rotate-180 w-16 mb-4 lg:mb-12" />
            <h1 className="font-montheavy text-white text-lg lg:text-5xl mb-4 lg:mb-8 tracking-wide leading-relaxed">
              See what's <span>happening</span>
            </h1>
            <h2 className="font-montheavy text-white text-sm lg:text-2xl mb-4">
              Join Hackatweet today.
            </h2>
            <Button color="primary" className="w-1/2" onPress={onOpenSignUp}>
              Sign up
            </Button>
            <p className="font-montheavy text-white text-xs lg:text-sm mb-4 mt-4">
              Already have an account?
            </p>
            <Button color="primary" className="w-1/2" onPress={onOpenSignIn}>
              Sign in
            </Button>
          </div>
        </div>
      </div>
      <SignUp isOpen={isOpenSignUp} onOpenChange={onOpenChangeSignUp} />
      <SignIn isOpen={isOpenSignIn} onOpenChange={onOpenChangeSignIn} />
    </>
  );
}

export default Login;

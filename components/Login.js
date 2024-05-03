import { Button } from "@nextui-org/button";
import { useDisclosure } from "@nextui-org/react";
import { useSelector } from "react-redux";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import { ThemeSwitcher } from "./ThemeSwitcher";

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

  const user = useSelector((state) => state.user.value);

  if (user.token) {
    window.location.assign("home");
  }

  return (
    <>
      <div className="flex justify-center items-center w-screen h-screen">
        <div className="dark:bg-light bg-dark bg-no-repeat bg-left-top w-5/12 h-full flex justify-center items-center">
          <img src="logo.png" className="rotate-180 w-64" />
        </div>
        <div className="bg-[#e7e3e3] dark:bg-[#15202b] w-7/12 h-screen mx-auto">
          <div className="flex justify-end mt-6 mr-6">
            <ThemeSwitcher />
          </div>
          <div className="mt-16 flex items-center flex-col pt-8 w-80 md:ml-20 lg:pl-8 lg:w-2/3 lg:items-start">
            <img
              src="logo.png"
              className="hidden rotate-180 mx-auto w-16 mb-4 lg:mb-6 lg:mx-0 dark:block"
            />
            <h1 className="font-montheavy text-center dark:text-slate-100 text-slate-800 text-4xl mt-6 lg:text-5xl mb-4 lg:mb-8 tracking-wide leading-relaxed lg:text-left">
              See what's <span>happening</span>
            </h1>
            <h2 className="font-montheavy text-slate-800 dark:text-slate-100 text-base lg:text-2xl mb-4">
              Join Hackatweet today.
            </h2>
            <Button
              color="primary"
              className="w-2/3 xl:w-1/2"
              onPress={onOpenSignUp}
            >
              Sign up
            </Button>
            <p className="font-montheavy dark:text-slate-100 text-slate-800 text-base lg:text-sm mb-4 mt-4">
              Already have an account?
            </p>
            <Button
              color="primary"
              className="w-2/3 xl:w-1/2"
              onPress={onOpenSignIn}
            >
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

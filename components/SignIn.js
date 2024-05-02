import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
  } from "@nextui-org/react";
  import { Input } from "@nextui-org/input";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
  import { useState } from "react";
  
  function SignIn({ isOpen, onOpenChange }) {
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);
  
    return (
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent className="bg-[#15202b]">
          <ModalHeader></ModalHeader>
          <ModalBody>
            <div className="flex flex-col items-center justify-center">
              <img src="logo.png" className="rotate-180 w-16 mb-4" />
              <p className="text-white font-montheavy mb-4">
                Connect to Hackatweet
              </p>
              <Input type="text" placeholder="Username" className="w-1/2 mb-2" />
              <Input
                placeholder="Password"
                endContent={
                  <button
                    className="focus:outline-none"
                    type="button"
                    onClick={toggleVisibility}
                  >
                    {isVisible ? (
                      <FontAwesomeIcon
                        icon={faEye}
                        className="text-base text-default-400 pointer-events-none"
                      />
                    ) : (
                      <FontAwesomeIcon
                        icon={faEyeSlash}
                        className="text-base text-default-400 pointer-events-none"
                      />
                    )}
                  </button>
                }
                type={isVisible ? "text" : "password"}
                className="w-1/2 mb-2"
              />
              <Button color="primary" className="w-1/2">
                Sign in
              </Button>
            </div>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    );
  }
  
  export default SignIn;
  
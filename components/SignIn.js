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
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function fetchSigninData() {
    const connectionData = {
      username: username,
      password: password,
    };

    fetch("http://localhost:3000/users/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(connectionData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.result) {
          console.log(data);
          window.location.assign("tweet.html");
        }
      });
  }

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement={"center"}>
      <ModalContent className="bg-[#15202b]">
        <ModalHeader></ModalHeader>
        <ModalBody>
          <div className="flex flex-col items-center justify-center">
            <img src="logo.png" className="rotate-180 w-16 mb-4" />
            <p className="text-white font-montheavy mb-4">
              Connect to Hackatweet
            </p>

            <Input
              labelPlacement={"inside"}
              key={"inside"}
              label="Username"
              type="text"
              className="w-1/2 h-8 mb-6"
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              labelPlacement={"inside"}
              className="w-1/2 h-6 mb-6"
              key={"inside"}
              label="Password"
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={toggleVisibility}
                  onChange={(e) => setPassword(e.target.value)}
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
            />
            <Button
              onClick={fetchSigninData}
              color="primary"
              className="w-1/2 mt-2"
            >
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

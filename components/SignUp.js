import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Spinner,
} from "@nextui-org/react";
import { Input } from "@nextui-org/input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../reducers/user";

function SignUp({ isOpen, onOpenChange }) {
  const dispatch = useDispatch();
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const [username, setUsername] = useState("");
  const [firstname, setFirstName] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);

  // test useRef

  function fetchSignupData() {
    setLoader(true);
    const connectionData = {
      username: username,
      firstname: firstname,
      password: password,
    };

    fetch("http://localhost:3000/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(connectionData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.result) {
          dispatch(
            login({
              token: data.data.token,
              id: data.data._id,
              username: data.data.username,
              firstname: data.data.firstname,
              picture: data.data.picture,
            })
          );
          window.location.assign("home");
        } else {
          setLoader(false);
        }
      });
  }

  return (
    <Modal
      className="mb-18"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      placement={"center"}
    >
      <ModalContent className="bg-[#15202b]">
        <ModalHeader></ModalHeader>
        <ModalBody>
          <div className="flex flex-col items-center justify-center">
            {loader ? (
              <Spinner
                label="Loading..."
                color="primary"
                className=""
                size="lg"
                labelColor="primary"
              />
            ) : (
              <>
                <img src="logo.png" className="rotate-180 w-16 mb-4" />
                <p className="text-white font-montheavy mb-4">
                  Create your Hackatweet account
                </p>
                <Input
                  labelPlacement={"inside"}
                  key={"inside"}
                  label="Firstname"
                  type="text"
                  className="w-1/2 h-8 mb-6"
                  onChange={(e) => setFirstName(e.target.value)}
                />
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
                  onChange={(e) => setPassword(e.target.value)}
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
                />
                <Button
                  onClick={fetchSignupData}
                  color="primary"
                  className="w-1/2 mt-2"
                >
                  Sign up
                </Button>
              </>
            )}
          </div>
        </ModalBody>
        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default SignUp;

import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Heading,
  Input,
  Button,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";

function Register() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [pic, setPic] = useState("");

  const [load, setload] = useState(false);

  const toast = useToast();

  const registerSuccess = () => {
    toast({
      title: "Signup Successful.",
      description: "Please login and continue shopping",
      status: "success",
      duration: 3000,
      isClosable: true,
      position: "top",
    });
  };

  const emailExist = () => {
    toast({
      title: "Email Already Exist.",
      description: "Please Enter New Email.",
      status: "error",
      duration: 9000,
      isClosable: true,
      position: "top",
    });
  };

  const fillRequiredData = () => {
    toast({
      title: "Please fill required data correctly",
      description: "Please Share required info",
      status: "error",
      duration: 9000,
      isClosable: true,
      position: "top",
    });
  };

  const postdata = async () => {
    setload(true);
    // for mail existance check
    try {
      let res = await fetch(
        "https://wandering-clam-jacket.cyclic.app/elskerUsers"
      );
      let data = await res.json();
      console.log(data);
      var mailAuth = false;
      for (let i in data) {
        if (data[i].email === email) {
          mailAuth = true;
          break;
        }
      }

      if (mailAuth === true) {
        emailExist();
        setload(false);
        return;
      }
    } catch (error) {
      console.log(error);
    }
    // for mail existance check
    if (
      email.includes("@") &&
      email.length > 0 &&
      pic.length > 0 &&
      name.length > 0
    ) {
      try {
        await fetch(`https://wandering-clam-jacket.cyclic.app/elskerUsers`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            pic,
          }),
        });
        setload(false);
      } catch (error) {
        setload(false);
        console.log(error);
      }
      registerSuccess();
      setname("");
      setemail("");
      setPic("");
    } else {
      fillRequiredData();
      setload(false);
    }
  };

  return (
    <div>
      <div style={{ width: "30%", margin: "auto", marginTop: "30px" }}>
        <Heading textAlign="center" color="black">
          Register
        </Heading>
        <FormControl>
          <FormLabel>Full Name</FormLabel>
          <Input
            value={name}
            onChange={(e) => setname(e.target.value)}
            placeholder="Your Full Name"
            type="text"
          />

          <FormLabel>Email address</FormLabel>
          <Input
            value={email}
            onChange={(e) => setemail(e.target.value)}
            type="email"
            placeholder="Your Email Address"
          />
          <FormLabel>Picture</FormLabel>
          <Input
            placeholder="Your Picture Url"
            value={pic}
            onChange={(e) => setPic(e.target.value)}
            type="text"
          />

          {load ? (
            <Button
              isLoading
              w="100px"
              margin="auto"
              marginTop="30px"
              color="white"
              background="rgb(252,39,121)"
              colorScheme="teal"
              variant="solid"
            >
              Email
            </Button>
          ) : (
            <Button
              onClick={postdata}
              loadingText="Submitting"
              w="100px"
              margin="auto"
              marginTop="30px"
              marginBottom="30px"
              color="white"
              background="black"
              _hover={{
                bg: "gray",
              }}
            >
              Register
            </Button>
          )}
        </FormControl>
      </div>
    </div>
  );
}

export default Register;

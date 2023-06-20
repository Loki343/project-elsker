import {
  FormControl,
  FormLabel,
  Heading,
  Input,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";

function Verify() {
  const [email, setemail] = useState("");
  const [auth, setAuth] = useState(false);

  const submitLogin = async () => {
    try {
      let res = await fetch(
        `https://wandering-clam-jacket.cyclic.app/elskerUsers`
      );
      let data = await res.json();
      console.log(data);

      for (let i in data) {
        if (data[i].email === email) {
          setAuth(true);
          break;
        } else {
          setAuth(false);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div style={{ width: "30%", margin: "auto", marginTop: "30px" }}>
        <Heading color="black" textAlign="center">
          Verify
        </Heading>
        <FormControl>
          <FormLabel>Email address</FormLabel>
          <Input
            placeholder="Your Email Address"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            type="email"
          />

          <Button
            w="100px"
            margin="auto"
            marginTop="30px"
            color="white"
            background="black"
            onClick={submitLogin}
          >
            Verify
          </Button>
        </FormControl>
      </div>
      <div style={{ marginTop: "40px" }}>
        {auth ? (
          <Heading>{email} - User is present</Heading>
        ) : (
          "Sorry user is not present"
        )}
      </div>
    </div>
  );
}

export default Verify;

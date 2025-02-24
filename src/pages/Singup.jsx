import { Form, Link, useActionData } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useSingup } from "../hooks/useSingup";
import Forminput from "../components/Forminput";
import { useEffect } from "react";
import SubmitBtn from "../components/SubmitBtn";

export const action = async ({ request }) => {
  let formData = await request.formData();
  let name = formData.get("displayName");
  let email = formData.get("email");
  let image = formData.get("image");
  let password = formData.get("password");

  return { name, email, image, password };
};

function Singup() {
  const { signUpWithGoogle, registerWithEmailAndPassword } = useSingup();
  const actionData = useActionData();

  useEffect(() => {
    if (actionData) {
      registerWithEmailAndPassword(actionData);
    }
  }, [actionData]);

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1660748054768-33282c43c318?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D')",
      }}
    >
      <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-4xl font-bold text-center mb-6">Sign Up</h1>
        <Form method="post" className="space-y-4">
          <Forminput label="Display Name" type="text" name="displayName" />
          <Forminput label="Email" type="email" name="email" />
          <Forminput label="Image URL" type="url" name="image" />
          <Forminput label="Password" type="password" name="password" />
          <div className="mt-5">
            <SubmitBtn onClick={registerWithEmailAndPassword} text="Submit" />
          </div>
        </Form>
        <button
          onClick={signUpWithGoogle}
          type="button"
          className="btn btn-secondary w-full flex items-center justify-center mt-4"
        >
          <FcGoogle className="h-5 w-5 mr-2" /> Sign up with Google
        </button>
        <p className="mt-4 text-center">
          Already registered?
          <Link to="/login" className="link link-primary font-extrabold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Singup;

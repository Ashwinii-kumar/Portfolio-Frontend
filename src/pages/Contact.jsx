import React, { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThreeDots } from "react-loader-spinner";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const theme = useSelector((state) => state.themes.theme);
  const [characterCount, setCharacterCount] = useState(0);
  const minChars = 10; // Minimum character count
  const maxChars = 100; // Maximum character count
  const apiUrl = import.meta.env.VITE_APP_BASE_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    if (!email || !name || !message) {
      setLoading(false);

      toast.error("All fields must be set", {
        autoClose: 1000,
        className: "custom-toast-container",
        bodyClassName: "custom-toast-message",
      });
      return;
    }

    if (characterCount < minChars) {
      setLoading(false);
      toast.error("Minimum 10 characters required", {
        autoClose: 1000,
        className: "custom-toast-container",
        bodyClassName: "custom-toast-message",
      });
      return;
    }
    if (characterCount > maxChars) {
      setLoading(false);
      toast.error("Characters' limit exceeded", {
        autoClose: 1000,
        className: "custom-toast-container",
        bodyClassName: "custom-toast-message",
      });
      return;
    }

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        name: name,
        message: message,
      }),
    };

    try {
      let response = await fetch(`${apiUrl}/submit`, options);
      let data = await response.json();
      if (response.ok) {
        setLoading(false);

        toast.success("Details Recorded Successfully", {
          autoClose: 1000,
          className: "custom-toast-container",
          bodyClassName: "custom-toast-message",
        });
      } else {
        setLoading(false);

        toast.error(data.message || "Unknown error occurred", {
          autoClose: 1000,
          className: "custom-toast-container",
          bodyClassName: "custom-toast-message",
        });
      }
    } catch (error) {
      setLoading(false);

      toast.error(error.message || "Someting Went Wrong...", {
        autoClose: 1000,
        className: "custom-toast-container",
        bodyClassName: "custom-toast-message",
      });
    }

    setCharacterCount(0);
    setEmail("");
    setMessage("");
    setName("");
  };
  const isCharacterCountValid =
    characterCount >= minChars && characterCount <= maxChars;
  return (
    <div
      className={
        theme === "light"
          ? "w-[100%] min-h-screen bg-gray-100 flex flex-col justify-start  abc mx-auto p-6"
          : "w-[100%] mx-auto min-h-screen bg-gray-700 text-white flex flex-col justify-start abcd p-6"
      }
    >
      <div className="w-[65%] mx-auto mt-8">
        <h2
          className={
            theme === "light"
              ? "text-3xl font-semibold mb-6 text-gray-900"
              : "text-3xl font-semibold mb-6 text-yellow-400"
          }
        >
          Contact Me
        </h2>
        {loading && (
          <p className="text-red-400 font-bolder mb-4">
            Hii, There might be a delay in submission of the form details as a
            free tier backend hosting service is being used . I appreciate your
            patience in the meantime.{" "}
          </p>
        )}

        <form onSubmit={handleSubmit}>
          <div
            className={
              theme === "light"
                ? "block text-gray-700 mb-4"
                : "block text-white mb-4"
            }
          >
            <label htmlFor="name" className="block mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={
                theme === "light"
                  ? "w-full px-3 py-2 border rounded-lg shadow-sm  text-black"
                  : "w-full px-3 py-2 border rounded-lg shadow-sm  text-black bg-gray-500"
              }
              required
              placeholder="Enter Your Name.."
            />
          </div>
          <div
            className={
              theme === "light"
                ? "block text-gray-700 mb-4"
                : "block text-white mb-4"
            }
          >
            <label htmlFor="email" className="block mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={
                theme === "light"
                  ? "w-full px-3 py-2 border rounded-lg shadow-sm  text-black"
                  : "w-full px-3 py-2 border rounded-lg shadow-sm  text-black bg-gray-500"
              }
              required
              placeholder="Enter Your Email.."
            />
          </div>
          <div
            className={
              theme === "light"
                ? "block text-gray-700 mb-4"
                : "block text-white mb-4"
            }
          >
            <label htmlFor="message" className="block mb-2">
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                setCharacterCount(e.target.value.length);
              }}
              className={
                theme === "light"
                  ? "w-full px-3 py-2 border rounded-lg shadow-sm  text-black"
                  : "w-full px-3 py-2 border rounded-lg shadow-sm  text-black bg-gray-500"
              }
              rows="2"
              required
              placeholder="Enter Your Message.."
            />
            <div>
              <p className="text-gray-400 ">
                Character count: {characterCount}
              </p>
              {!isCharacterCountValid && (
                <p className="text-gray-400 mb-8">
                  {characterCount < minChars
                    ? `Minimum ${
                        minChars - characterCount
                      } more characters required.`
                    : `Maximum ${
                        characterCount - maxChars
                      } characters exceeded.`}
                </p>
              )}
            </div>
          </div>
          <button
            type="submit"
            className={
              theme !== "light"
                ? "bg-yellow-400 text-gray-700 font-bold px-4 py-2 rounded-lg  hover:bg-white border-2  hover:text-yellow-600 w-[25%]"
                : "bg-blue-500 text-white px-4 py-2 rounded-lg  hover:bg-blue-700 hover:text-white w-[25%]"
            }
            disabled={loading}
          >
            {loading ? (
              <>
                <ThreeDots
                  height="30"
                  width="60"
                  radius="9"
                  color="white"
                  ariaLabel="three-dots-loading"
                  wrapperStyle={{marginLeft:"50px"}}
                  wrapperClassName=""
                  visible={loading}
                />
              </>
            ) : (
              <>
                <p>Submit</p>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    data.access_key = "72a92109-ed07-4e92-a019-0f9e48d95d09";

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success",
        background: "#0f172a",
        color: "#f8fafc",
        confirmButtonColor: "#22c55e",
        confirmButtonText: "Ok",
        iconColor: "#22c55e",
      });
      reset();
    } else {
      console.log("Error", res);
    }
  };

  return (
    <div className="pt-10 min-h-[70vh] flex items-center justify-center w-full">
      <div className="text-accent overflow-hidden rounded relative w-full max-w-150 flex justify-center items-center">
        {/* effect */}
        <div className="absolute -bottom-15 -right-20 h-30 w-20 rounded-full bg-primary shadow-[0px_10px_10vw] shadow-primary"></div>

        {/* content */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid w-full gap-10 grid-cols-2 sm:grid-cols-6"
        >
          <div className="text-grow order-1 w-full sm:col-span-6 col-span-4 text-center px-5 rounded flex items-center justify-center">
            <p className="w-full  text-xl  sm:text-2xl font-bold">
              <span className="text-grow flex items-center gap-2 whitespace-nowrap">
                Say Hello 👋
              </span>
            </p>
          </div>
          <div className="relative bg-accent/10 backdrop-blur-2xl order-2 col-span-4  sm:col-span-2 text-grow w-full rounded">
            <p className=" text:sm  sm:text-medium font-medium">
              {/* name */}
              <input
                placeholder="Your Name"
                {...register("name", { required: true })}
                type="text"
                name="name"
                id="name"
                className="p-5 outline-0  rounded border-grow/50 focus:border-grow w-full h-full text-grow"
              />
            </p>
            {errors.name && (
              <p className="text-red-500 absolute">Please enter your name.</p>
            )}
          </div>

          <div className="bg-accent/10 relative col-span-4 order-2 sm:col-span-4 sm:order-2 text-grow w-full rounded backdrop-blur-2xl">
            <p className=" text:sm  sm:text-medium font-medium">
              {/* email */}
              <input
                placeholder="Your Email Address"
                {...register("email", { required: true })}
                type="email"
                name="email"
                id="email"
                className="p-5  outline-0 rounded border-grow/50 focus:border-grow w-full h-full bg-transparent text-grow"
              />
            </p>
            {errors.email && (
              <p className="text-red-500 absolute">Please enter your email.</p>
            )}
          </div>
          <div className="bg-accent/10 order-4 sm:order-3 col-span-4 sm:col-span-6 text-grow relative w-full rounded backdrop-blur-2xl">
            <p className=" text:sm  sm:text-medium font-medium">
              <span className="text-grow">
                {/* message */}
                <textarea
                  placeholder="Write Your Messege Here"
                  {...register("message", { required: true })}
                  name="message"
                  className="p-5 outline-0  rounded border-grow/50 focus:border-grow w-full h-full text-grow"
                  id="message"
                ></textarea>
              </span>
            </p>
            {errors.message && (
              <p className="text-red-500 absolute">
                Please enter your message.
              </p>
            )}
          </div>
          <button className="text-grow rounded border-grow/50 order-5 col-span-4 sm:col-span-6 p-5 w-full flex items-center backdrop-blur-2xl bg-accent/10 justify-center">
            <p className="w-full  text-xl  sm:text-2xl font-bold">
              <span className="text-grow flex justify-center items-center gap-2 whitespace-nowrap hover:text-primary cursor-pointer transition-all duration-300">
                Send Message
              </span>
            </p>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

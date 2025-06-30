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
    <div className="flex items-center justify-center w-full">
      <div className="text-accent overflow-hidden rounded relative w-full max-w-150 flex justify-center items-center">
        {/* content */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid w-full gap-5 grid-cols-2 sm:grid-cols-6"
        >
          <div className="text-grow order-1 w-full sm:col-span-6 col-span-4 text-center rounded flex flex-col items-center justify-center py-5">
            <h2 className="text-2xl sm:text-4xl font-bold drop-shadow-[1px_5px_1px] text-accent">
              <span className="text-grow">Let’s Work Together</span>
            </h2>
            <p className="text-sm sm:text-base text-grow mt-5 max-w-xl mx-auto">
              Whether you have a question, a project idea, or just want to
              connect — feel free to reach out. I’ll get back to you as soon as
              possible!
            </p>
          </div>

          {/* Name Field */}
          <div className="relative bg-accent/10 shadow-accent shadow-lg backdrop-blur-2xl order-2 col-span-4 sm:col-span-2 text-grow w-full rounded">
            <div className="text-sm sm:text-medium font-medium">
              <input
                placeholder="Your Name"
                {...register("name", { required: true })}
                type="text"
                name="name"
                id="name"
                className="px-5 py-4 outline-0 rounded border-grow/50 focus:border-grow w-full h-full text-grow"
              />
            </div>
            {errors.name && (
              <p className="text-red-700 absolute text-xs">Please enter your name.</p>
            )}
          </div>

          {/* Email Field */}
          <div className="bg-accent/10 shadow-accent shadow-lg relative col-span-4 order-3 sm:col-span-4 sm:order-3 text-grow w-full rounded backdrop-blur-2xl">
            <div className="text-sm sm:text-medium font-medium">
              <input
                placeholder="Your Email Address"
                {...register("email", { required: true })}
                type="email"
                name="email"
                id="email"
                className="px-5 py-4 outline-0 rounded border-grow/50 focus:border-grow w-full h-full bg-transparent text-grow"
              />
            </div>
            {errors.email && (
              <p className="text-red-700 absolute text-xs">Please enter your email.</p>
            )}
          </div>

          {/* Subject Field */}
          <div className="bg-accent/10 shadow-accent shadow-lg relative col-span-4 order-4 sm:col-span-6 sm:order-4 text-grow w-full rounded backdrop-blur-2xl">
            <div className="text-sm sm:text-medium font-medium">
              <input
                placeholder="Subject"
                {...register("subject", { required: true })}
                type="text"
                name="subject"
                id="subject"
                className="px-5 py-4 outline-0 rounded border-grow/50 focus:border-grow w-full h-full bg-transparent text-grow"
              />
            </div>
            {errors.subject && (
              <p className="text-red-700 absolute text-xs">Please enter a subject.</p>
            )}
          </div>

          {/* Message Field */}
          <div className="bg-accent/10 shadow-accent shadow-lg order-5 sm:order-5 col-span-4 sm:col-span-6 text-grow relative w-full rounded backdrop-blur-2xl">
            <div className="text-sm sm:text-medium font-medium">
              <textarea
                placeholder="Write Your Message Here"
                {...register("message", { required: true })}
                name="message"
                id="message"
                className="px-5 py-4 outline-0 rounded border-grow/50 focus:border-grow w-full h-full text-grow"
              ></textarea>
            </div>
            {errors.message && (
              <p className="text-red-700 absolute text-xs">
                Please enter your message.
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="order-6 col-span-4 sm:col-span-6 flex justify-center w-full">
            <button className="flex items-center justify-center h-10 w-35 gap-1 font-medium text-sm rounded-full hover:bg-primary border border-primary hover:text-back text-primary trans hover:shadow-accent/50 shadow-primary hover:text-xl cursor-pointer">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;

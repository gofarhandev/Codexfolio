import { useEffect } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import ActionButton from "../components/ActionButton";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { FaUser, FaEnvelope, FaTag, FaCommentDots } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

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

  // 🔥 GSAP Animations
  useEffect(() => {
    const fields = gsap.utils.toArray(".animate-contact");

    fields.forEach((el, index) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 40,
        duration: 0.6,
        delay: index * 0.1,
        ease: "power2.out",
      });
    });

    ScrollTrigger.refresh();
  }, []);

  return (
    <section className="relative pb-15 lg:pb-[5vw] flex items-center justify-center w-full mb-[1vw]">
      <div className="text-accent overflow-hidden rounded relative w-full sm:w-2/3 lg:max-w-2/3 flex flex-col gap-5 lg:gap-[3vw] justify-center items-center pt-10 lg:pt-[3vw]">
        <h2 className="text-xl sm:text-3xl lg:text-[2.5vw] text-grow">
          Let's Work Together
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid w-full gap-5 lg:gap-[2.5vw] grid-cols-2 sm:grid-cols-6"
        >
          {/* Name */}
          <div className="animate-contact relative bg-accent/30 shadow-accent/50 shadow-sm backdrop-blur-2xl order-2 col-span-4 sm:col-span-2 text-grow w-full rounded">
            <div className="flex items-center w-full">
              <span className="px-4 lg:px-[1.2vw] text-grow text-xl lg:text-[1.5vw]">
                <FaUser />
              </span>
              <input
                placeholder="Your Name"
                {...register("name", { required: true })}
                type="text"
                name="name"
                id="name"
                className="px-3 py-3 lg:px-[1vw] lg:py-[1vw] outline-0 w-full text-base lg:text-[1.2vw] h-full text-grow"
              />
            </div>
            {errors.name && (
              <p className="text-red-500 absolute text-xs lg:text-[1vw] py-1 lg:py-[.2vw] bg-accent/60 rounded-full px-5 lg:px-[2.5vw]">
                Please enter your name.
              </p>
            )}
          </div>

          {/* Email */}
          <div className="animate-contact bg-accent/30 shadow-accent/50 shadow-sm relative col-span-4 order-3 sm:col-span-4 sm:order-3 text-grow w-full rounded backdrop-blur-2xl">
            <div className="flex items-center w-full">
              <span className="px-4 lg:px-[1.2vw] text-grow text-xl lg:text-[1.5vw]">
                <FaEnvelope />
              </span>
              <input
                placeholder="Your Email Address"
                {...register("email", { required: true })}
                type="email"
                name="email"
                id="email"
                className="px-3 py-3 lg:px-[1vw] lg:py-[1vw] outline-0 w-full text-base lg:text-[1.2vw] h-full bg-transparent text-grow"
              />
            </div>
            {errors.email && (
              <p className="text-red-500 absolute text-xs lg:text-[1vw] py-1 lg:py-[.2vw] bg-accent/60 rounded-full px-5 lg:px-[2.5vw]">
                Please enter your email.
              </p>
            )}
          </div>

          {/* Subject */}
          <div className="animate-contact bg-accent/30 shadow-accent/50 shadow-sm relative col-span-4 order-4 sm:col-span-6 sm:order-4 text-grow w-full rounded backdrop-blur-2xl">
            <div className="flex items-center w-full">
              <span className="px-4 lg:px-[1.2vw] text-grow text-xl lg:text-[1.5vw]">
                <FaTag />
              </span>
              <input
                placeholder="Subject"
                {...register("subject", { required: true })}
                type="text"
                name="subject"
                id="subject"
                className="px-3 py-3 lg:px-[1vw] lg:py-[1vw] outline-0 w-full text-base lg:text-[1.2vw] h-full bg-transparent text-grow"
              />
            </div>
            {errors.subject && (
              <p className="text-red-500 absolute text-xs lg:text-[1vw] py-1 lg:py-[.2vw] bg-accent/60 rounded-full px-5 lg:px-[2.5vw]">
                Please enter a subject.
              </p>
            )}
          </div>

          {/* Message */}
          <div className="animate-contact bg-accent/30 shadow-accent/50 shadow-sm order-5 sm:order-5 col-span-4 sm:col-span-6 text-grow relative w-full rounded backdrop-blur-2xl">
            <div className="flex items-start w-full">
              <span className="px-4 lg:px-[1.2vw] pt-3 lg:pt-[1vw] text-grow text-xl lg:text-[1.5vw]">
                <FaCommentDots />
              </span>
              <textarea
                placeholder="Write Your Message Here"
                {...register("message", { required: true })}
                name="message"
                id="message"
                className="px-4 py-3 lg:py-[1vw] outline-0 w-full text-base lg:text-[1.2vw] h-full text-grow"
              ></textarea>
            </div>
            {errors.message && (
              <p className="text-red-500 absolute text-xs lg:text-[1vw] py-1 lg:py-[.2vw] bg-accent/60 rounded-full px-5 lg:px-[2.5vw]">
                Please enter your message.
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="animate-contact order-6 col-span-4 sm:col-span-6 flex justify-center w-full mb-10">
            <ActionButton label="Send" type="submit" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;

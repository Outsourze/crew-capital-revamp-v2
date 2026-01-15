const Form = () => {
  return (
    <section className="bg-[#24282A] -mt-28 py-20 pt-52">
      <div className="max-w-4xl w-full mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.35em] mb-6 text-white text-sm">
            Contact Us
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-[#D6E100]">
            Go on, ask us anything
          </h2>
        </div>

        {/* Form */}
        <form className="flex flex-col gap-10">

          {/* First Name */}
          <div>
            <label className="block mb-2 text-xs uppercase tracking-wider text-white/70">
              First Name
            </label>
            <input
              type="text"
              placeholder="First Name*"
              className="
                w-full bg-transparent border-b border-white/70
                py-3 text-white placeholder-white/80
                outline-none transition
                focus:border-[#D6E100]
              "
            />
          </div>

          {/* Surname */}
          <div>
            <label className="block mb-2 text-xs uppercase tracking-wider text-white/70">
              Surname
            </label>
            <input
              type="text"
              placeholder="Surname*"
              className="
                w-full bg-transparent border-b border-white/70
                py-3 text-white placeholder-white/80
                outline-none transition
                focus:border-[#D6E100]
              "
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block mb-2 text-xs uppercase tracking-wider text-white/70">
              Phone / Mobile
            </label>
            <input
              type="text"
              placeholder="Phone/Mobile*"
              className="
                w-full bg-transparent border-b border-white/70
                py-3 text-white placeholder-white/80
                outline-none transition
                focus:border-[#D6E100]
              "
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 text-xs uppercase tracking-wider text-white/70">
              E-mail
            </label>
            <input
              type="email"
              placeholder="E-mail*"
              className="
                w-full bg-transparent border-b border-white/70
                py-3 text-white placeholder-white/80
                outline-none transition
                focus:border-[#D6E100]
              "
            />
          </div>

          {/* Message */}
          <div>
            <label className="block mb-2 text-xs uppercase tracking-wider text-white/70">
              Message
            </label>
            <textarea
              rows={4}
              placeholder="Message*"
              className="
                w-full bg-transparent border-b border-white/70
                py-3 text-white placeholder-white/80
                resize-none outline-none transition
                focus:border-[#D6E100]
              "
            />
          </div>

          {/* Button */}
          <div className="flex justify-center mt-16">
            <button
              type="submit"
              className="
                border border-[#D6E100]
                px-14 py-4 rounded-full
                text-[#D6E100] uppercase tracking-[0.25em] text-sm
                transition-all duration-300
                hover:bg-[#D6E100] hover:text-[#212529]
              "
            >
              Send Enquiry
            </button>
          </div>

        </form>
      </div>
    </section>
  );
};

export default Form;

const ContactUs = () => {
  return (
    <section className="bg-[#D6E100] min-h-screen flex items-center justify-center">
      <div className="w-full max-w-4xl px-5 py-20">
        
        {/* Header */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.3em] mb-6">
            Contact Us
          </p>
          <h2 className="text-3xl font-light">
            Go on, ask us anything...
          </h2>
        </div>

        {/* Form */}
        <form className="flex flex-col gap-10">
          
          {/* First Name */}
          <div>
            <label className="block mb-2 text-sm">First Name</label>
            <input
              type="text"
              placeholder="First Name*"
              className="w-full bg-transparent border-b border-black outline-none py-3 placeholder-black/60"
            />
          </div>

          {/* Surname */}
          <div>
            <label className="block mb-2 text-sm">Surname</label>
            <input
              type="text"
              placeholder="Surname*"
              className="w-full bg-transparent border-b border-black outline-none py-3 placeholder-black/60"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block mb-2 text-sm">Phone/Mobile</label>
            <input
              type="text"
              placeholder="Phone/Mobile*"
              className="w-full bg-transparent border-b border-black outline-none py-3 placeholder-black/60"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 text-sm">E-mail</label>
            <input
              type="email"
              placeholder="E-mail*"
              className="w-full bg-transparent border-b border-black outline-none py-3 placeholder-black/60"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block mb-2 text-sm">Message</label>
            <textarea
              placeholder="Message*"
              rows={4}
              className="w-full bg-transparent border-b border-black outline-none py-3 resize-none placeholder-black/60"
            />
          </div>

          {/* Button */}
          <div className="flex justify-center mt-12">
            <button
              type="submit"
              className="border border-black px-12 py-4 rounded-full uppercase tracking-widest text-sm hover:bg-black hover:text-[#D6E100] transition"
            >
              Send Enquiry
            </button>
          </div>

        </form>
      </div>
    </section>
  );
};

export default ContactUs;

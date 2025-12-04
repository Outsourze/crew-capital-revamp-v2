import { DarkBtn } from "../ui/Button";


const ContactUs = () => {
    return (
        <div className="max-w-7xl m-auto flex items-center justify-between gap-5 w-full py-10 px-10">
            <div className="w-1/2">
                <div className="flex flex-col gap-3 mb-10">
                  <p className="brand-text-orange text-xl">Book Appointment</p>
                  <h1 className="text-5xl font-semibold text-white">Send Message Anytime</h1>
                </div>
                <form className="my-5 py-5 flex flex-col gap-5 items-start">
                    <div className="flex items-center gap-5 w-full">
                        <input className="w-1/2 border rounded-lg border-gray-700 placeholder-gray-300 text-gray-300 text-sm py-3 px-5" type="text" name="fullName" placeholder="Full Name*"/>
                        <input className="w-1/2 border rounded-lg border-gray-700 placeholder-gray-300 text-gray-300 text-sm py-3 px-5" type="email" name="email" placeholder="Email Address*"/>
                    </div>
                    <textarea name="message " id="message" placeholder="Your Message" className="w-full border rounded-lg border-gray-700 placeholder-gray-300 text-gray-300 text-sm py-3 px-5 h-52"/>
                    <DarkBtn onClick={() => console.log("submit")}>
                        Submit Message
                    </DarkBtn>
                </form>
            </div>
            <div className="w-1/2">

            </div>
        </div>
    )
}

export default ContactUs;
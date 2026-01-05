import { DarkBtn } from "../ui/Button";


const Form = () => {
    return (
        <div className="">
            <div className="max-w-4xl w-full m-auto">
                <div className="flex flex-col gap-5">
                    <h4 className="uppercase tracking-widest text-white">
                      CONTACT US
                    </h4>
                    <h3 className="text-3xl brand-text-primary">
                      Go on, ask us anything…
                    </h3>
                </div>
                <form className="my-5 py-5 flex flex-col gap-5 items-center">
                    <div className="flex items-center gap-5 w-full">
                        <input className="w-1/2 border rounded-lg border-gray-700 placeholder-gray-300 text-gray-300 text-sm py-3 px-5" type="text" name="fullName" placeholder="Full Name"/>
                        <input className="w-1/2 border rounded-lg border-gray-700 placeholder-gray-300 text-gray-300 text-sm py-3 px-5" type="number" name="phoneNumb" placeholder="Phone Number"/>
                    </div>
                    <div className="flex items-center gap-5 w-full">
                        <input className="w-1/2 border rounded-lg border-gray-700 placeholder-gray-300 text-gray-300 text-sm py-3 px-5" type="email" name="email" placeholder="Email"/>
                        <input className="w-1/2 border rounded-lg border-gray-700 placeholder-gray-300 text-gray-300 text-sm py-3 px-5" type="text" name="subject" placeholder="Subject"/>
                    </div>
                    <textarea name="message " id="message" placeholder="Your Message" className="w-full border rounded-lg border-gray-700 placeholder-gray-300 text-gray-300 text-sm py-3 px-5 h-52"/>
                    <DarkBtn onClick={() => console.log("submit")}>
                        Submit Message
                    </DarkBtn>
                </form>
            </div>
        </div>
    )
}

export default Form;
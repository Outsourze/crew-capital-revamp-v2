import Introduction from "@/components/contact-us/Introduction";
import Form from "@/components/contact-us/Form";

export default function ContactUs() {
  return (
    <div className={""}>
      <div className="flex flex-col lg:gap-30 md:gap-10 max-md:gap-10 max-sm:gap-5">
        {/* hero section container */}
        <Introduction />
        <Form />
      </div>
    </div>
  );
}

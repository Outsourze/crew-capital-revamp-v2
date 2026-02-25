import Introduction from "@/components/contact-us/Introduction";
import Form from "@/components/contact-us/Form";
import Partners from "@/components/ui/Partners";

export default function ContactUs() {
  return (
    <div className={""}>
      <div className="flex flex-col relative">
        {/* hero section container */}
        <Introduction />
        <Form />
      </div>
    </div>
  );
}

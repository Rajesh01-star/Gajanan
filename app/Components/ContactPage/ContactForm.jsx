const InputField = ({ type, id, fieldName, placeholder }) => {
  return (
    <input
      type={type}
      id={id}
      name={fieldName}
      placeholder={placeholder}
      className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 lg:py-4 py-2"
    />
  );
};

const ContactForm = () => {
  return (
    <div className="container mx-auto lg:px-56 px-10">
      <h2 className="lg:text-3xl text-2xl font-semibold mb-6 text-center mt-6">
        Feel Free to Write Us Anytime
      </h2>
      <form className="flex flex-col space-y-4 px-4 items-center">
        <section className="flex lg:flex-row flex-col gap-4 w-full">
          <InputField
            type={"text"}
            id={"name"}
            name={"name"}
            placeholder={"Name"}
          />
          <InputField
            type={"email"}
            id={"email"}
            name={"email"}
            placeholder={"Email"}
          />
        </section>
        <section className="flex lg:flex-row flex-col gap-4 w-full">
          <InputField
            type={"text"}
            id={"subject"}
            name={"subject"}
            placeholder={"Subject"}
          />
          <InputField
            type={"tel"}
            id={"phone"}
            name={"phone"}
            placeholder={"Phone Number"}
          />
        </section>
        <textarea
          id="message"
          name="message"
          rows="4"
          placeholder="Message"
          className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 lg:py-4 py-2"
        ></textarea>
        <button
          type="submit"
          className="lg:w-1/3 w-1/2 h-12 lg:h-16 bg-[#ff2323] text-white font-semibold py-2 px-4 rounded-md hover:bg-black transition-colors duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

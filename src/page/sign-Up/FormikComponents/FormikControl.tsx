import Input from "./Input";
import Radio from "./Radio";
import Date from "./Date";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FormikControl = (props : any) => {
  switch (props.control) {
    case "input":
      return <Input {...props} />;
    case "radio":
      return <Radio {...props} />;
    case "date":
      return <Date {...props} />;
    default:
      return null;
  }
};

export default FormikControl;

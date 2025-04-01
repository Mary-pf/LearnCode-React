import Input from "./Input";
 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FormikControl = (props: any) => {
  switch (props.control) {
    case "input":
      return <Input {...props} />;
    default:
      return null;
  }
};

export default FormikControl;

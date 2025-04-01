import { Fragment } from "react";
import { FastField } from "formik";

interface Option {
  id: string;
  value: string;
}

interface RadioProps {
  name: string;
  label: string;
  options: Option[];
}

const Radio = ({ name, label, options }: RadioProps) => {
  return (
    <div className="mb-2">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <FastField name={name}>
        {({ field }: { field: { value: string; name: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void } }) =>
          options.map((o) => (
            <Fragment key={o.id}>
              <input
                className="form-check-input mx-2"
                type="radio"
                id={o.id}
                {...field}
                value={o.id}
                checked={field.value === o.id}
              />
              <label htmlFor={o.id} className="mx-4">
                {o.value}
              </label>
            </Fragment>
          ))
        }
      </FastField>
    </div>
  );
};

export default Radio;

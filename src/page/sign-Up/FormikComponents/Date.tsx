/* eslint-disable @typescript-eslint/no-explicit-any */
import { FastField } from "formik";
import jMoment from "moment-jalaali";
import { useEffect, useState } from "react";

interface DatePickerProps {
  formik: {
    errors: Record<string, string>;
    touched: Record<string, boolean>;
    values: Record<string, any>;
    setValues: (values: Record<string, any>) => void;
  };
  name: string;
  icon?: string;
  label?: string;
}

const days = Array.from({ length: 31 }, (_, i) => i + 1);
const months = [
  { id: 1, value: "فروردین" },
  { id: 2, value: "اردیبهشت" },
  { id: 3, value: "خرداد" },
  { id: 4, value: "تیر" },
  { id: 5, value: "مرداد" },
  { id: 6, value: "شهریور" },
  { id: 7, value: "مهر" },
  { id: 8, value: "آبان" },
  { id: 9, value: "آذر" },
  { id: 10, value: "دی" },
  { id: 11, value: "بهمن" },
  { id: 12, value: "اسفند" },
];

const DatePicker = ({ formik, name, icon, label }: DatePickerProps) => {
  const [day, setDay] = useState(1);
  const [month, setMonth] = useState(1);
  const [year, setYear] = useState(1400);
  const [years, setYears] = useState<number[]>([]);
  const [showConfig, setShowConfig] = useState(false);



  useEffect(() => {
    const now = jMoment();
    setDay(now.jDate());
    setMonth(now.jMonth() + 1);
    setYear(now.jYear());
  }, []);

  const handleShowDateConfig = () => {
    const yearList = Array.from({ length: 100 }, (_, i) => year - i);
    setYears(yearList);
    setShowConfig(true);
  };

  const handleSetInputDate = (e: React.MouseEvent) => {
    e.stopPropagation();
    formik.setValues({
      ...formik.values,
      [name]: `${day} / ${month} / ${year}`,
    });
    setShowConfig(false);
  };

  return (
    <div
      className={`wrap-input100 validate-input ${formik.errors[name] && formik.touched[name] ? "alert-validate" : ""}`}
      data-validate={formik.errors[name]}
    >
      <span onClick={handleShowDateConfig}>
        <FastField
          className="input100"
          type="text"
          name={name}
          placeholder={label}
          disabled
        />
      </span>

      {showConfig && (
        <div className="datePicker row w-100 m-0 p-0">
          <div className="col-3 d-flex justify-content-center align-items-center p-0">
            <select
              className="form-select"
              value={day}
              onChange={(e) => setDay(Number(e.target.value))}
            >
              {days.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
          </div>
          <div className="col-3 d-flex justify-content-center align-items-center p-0">
            <select
              className="form-select"
              value={month}
              onChange={(e) => setMonth(Number(e.target.value))}
            >
              {months.map((m) => (
                <option key={m.id} value={m.id}>
                  {m.value}
                </option>
              ))}
            </select>
          </div>
          <div className="col-3 d-flex justify-content-center align-items-center p-0">
            <select
              className="form-select"
              value={year}
              onChange={(e) => setYear(Number(e.target.value))}
            >
              {years.map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>
          </div>
          <div className="col-3 d-flex justify-content-center align-items-center p-0 pointer">
            <i className="fa fa-check text-success" onClick={handleSetInputDate}></i>
          </div>
        </div>
      )}

      <span className="symbol-input100">
        <i className={icon}></i>
      </span>
    </div>
  );
};

export default DatePicker;

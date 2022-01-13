type InputProps = {
  inputName: string;
  inputType: string;
  labelName: string;
  className?: string;
};

const Input = ({ inputName, inputType, labelName, className }: InputProps) => {
  return (
    <div className='flex flex-col relative'>
      <label htmlFor={inputName}>{labelName}</label>
      <input
        className={className}
        name={inputName}
        id={inputName}
        type={inputType}
      />
    </div>
  );
};

export default Input;

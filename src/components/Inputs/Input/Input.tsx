type InputProps = {
  inputName: string;
  inputType: string;
  labelName: string;
  inputValue?: string;
  className?: string;
  onClickUpdateState?: (e: React.MouseEvent<HTMLInputElement>) => void;
  onChangeUpdateState?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({
  inputName,
  inputType,
  labelName,
  className,
  onClickUpdateState,
  onChangeUpdateState,
  inputValue,
}: InputProps) => {
  return (
    <>
      <label
        className='font-extralight text-gray-50 text-lg tracking-wide'
        htmlFor={inputValue}
      >
        {labelName}
      </label>
      <input
        onChange={onChangeUpdateState}
        onClick={onClickUpdateState}
        className={className}
        name={inputName}
        id={inputValue}
        type={inputType}
        defaultValue={inputValue}
      />
    </>
  );
};

export default Input;

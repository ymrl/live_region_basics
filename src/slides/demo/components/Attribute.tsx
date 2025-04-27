export const Attribute = <T extends string>({
  options,
  value,
  values,
  onChange,
  name,
  multiple = false,
  disableds,
  labelSuffix

}: (
  | {
      multiple: true;
      values: T[];
      value?: never;
    }
  | {
      multiple?: false;
      values?: never;
      value: T;
    }
) & {
  options: T[];
  disableds?: boolean[];
  onChange: (option: T, checked: boolean) => void;
  name: string;
  labelSuffix?: string;
}) =>
  options.length > 1 ? (
    <fieldset className="flex flex-row gap-2 flex-wrap">
      {options.map((option, i) => (
        <label
          className="flex flex-row items-center bg-gray-100 px-4 py-2 rounded"
          key={option}
        >
          <input
            type={multiple ? "checkbox" : "radio"}
            className="mr-2 scale-125"
            name={name}
            value={option}
            checked={multiple ? values?.includes(option) : value === option}
            disabled={disableds?.[i] ?? false}
            onChange={(e) => {
              onChange(option, e.target.checked);
            }}
          />
          <span className="text-sm font-mono">{labelSuffix}{option}</span>
        </label>
      ))}
    </fieldset>
  ) : (
    <label className="flex flex-row items-center bg-gray-100 px-4 py-2 rounded">
      <input
        type="checkbox"
        className="mr-2 scale-125"
        name={name}
        value={options[0]}
        checked={value === options[0]}
        disabled={disableds?.[0] ?? false}
        onChange={(e) => {
          onChange(options[0], e.target.checked);
        }}
      />
      <span className="text-sm font-mono">{labelSuffix}{options[0]}</span>
    </label>
  );

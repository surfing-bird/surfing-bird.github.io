interface ParamFieldProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  showSlider?: boolean;
  suffix?: string;
}

export function ParamField({
  label,
  value,
  onChange,
  min = 0,
  max = 30,
  step = 1,
  showSlider = true,
  suffix,
}: ParamFieldProps) {
  const handleNumberChange = (raw: string) => {
    const parsed = Number(raw);
    if (!Number.isFinite(parsed)) {
      return;
    }
    onChange(Math.min(max, Math.max(min, parsed)));
  };

  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-xs font-semibold uppercase tracking-wide text-gray-600">
        {label}
      </span>
      <div className="flex items-center gap-2">
        <input
          type="number"
          value={value}
          min={min}
          max={max}
          step={step}
          onChange={(event) => handleNumberChange(event.target.value)}
          className="w-20 rounded-lg border border-gray-300 bg-white px-2 py-1.5 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400"
        />
        {suffix && <span className="text-xs text-gray-500">{suffix}</span>}
      </div>
      {showSlider && (
        <input
          type="range"
          value={value}
          min={min}
          max={max}
          step={step}
          onChange={(event) => onChange(Number(event.target.value))}
          className="w-full accent-gray-800"
        />
      )}
    </label>
  );
}

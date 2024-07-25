export interface Option {
  id: string | number;
  value: string | number;
  label: string;
}

export interface SelectBoxProps {
  label?: string;
  name: string;
  control?: any;
  options?: Option[];
  disabled?: boolean;
}

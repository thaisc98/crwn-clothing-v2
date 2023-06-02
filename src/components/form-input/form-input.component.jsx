import { Group, Input, FormInputLabel } from "./form-input.styles";

const FormInput = ({ label, ...othersProps }) => {
  return (
    <Group>
      <Input {...othersProps} />
      {label && (
        <FormInputLabel shrink={othersProps.value.length}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;

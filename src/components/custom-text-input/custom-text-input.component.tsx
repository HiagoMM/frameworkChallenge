import { useField } from 'formik';
import React from 'react';
import { HelperText, TextInput } from 'react-native-paper';
import { TextInputProps } from 'react-native-paper/lib/typescript/components/TextInput/TextInput';
import { View } from 'react-native';

interface CustomTextInputProps extends TextInputProps {
  name: string;
}

const CustomTextInput: React.FC<CustomTextInputProps> = props => {
  const [field, meta, helpers] = useField(props.name);

  const handleChange = (text: string) => {
    helpers.setValue(text);
  };

  const handleBlur = () => {
    helpers.setTouched(true);
  };
  const hasErrors = () => meta.touched && !!meta.error;

  return (
    <View>
      <TextInput
        {...props}
        onChangeText={handleChange}
        onBlur={handleBlur}
        value={field.value}
        error={hasErrors()}
      />
      <HelperText padding="none" type="error" visible={hasErrors()}>
        {meta.error}
      </HelperText>
    </View>
  );
};

export default CustomTextInput;

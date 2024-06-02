import { Grid, TextField, Alert } from "@mui/material";
import PropTypes from "prop-types";

const TextInputComponent = ({
  xs = 6,
  sm,
  id,
  label,
  autoFocus = false,
  value,
  onChange,
  onBlur,
  // errors,
  required,
  type,
}) => {
  return (
    <Grid item xs={xs} sm={sm}>
      <TextField
        name={id}
        fullWidth
        required={required}
        id={id}
        label={label}
        autoFocus={autoFocus}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        type={type}
      />
      {/* {errors && <Alert severity="error">{errors}</Alert>} */}
    </Grid>
  );
};

TextInputComponent.propTypes = {
  xs: PropTypes.number,
  sm: PropTypes.number,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  autoFocus: PropTypes.bool,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  // errors: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.string,
};

export default TextInputComponent;

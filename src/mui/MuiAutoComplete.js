import { useState, React } from "react";
import { Stack, Autocomplete, TextField } from "@mui/material";

const subject = ["maths", "english", "hindi", "kannada", "cs"];
const MuiAutoComplete = () => {
  const [val, setVal] = useState('');
  
  console.log({ value: val });
  return (
    <Stack spacing={2} width="250px" marginTop="10px">
      <Autocomplete
        options={subject}
        value={val}
        renderInput={(par) => <TextField {...par} label="Subjects" />}
        onChange={(e) => setVal(e.target.value)}
      />
    </Stack>
  );
};

export default MuiAutoComplete;

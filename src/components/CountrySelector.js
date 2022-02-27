import { FormControl, FormHelperText, InputLabel, NativeSelect } from '@material-ui/core'
import React from 'react'

function CountrySelector({value, handleOnChange,countries}) {
  return (
    <FormControl className='form-container'>
        <InputLabel htmlFor='country-selector' shrink>Quốc gia</InputLabel>
        <NativeSelect
            value={value}
            onChange={handleOnChange}
            inputProps={{
                name:'country',
                id: 'country-selector'
            }}
        >
            {
                countries.map((country) =>
                <option
                    key={country.ISO2}
                    value={country.ISO2.toLowerCase()}
                >
                    {country.Country}
                </option>)
            }
        </NativeSelect>
        <FormHelperText>Lựa chọn quốc gia</FormHelperText>
    </FormControl>
  )
}

export default CountrySelector
// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Styled Component
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'


// ** Third Party Styles Imports
import 'react-datepicker/dist/react-datepicker.css'
import BasicInformation from 'src/views/member/BasicInformation'
import EmploymentInformation from 'src/views/member/EmploymentDetails'

const FormLayouts = () => {
  return (
    <DatePickerWrapper>
      <Grid container spacing={6}>

        <Grid item xs={12}>
          <BasicInformation />
        </Grid>
        <Grid item xs={12}>
          <EmploymentInformation />
        </Grid>
      </Grid>
    </DatePickerWrapper>
  )
}

export default FormLayouts

// ** Icon imports
import Login from 'mdi-material-ui/Login'
import Table from 'mdi-material-ui/Table'
import CubeOutline from 'mdi-material-ui/CubeOutline'
import HomeOutline from 'mdi-material-ui/HomeOutline'
import FormatLetterCase from 'mdi-material-ui/FormatLetterCase'
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'
import CreditCardOutline from 'mdi-material-ui/CreditCardOutline'
import AccountPlusOutline from 'mdi-material-ui/AccountPlusOutline'
import AlertCircleOutline from 'mdi-material-ui/AlertCircleOutline'
import GoogleCirclesExtended from 'mdi-material-ui/GoogleCirclesExtended'

// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'
import {
  AccountSettings,
  ApplicationSettings,
  BookSettings,
  BriefcaseAccount,
  ChartBarStacked,
  CogOffOutline,
  CogOutline,
  EyeSettingsOutline,
  Finance,
  NewBox,
  PhoneSettingsOutline,
  PlusNetwork,
  SettingsHelper,
  StarSettingsOutline,
  ViewListOutline
} from 'mdi-material-ui'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Dashboard',
      icon: HomeOutline,
      path: '/'
    },
    {
      title: 'Account Settings',
      icon: AccountCogOutline,
      path: '/account-settings'
    },
    {
      sectionTitle: 'Members'
    },
    {
      title: 'Register',
      icon: AccountPlusOutline,
      path: '/new-member',
      openInNewTab: false
    },
    {
      title: 'Assessments',
      icon: EyeSettingsOutline,
      path: '/assessment',
      openInNewTab: false
    },
    {
      title: 'Reports',
      icon: ViewListOutline,
      path: '/members',
      openInNewTab: false
    },
    {
      title: 'Settings',
      icon: AccountSettings,
      path: '/settings'
    },
    {
      sectionTitle: 'Loans'
    },
    {
      title: 'New Loan',
      icon: NewBox,
      path: '/typography'
    },
    {
      title: 'View Loans',
      path: '/icons',
      icon:  ChartBarStacked
    },
    {
      title: 'Settings',
      icon: BookSettings,
      path: '/cards'
    },
    {
      sectionTitle: 'User Managment'
    },
    {
      title: 'Admin',
      icon: BriefcaseAccount,
      path: '/admin'
    },
    {
      title: 'Roles',
      path: '/roles',
      icon: GoogleCirclesExtended
    },
    {
      title: 'Settings',
      icon: CogOutline,
      path: '/cards'
    }
  ]
}

export default navigation

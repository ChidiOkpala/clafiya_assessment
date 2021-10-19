import {
  DashboardIcon,
  AppointmentIcon,
  HealthWorkerIcon,
  DepartmentIcon,
  PatientIcon,
  PaymentIcon,
  HelpIcon
} from '../components/atoms/svg'
import { MenuItemProps } from '../components/molecules/menuItem'
import { SummaryCardProps } from '../components/molecules/summaryCard'
import { SummaryChartProps } from '../components/molecules/summaryChart'
import { TableCardProps } from '../components/molecules/tableCard'

export const menuList: MenuItemProps[] = [
  {
    Icon: DashboardIcon,
    text: 'Dashboard'
  },
  {
    Icon: AppointmentIcon,
    text: 'Appointments'
  },
  {
    Icon: HealthWorkerIcon,
    text: 'Health Workers'
  },
  {
    Icon: DepartmentIcon,
    text: 'Departments'
  },
  {
    Icon: PatientIcon,
    text: 'Patients'
  },
  {
    Icon: PaymentIcon,
    text: 'Payments'
  },
]

export const summaryList: SummaryCardProps[] = [
  {
    title: 'Appointments',
    value: '213',
    image: '/assets/appointment-summary.png'
  },
  {
    title: 'New Patients',
    value: '104',
    image: '/assets/patient-summary.png'
  },
  {
    title: 'Interventions',
    value: '24',
    image: '/assets/intervention-summary.png'
  },
  {
    title: 'Clafiya’s Earnings',
    value: '$ 112,174',
    image: '/assets/earning-summary.png'
  }
]

export const chartData: SummaryChartProps[] = [
  {
    summaryValue: '$ 112,174',
    summaryTitle: 'Income in current month',
    chart: {
      verticalLabels: ['', '1 June', '8 July', '16 Augt', '24 Sept', '15 Oct'],
      horizontalData: [58000, 48000, 105000, 33000, 61000, 42000],
      lineColor: "#336CFB",
      pointColor: "#A9C1FD",
      stepSize: 20000,
    }
  },
  {
    summaryValue: '5,210',
    summaryTitle: 'Total Number of Appointment',
    chart: {
      verticalLabels: ['', '24 April', '26 May', '27 June', '28 July', '29 Aug', '30 Sept', '15 Oct'],
      horizontalData: [2200, 3400, 1700, 2800, 2050, 4800, 850, 2650],
      lineColor: "#FAC032",
      pointColor: "#FCDF98",
      stepSize: 1000
    }
  }
]

export const tableData: TableCardProps = {
  title: 'Appointment Activity',
  table: {
    theadData: [
      'Name',
      'Email',
      'Date',
      'Visit Time',
      'CHWs',
      'Plana',
      ''
    ],
    tbodyData: [
      {
        'profileId': { name: 'Babaginda Fox', image: '/assets/table-image1.png' },
        'email': 'babgindafox@example.com',
        'date': '10/10/2020',
        'visit-time': '09:15-09:45am',
        'chws': 'Blessing Chidi',
        'plana': 'BASIC'
      },
      {
        'profileId': { name: 'Jennie Johnson', image: '/assets/table-image2.png' },
        'email': 'jenniejohnson@example.com',
        'date': '10/12/2020',
        'visit-time': '12:00-12:45pm',
        'chws': 'Esther Lucky',
        'plana': 'FAMILY'
      },
      {
        'profileId': { name: 'Lucky Willams', image: '/assets/table-image3.png' },
        'email': 'luckywilliam@example.com',
        'date': '10/13/2020',
        'visit-time': '01:15-01:45pm',
        'chws': 'Blessing Chidi',
        'plana': 'BASIC'
      },
      {
        'profileId': { name: 'Blessing Wilsom', image: '/assets/table-image4.png' },
        'email': 'blessingwilliam@gmail.com',
        'date': '10/14/2020',
        'visit-time': '02:00-02:45pm',
        'chws': 'Esther Lucky',
        'plana': 'FAMILY'
      },
      {
        'profileId': { name: 'Purest Meion', image: '/assets/table-image5.png' },
        'email': 'purestmeion@example.com',
        'date': '10/15/2020',
        'visit-time': '12:00-12:45pm',
        'chws': 'Blessing Chidi',
        'plana': 'BASIC'
      },
    ]
  }
}

export const helpMenuItem: MenuItemProps = {
  text: 'help',
  Icon: HelpIcon
}

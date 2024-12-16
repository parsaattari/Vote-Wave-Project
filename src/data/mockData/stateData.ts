import { StateData } from '../../types';

export const stateData: StateData[] = [
  {
    id: 'ca',
    name: 'California',
    registrationUrl: 'https://registertovote.ca.gov/',
    registrationDeadline: '2024-10-24',
    electionDay: '2024-11-05',
    registrationMethod: 'full-digital',
    requirements: [
      {
        id: 'citizenship',
        icon: 'flag',
        title: 'I am a US Citizen',
        description: 'You must be a United States citizen to be eligible to vote',
        details: [
          'Birth in the United States',
          'Naturalization',
          'Citizenship through parents',
          'Proof may be required during registration'
        ]
      },
      {
        id: 'age',
        icon: 'calendar',
        title: 'I am or will be 18 years old by election day',
        description: 'Federal law requires voters to be at least 18 years old',
        details: [
          'Must be 18 by November 5, 2024',
          'Some states allow pre-registration at 16 or 17',
          'Cannot vote in general election if under 18'
        ]
      }
    ]
  },
  {
    id: 'ny',
    name: 'New York',
    registrationUrl: 'https://voterreg.dmv.ny.gov/MotorVoter/',
    registrationDeadline: '2024-10-20',
    electionDay: '2024-11-05',
    registrationMethod: 'print-mail',
    requirements: [
      {
        id: 'citizenship',
        icon: 'flag',
        title: 'I am a US Citizen',
        description: 'You must be a United States citizen to be eligible to vote',
        details: [
          'Birth in the United States',
          'Naturalization',
          'Citizenship through parents',
          'Proof may be required during registration'
        ]
      },
      {
        id: 'age',
        icon: 'calendar',
        title: 'I am or will be 18 years old by election day',
        description: 'Federal law requires voters to be at least 18 years old',
        details: [
          'Must be 18 by November 5, 2024',
          'Some states allow pre-registration at 16 or 17',
          'Cannot vote in general election if under 18'
        ]
      },
      {
        id: 'ssn',
        icon: 'file',
        title: 'Social Security Number',
        description: 'Last 4 digits of your SSN',
        details: ['Required for voter registration']
      }
    ]
  },
  {
    id: 'tx',
    name: 'Texas',
    registrationUrl: 'https://teamrv-mvp.sos.texas.gov/MVP/voterDetails.do',
    registrationDeadline: '2024-10-21',
    electionDay: '2024-11-05',
    registrationMethod: 'print-mail',
    requirements: [
      {
        id: 'citizenship',
        icon: 'flag',
        title: 'I am a US Citizen',
        description: 'You must be a United States citizen to be eligible to vote',
        details: [
          'Birth in the United States',
          'Naturalization',
          'Citizenship through parents',
          'Proof may be required during registration'
        ]
      },
      {
        id: 'age',
        icon: 'calendar',
        title: 'I am or will be 18 years old by election day',
        description: 'Federal law requires voters to be at least 18 years old',
        details: [
          'Must be 18 by November 5, 2024',
          'Can pre-register at 17.5 years old',
          'Cannot vote in general election if under 18'
        ]
      }
    ]
  },
  {
    id: 'fl',
    name: 'Florida',
    registrationUrl: 'https://registertovoteflorida.gov/en/Registration/Index',
    registrationDeadline: '2024-10-21',
    electionDay: '2024-11-05',
    registrationMethod: 'print-mail',
    requirements: [
      {
        id: 'citizenship',
        icon: 'flag',
        title: 'I am a US Citizen',
        description: 'You must be a United States citizen to be eligible to vote',
        details: [
          'Birth in the United States',
          'Naturalization',
          'Citizenship through parents',
          'Proof may be required during registration'
        ]
      },
      {
        id: 'age',
        icon: 'calendar',
        title: 'I am or will be 18 years old by election day',
        description: 'Federal law requires voters to be at least 18 years old',
        details: [
          'Must be 18 by November 5, 2024',
          'Can pre-register at 16',
          'Cannot vote in general election if under 18'
        ]
      }
    ]
  },
  {
    id: 'pa',
    name: 'Pennsylvania',
    registrationUrl: 'https://www.pavoterservices.pa.gov/Pages/VoterRegistrationApplication.aspx',
    registrationDeadline: '2024-10-21',
    electionDay: '2024-11-05',
    registrationMethod: 'print-mail',
    requirements: [
      {
        id: 'citizenship',
        icon: 'flag',
        title: 'I am a US Citizen',
        description: 'You must be a United States citizen to be eligible to vote',
        details: [
          'Birth in the United States',
          'Naturalization',
          'Citizenship through parents',
          'Proof may be required during registration'
        ]
      },
      {
        id: 'age',
        icon: 'calendar',
        title: 'I am or will be 18 years old by election day',
        description: 'Federal law requires voters to be at least 18 years old',
        details: [
          'Must be 18 by November 5, 2024',
          'Can pre-register at 17',
          'Cannot vote in general election if under 18'
        ]
      }
    ]
  },
  {
    id: 'oh',
    name: 'Ohio',
    registrationUrl: 'https://ohiosos.gov/elections/votingrules/register',
    registrationDeadline: '2024-10-21',
    electionDay: '2024-11-05',
    registrationMethod: 'full-digital',
    requirements: [
      {
        id: 'citizenship',
        icon: 'flag',
        title: 'I am a US Citizen',
        description: 'You must be a United States citizen to be eligible to vote',
        details: [
          'Birth in the United States',
          'Naturalization',
          'Citizenship through parents',
          'Proof may be required during registration'
        ]
      },
      {
        id: 'age',
        icon: 'calendar',
        title: 'I am or will be 18 years old by election day',
        description: 'Federal law requires voters to be at least 18 years old',
        details: [
          'Must be 18 by November 5, 2024',
          'Can pre-register at 17.5',
          'Cannot vote in general election if under 18'
        ]
      }
    ]
  },
  {
    id: 'ga',
    name: 'Georgia',
    registrationUrl: 'https://registertovote.gov.georgia.gov/',
    registrationDeadline: '2024-10-21',
    electionDay: '2024-11-05',
    registrationMethod: 'full-digital',
    requirements: [
      {
        id: 'citizenship',
        icon: 'flag',
        title: 'I am a US Citizen',
        description: 'You must be a United States citizen to be eligible to vote',
        details: [
          'Birth in the United States',
          'Naturalization',
          'Citizenship through parents',
          'Proof may be required during registration'
        ]
      },
      {
        id: 'age',
        icon: 'calendar',
        title: 'I am or will be 18 years old by election day',
        description: 'Federal law requires voters to be at least 18 years old',
        details: [
          'Must be 18 by November 5, 2024',
          'Can pre-register at 17',
          'Cannot vote in general election if under 18'
        ]
      }
    ]
  },
  {
    id: 'nc',
    name: 'North Carolina',
    registrationUrl: 'https://www.ncsbe.gov/voters/voter-registration',
    registrationDeadline: '2024-10-21',
    electionDay: '2024-11-05',
    registrationMethod: 'print-mail',
    requirements: [
      {
        id: 'citizenship',
        icon: 'flag',
        title: 'I am a US Citizen',
        description: 'You must be a United States citizen to be eligible to vote',
        details: [
          'Birth in the United States',
          'Naturalization',
          'Citizenship through parents',
          'Proof may be required during registration'
        ]
      },
      {
        id: 'age',
        icon: 'calendar',
        title: 'I am or will be 18 years old by election day',
        description: 'Federal law requires voters to be at least 18 years old',
        details: [
          'Must be 18 by November 5, 2024',
          'Can pre-register at 16',
          'Cannot vote in general election if under 18'
        ]
      }
    ]
  },
  {
    id: 'il',
    name: 'Illinois',
    registrationUrl: 'https://ova.elections.il.gov/',
    registrationDeadline: '2024-10-21',
    electionDay: '2024-11-05',
    registrationMethod: 'full-digital',
    requirements: [
      {
        id: 'citizenship',
        icon: 'flag',
        title: 'I am a US Citizen',
        description: 'You must be a United States citizen to be eligible to vote',
        details: [
          'Birth in the United States',
          'Naturalization',
          'Citizenship through parents',
          'Proof may be required during registration'
        ]
      },
      {
        id: 'age',
        icon: 'calendar',
        title: 'I am or will be 18 years old by election day',
        description: 'Federal law requires voters to be at least 18 years old',
        details: [
          'Must be 18 by November 5, 2024',
          'Can pre-register at 17',
          'Cannot vote in general election if under 18'
        ]
      }
    ]
  },
  {
    id: 'mi',
    name: 'Michigan',
    registrationUrl: 'https://mvic.sos.state.mi.us/Voter/Index',
    registrationDeadline: '2024-10-21',
    electionDay: '2024-11-05',
    registrationMethod: 'print-mail',
    requirements: [
      {
        id: 'citizenship',
        icon: 'flag',
        title: 'I am a US Citizen',
        description: 'You must be a United States citizen to be eligible to vote',
        details: [
          'Birth in the United States',
          'Naturalization',
          'Citizenship through parents',
          'Proof may be required during registration'
        ]
      },
      {
        id: 'age',
        icon: 'calendar',
        title: 'I am or will be 18 years old by election day',
        description: 'Federal law requires voters to be at least 18 years old',
        details: [
          'Must be 18 by November 5, 2024',
          'Can pre-register at 17.5',
          'Cannot vote in general election if under 18'
        ]
      }
    ]
  },
  {
    id: 'az',
    name: 'Arizona',
    registrationUrl: 'https://azsos.gov/elections/voting-election/register-vote-or-update-voter-information',
    registrationDeadline: '2024-10-21',
    electionDay: '2024-11-05',
    registrationMethod: 'full-digital',
    requirements: [
      {
        id: 'citizenship',
        icon: 'flag',
        title: 'I am a US Citizen',
        description: 'You must be a United States citizen to be eligible to vote',
        details: [
          'Birth in the United States',
          'Naturalization',
          'Citizenship through parents',
          'Proof may be required during registration'
        ]
      },
      {
        id: 'age',
        icon: 'calendar',
        title: 'I am or will be 18 years old by election day',
        description: 'Federal law requires voters to be at least 18 years old',
        details: [
          'Must be 18 by November 5, 2024',
          'Can pre-register at 17',
          'Cannot vote in general election if under 18'
        ]
      }
    ]
  },
  {
    id: 'ma',
    name: 'Massachusetts',
    registrationUrl: 'https://www.sec.state.ma.us/ele/eleReg/reghome.htm',
    registrationDeadline: '2024-10-21',
    electionDay: '2024-11-05',
    registrationMethod: 'print-mail',
    requirements: [
      {
        id: 'citizenship',
        icon: 'flag',
        title: 'I am a US Citizen',
        description: 'You must be a United States citizen to be eligible to vote',
        details: [
          'Birth in the United States',
          'Naturalization',
          'Citizenship through parents',
          'Proof may be required during registration'
        ]
      },
      {
        id: 'age',
        icon: 'calendar',
        title: 'I am or will be 18 years old by election day',
        description: 'Federal law requires voters to be at least 18 years old',
        details: [
          'Must be 18 by November 5, 2024',
          'Can pre-register at 16',
          'Cannot vote in general election if under 18'
        ]
      }
    ]
  },
  {
    id: 'sc',
    name: 'South Carolina',
    registrationUrl: 'https://www.scvotes.gov/how-register-to-vote',
    registrationDeadline: '2024-10-21',
    electionDay: '2024-11-05',
    registrationMethod: 'in-person',
    requirements: [
      {
        id: 'citizenship',
        icon: 'flag',
        title: 'I am a US Citizen',
        description: 'You must be a United States citizen to be eligible to vote',
        details: [
          'Birth in the United States',
          'Naturalization',
          'Citizenship through parents',
          'Proof may be required during registration'
        ]
      },
      {
        id: 'age',
        icon: 'calendar',
        title: 'I am or will be 18 years old by election day',
        description: 'Federal law requires voters to be at least 18 years old',
        details: [
          'Must be 18 by November 5, 2024',
          'Cannot pre-register',
          'Cannot vote in general election if under 18'
        ]
      }
    ]
  },
  {
    id: 'nh',
    name: 'New Hampshire',
    registrationUrl: 'https://sos.nh.gov/elections/voters/register-to-vote',
    registrationDeadline: '2024-10-21',
    electionDay: '2024-11-05',
    registrationMethod: 'in-person',
    requirements: [
      {
        id: 'citizenship',
        icon: 'flag',
        title: 'I am a US Citizen',
        description: 'You must be a United States citizen to be eligible to vote',
        details: [
          'Birth in the United States',
          'Naturalization',
          'Citizenship through parents',
          'Proof may be required during registration'
        ]
      },
      {
        id: 'age',
        icon: 'calendar',
        title: 'I am or will be 18 years old by election day',
        description: 'Federal law requires voters to be at least 18 years old',
        details: [
          'Must be 18 by November 5, 2024',
          'Cannot pre-register',
          'Cannot vote in general election if under 18'
        ]
      }
    ]
  }
];

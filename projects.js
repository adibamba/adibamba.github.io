// Portfolio projects data
window.Portfolio = window.Portfolio || {};
window.Portfolio.projects = [
  // High-impact newer projects first
  {
    id: 'avionics-cybersecurity-simulation',
    title: 'Avionics Cybersecurity Simulation',
    description: 'A simulation environment for avionics systems focusing on cybersecurity: threat scenarios, intrusion detection experiments, and resilience testing.',
    tags: ['Python', 'Simulation', 'Cybersecurity'],
    period: '06/2024 – Present',
    link: 'https://github.com/adibamba/avionics-cybersecurity-simulation',
    category: 'security',
    icon: 'plane'
  },
  {
    id: 'flight-path-optimization',
    title: 'Flight Path Optimization',
    description: 'Optimization algorithms for flight paths to reduce fuel consumption and emissions using numerical methods and heuristic optimization.',
    tags: ['Python', 'NumPy', 'Optimization'],
    period: '04/2024 – Present',
    link: 'https://github.com/adibamba/flight-path-optimization',
    category: 'ml',
    icon: 'route'
  },
  {
    id: 'learn-terraform-azure',
    title: 'Learn Terraform — Azure',
    description: 'Hands-on Terraform examples and modules for Azure: networking, compute, and identity resources to accelerate infrastructure as code learning.',
    tags: ['Terraform', 'Azure', 'IaC'],
    period: '02/2024 – Present',
    link: 'https://github.com/adibamba/learn-terraform-azure',
    category: 'cloud',
    icon: 'cloud'
  },
  {
    id: 'secure-authentication-nodejs-postgresql',
    title: 'Secure Authentication with Node.js & PostgreSQL',
    description: 'A secure authentication system built with Node.js, Express, bcrypt, JWT, and PostgreSQL. Includes best practices for password storage and session management.',
    tags: ['Node.js', 'PostgreSQL', 'Express'],
    period: '11/2023 – Present',
    link: 'https://github.com/adibamba/Secure-Authentication-with-Node.js-PostgreSQL',
    category: 'security',
    icon: 'lock'
  },
  // Previously listed projects
  {
    id: 'phishing-classification',
    title: 'Phishing Website Classification',
    description: 'A machine learning model to detect phishing websites using features from the UCI dataset. Includes data preprocessing, feature selection, and model evaluation.',
    tags: ['Python', 'Scikit-learn', 'Pandas', 'Jupyter'],
    period: '01/05/2024 – 15/06/2024',
    link: 'https://github.com/adibamba/phishing-classification',
    category: 'ml',
    icon: 'shield-alt'
  },
  {
    id: 'azure-vm-bicep',
    title: 'Azure Virtual Machine Deployment using Bicep',
    description: 'Automated deployment of a Windows VM in Azure using Bicep Infrastructure as Code templates.',
    tags: ['Azure', 'Bicep', 'PowerShell'],
    period: '20/03/2024 – 28/03/2024',
    link: 'https://github.com/adibamba/-Azure-Virtual-Machine-Deployment-using-Bicep',
    category: 'cloud',
    icon: 'server'
  },
  {
    id: 'exchange-online-support',
    title: 'Exchange Online Technical Support Report',
    description: 'A PowerShell script to generate diagnostic reports and automate common support tasks for Exchange Online environments.',
    tags: ['PowerShell', 'Microsoft 365'],
    period: '10/01/2024 – 20/01/2024',
    link: 'https://github.com/adibamba/ExchangeOnline-technical-support-report',
    category: 'cloud',
    icon: 'file-alt'
  },
  {
    id: '2d-ising-monte-carlo',
    title: '2D Ising Monte Carlo Simulation',
    description: 'Simulates the 2D Ising model using Monte Carlo methods to visualize phase transitions in statistical physics.',
    tags: ['Python', 'NumPy', 'Matplotlib'],
    period: '01/07/2023 – 15/07/2023',
    link: 'https://github.com/adibamba/2d-ising-monte-carlo',
    category: 'ml',
    icon: 'chart-area'
  }
];

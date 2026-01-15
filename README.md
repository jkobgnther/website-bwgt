# Bewegungskoordinator Tempelhof-Schöneberg

A modern, responsive website for the Movement Coordinator (Bewegungskoordinator) of Berlin's Tempelhof-Schöneberg district. This platform connects residents with local sports and movement opportunities, providing free consultation services and information about health-promoting activities in the community.

## 🎯 Project Overview

The Bewegungskoordinator website serves as a central hub for promoting physical activity and sports participation in the Tempelhof-Schöneberg district of Berlin. The platform facilitates connections between residents, sports organizations, and community facilities, making it easier for people of all ages and backgrounds to find suitable movement opportunities.

### Key Features

- **Interactive Berlin District Map** - Visual representation of movement opportunities across neighborhoods
- **Dual Contact Forms** - Specialized forms for consultation requests and general inquiries
- **Email Integration** - Automated email handling via Resend API with HTML-formatted messages
- **Responsive Design** - Mobile-first approach ensuring accessibility across all devices
- **Accessibility Compliance** - Dedicated accessibility statement and WCAG considerations
- **Instagram Integration** - Dynamic social media feed showcasing community activities
- **Multi-page Architecture** - Comprehensive information structure including services, blog, network, and project concept pages

## 🛠️ Technology Stack

### Core Framework
- **Next.js 14.2.5** - React-based framework with App Router for optimal performance
- **React 18.3.1** - Modern UI library with hooks and concurrent features
- **TypeScript 5.5.3** - Type-safe development for enhanced code quality

### Styling & UI
- **Tailwind CSS 3.4.6** - Utility-first CSS framework with custom design system
- **Custom Color Palette** - Brand-specific colors (green: #7FBF97, yellow: #EEEA63, blue: #B2DFDA, purple: #9C849E)
- **Heroicons 2.2.0** - Beautiful hand-crafted SVG icons
- **Inter Font** - Modern, accessible typography

### Backend & Services
- **Resend 6.6.0** - Reliable email delivery service for contact forms
- **Next.js API Routes** - Serverless API endpoints for form processing
- **Environment Variables** - Secure configuration management

### Development Tools
- **PostCSS & Autoprefixer** - CSS processing and browser compatibility
- **ESLint** - Code quality and consistency enforcement

## 📁 Project Structure

```
bwgt/
├── app/                          # Next.js App Router pages
│   ├── api/contact/             # Contact form API endpoint
│   ├── barrierefreiheit/        # Accessibility statement
│   ├── blog/                    # News and information sheets
│   ├── datenschutz/             # Privacy policy
│   ├── impressum/               # Legal notice
│   ├── kontakt/                 # Contact pages
│   ├── netzwerk/                # Network of movement coordinators
│   ├── projektidee/             # Project concept and background
│   ├── services/                # Consultation and services
│   ├── globals.css              # Global styles and Tailwind directives
│   ├── layout.tsx               # Root layout with metadata
│   └── page.tsx                 # Homepage
├── components/                   # Reusable React components
│   ├── BerlinMapInteractive.tsx # Interactive district map
│   ├── ContactBanner.tsx        # Call-to-action contact section
│   ├── Cookiebot.tsx           # Cookie consent integration
│   ├── ExpandableFAQ.tsx       # Accordion-style FAQ sections
│   ├── Footer.tsx              # Site footer with navigation
│   ├── Header.tsx              # Main navigation header
│   ├── Instagram.tsx           # Instagram posts & reels embed
│   └── StartPageHeader.tsx     # Hero section for homepage
├── public/                      # Static assets
│   ├── fotos/                  # Photography and portraits
│   ├── flyer/                  # Marketing materials
│   └── logo/                   # Brand assets and icons
├── files/                       # Downloadable resources
├── .env.example                 # Environment variable template
├── next.config.js              # Next.js configuration
├── tailwind.config.js          # Tailwind CSS customization
└── tsconfig.json               # TypeScript configuration
```

## 📧 Email Functionality

The website includes a sophisticated contact form system with two variants:

### Consultation Form (`/kontakt/beratung`)
Specialized form for residents seeking movement and sports consultation, collecting:
- Personal information (name, contact details)
- Demographics (age, gender, location)
- Preferences (desired sports/movement types)
- Detailed inquiry message

### General Contact Form (`/kontakt`)
Standard contact form for general inquiries and partnerships

### Technical Implementation
- **API Route**: `/app/api/contact/route.ts`
- **Email Service**: Resend with HTML-formatted emails
- **Security**: Input sanitization and HTML escaping
- **Validation**: Server-side validation of required fields
- **Error Handling**: Comprehensive error messages in German

## 🎨 Design System

### Color Palette
The website uses a vibrant, accessible color scheme:

- **Primary Green** (#7FBF97) - Main brand color, used for CTAs and highlights
- **Yellow** (#EEEA63) - Accent color for energy and attention
- **Blue** (#B2DFDA) - Calming accent for information sections
- **Purple** (#9C849E) - Secondary accent for variety

### Typography
- **Font Family**: Inter (Google Fonts)
- **Responsive Sizing**: Tailwind's responsive utilities
- **Accessibility**: High contrast ratios for readability

### Components
All components follow a consistent design language with:
- Rounded corners (border-radius: 8px-16px)
- Subtle shadows for depth
- Smooth transitions and hover states
- Mobile-first responsive breakpoints

## 🌐 Page Structure

| Route | Purpose |
|-------|---------|
| `/` | Homepage with project overview and key information |
| `/services` | Detailed information about consultation services |
| `/blog` | News, updates, and informational resources |
| `/kontakt` | General contact form |
| `/kontakt/beratung` | Specialized consultation request form |
| `/projektidee` | Project concept, background, and team information |
| `/netzwerk` | Network of movement coordinators across Berlin districts |
| `/impressum` | Legal notice (Impressum) |
| `/datenschutz` | Privacy policy (GDPR compliance) |
| `/barrierefreiheit` | Accessibility statement |

## 🔒 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `RESEND_API_KEY` | API key from Resend for email functionality | Yes |
| `CONTACT_EMAIL` | Recipient email for form submissions | Yes |
| `NODE_ENV` | Environment (development/production) | Yes |

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

All components adapt gracefully across screen sizes, with special attention to:
- Touch-friendly interactive elements
- Readable typography on small screens
- Optimized images with Next.js Image component

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels where appropriate
- Keyboard navigation support
- High contrast color combinations
- Alt text for all images
- Dedicated accessibility statement page

## 📄 License

This project is private and proprietary to bwgt e.V.

## 👤 Developer

**Jakob Günther**

This website was developed as part of the Bewegungskoordinator project for the Tempelhof-Schöneberg district of Berlin, managed by bwgt e.V.

---

**Note**: This is a production website serving the Berlin community. For questions or contributions, please contact the project administrator.

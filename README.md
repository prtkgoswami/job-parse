# Job Description Parser

A Next.js web application that extracts structured data from job postings using AI, converting messy job descriptions into clean, standardized JSON format.

![Job Application Dashboard Screenshot](https://github.com/prtkgoswami/job-parse/blob/main/public/screenshot.png)

## 🎯 Purpose

Job Description Parser helps you quickly extract critical information from job postings found on LinkedIn, Wellfound, and other job boards. The structured JSON output can be easily consumed by job tracking tools like [JobTrackr](https://jobtrack.pratikgoswami.dev/) or integrated into your own applications.

## ✨ Features

- **AI-Powered Parsing**: Uses OpenAI's GPT-4o-mini to intelligently extract job information
- **Structured Output**: Returns standardized JSON with:
  - Job title and company name
  - Location and work arrangement (Remote/Hybrid/Onsite)
  - Compensation details
  - Responsibilities and requirements
  - Additional relevant information
- **Secure**: API key stored server-side in environment variables
- **Cost Effective**: ~$0.0004 per parse (essentially free for personal use)
- **Dark/Light Theme**: Automatic theme detection with manual toggle
- **User-Friendly Interface**: Clean, minimal design with real-time parsing

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- An OpenAI API account with API key ([Get one here](https://platform.openai.com/api-keys))

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/job-description-parser.git
cd job-description-parser
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory:
```bash
OPEN_AI_API_KEY=your_openai_api_key_here
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

### Setting Up OpenAI API

1. Create an account at [OpenAI Platform](https://platform.openai.com/signup)
2. Add a payment method (required even for free tier)
3. Generate an API key from [API Keys page](https://platform.openai.com/api-keys)
4. Copy the API key and add it to your `.env.local` file

**Note**: New users get $5 in free credits, which is enough for ~12,000+ job description parses.

**Security Note**: Never commit your `.env.local` file to version control. It's already included in `.gitignore`.

## 📖 Usage

1. **Paste Job Description**: Copy any job posting and paste it into the textarea
2. **Parse**: Click "Parse Description" to extract structured data
3. **Copy Output**: Use the formatted JSON for your tracking tools or applications
4. **Clear**: Reset the input to parse another job description

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **AI**: OpenAI GPT-4o-mini API
- **Theme**: next-themes
- **Icons**: Font Awesome
- **Syntax Highlighting**: react-syntax-highlighter

## 📦 Project Structure
```
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── parseDescription/
│   │   │       └── route.ts          # API endpoint for parsing
│   │   ├── layout.tsx                # Root layout with theme provider
│   │   ├── page.tsx                  # Main page
│   │   ├── MainContent.tsx           # Main UI component
│   │   ├── Header.tsx                # App header with theme toggle
│   │   ├── ActionsBar.tsx            # UI Component to hold the App CTAs - Parse & Reset
│   │   ├── AboutModal.tsx            # Modal to hold the About Info
│   │   ├── ThemeProvider.tsx         # Theme provider wrapper
│   │   └── globals.css               # Global styles
│   ├── hooks/
│   │   └── useParseDesc.ts           # Custom hook for API calls
│   ├── components/
│   │   └── Modal.tsx                 # Reusable Modal Component
├── .env.local                        # Environment variables (not committed)
├── tailwind.config.js                # Tailwind configuration
└── package.json
```

## 🔒 Privacy & Security

- **Server-Side API Keys**: OpenAI API key stored securely in `.env.local` (never exposed to client)
- **No Data Storage**: Job descriptions and parsed data are never stored
- **Direct API Calls**: Data processed server-side and immediately returned
- **Open Source**: Full transparency - review the code yourself

## 💰 Cost Breakdown

Using GPT-4o-mini:
- **Input**: $0.15 per 1M tokens
- **Output**: $0.60 per 1M tokens
- **Average cost per job description**: ~$0.0004 (less than a penny)
- **Free tier**: $5 credits = ~12,000+ parses

For personal use, you'll likely never exceed the free tier.

## 🎨 Output Format
```ts
{
  title: string;
  company: string;
  location: {
    city: string;
    state: string;
    country: string;
  };
  jobType: "Remote" | "Onsite" | "Hybrid";
  jobLink: string;
  compensation: string;
  responsibilities: string[];
  requirements: string[];
  otherImportantData: string[];
}
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Powered by [OpenAI](https://openai.com/)
- Icons by [Font Awesome](https://fontawesome.com/)
- Inspired by the need for better job search organization tools

## 📧 Contact

Website: [Pratik Goswami](https://www.pratikgoswami.dev/)

---
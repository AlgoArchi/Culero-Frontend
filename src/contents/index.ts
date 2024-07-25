export * from './Navbar'
import { HowProp } from '@/components/UI'

export interface IPorjectDetail {
  image: string
  title: string
  content: string
  client: string
  link: string
  tags: string[]
}
export interface IContents {
  dashboard: {
    about: {
      description: string
    }
    why: {
      first: string
      second: string
      third: string
    },
    mission: string
    join: string
  }
  about: {
    about: string
    aboutSec: string
  }
  how: {
    how: HowProp[]
  },
  faq: {
    faq: HowProp[]
  }
  footer: {
    description: string
  }
}
export const contents: IContents = {
  dashboard: {
    about: {
      description:
        'At Culero, we believe in the power of shared experiences to shape professional journeys. Our platform is designed to foster transparency and collaboration within the professional community. Join us in building a space where career insights are accessible to all.',
    },
    why: {
      first: `Insights That Matter: Gain valuable insights into your potential manager's style based on real, peer-driven reviews.`,
      second: `Empowering Employees: Your voice matters. Culero provides a platform for employees to share their experiences and shape workplace cultures.`,
      third: `Bottom-Up Management: Foster a culture of transparency by empowering employees to review and assess managerial effectiveness.`
    },
    mission: `Culero is dedicated to revolutionizing the workplace dynamic by fostering transparency and trust through employee-driven reviews. We're based in Delaware, committed to providing a platform where every voice counts.`,
    join: `Empower Yourself: Make informed decisions about your work environment.
    Shape Workplace Culture: Contribute to a culture of transparency and accountability.
    Join Our Community: Connect with like-minded individuals and share your experiences.
    Join us in reshaping the way we view management and creating better workplaces through shared experiences.`
  },
  about: {
    about:
    `Culero is revolutionizing the workplace dynamic by providing a space for honest and informative reviews of managers. Founded in the heart of Delaware, Culero's mission is to empower employees by offering a platform that facilitates a deeper understanding of managerial styles.`,
    aboutSec: `We recognize the significance of the work environment in an individual's life and aim to foster transparency and trust through peer-based reviews. Culero operates with the core belief that every voice matters in shaping a healthy workplace culture.`
  },
  how: {
    how: [
      {
        title: 'Find Your Manager:',
        content:
          `Locate the social profile of the manager you'd like to review.`,
      },
      {
        title: 'Share Your Experience:',
        content:
          `Write a review based on your unique experiences and interactions.`,
      },
      {
        title: `Empower Others:`,
        content:
          `Contribute to a database of peer reviews to guide others in their workplace decisions.`,
      },
    ],
  },
  faq: {
    faq: [
      {
        title: `Q: What is Culero and how does it work?`,
        content:
          `A: Culero is a platform that allows employees to review their managers based on personal experiences. Users locate their manager's social profile and write reviews, sharing insights into managerial styles.`,
      },
      {
        title: 'Q: Are the reviews on Culero anonymous?',
        content:
          `A: Yes, users have the option to keep their reviews anonymous or choose to share their details publicly.`,
      },
      {
        title: `Q: Can managers respond to the reviews posted about them?`,
        content:
          `A: Managers have the ability to respond to reviews on Culero, fostering constructive dialogue between employees and managers.`,
      },
      {
        title: `How does Culero ensure the accuracy of reviews?`,
        content:
          `A: Culero encourages honest and genuine reviews based on individual experiences. Users are advised to share factual and relevant information.`,
      },
      {
        title: `Q: Can I post a review if I no longer work with the manager or company?`,
        content:
          `A: Yes, Culero allows former employees to share their experiences and contribute to the database of reviews.`,
      },
      {
        title: `Q: Are there guidelines for writing reviews on Culero?`,
        content:
          `A: Yes, Culero provides guidelines to ensure reviews are constructive, respectful, and based on firsthand experiences.`,
      },
      {
        title: `Q: Can companies or managers influence or remove reviews on Culero?`,
        content:
          `A: Culero maintains review integrity and does not allow companies or managers to influence or remove reviews without valid reasons.`,
      },
      {
        title: `Q: How does Culero protect user privacy and data?`,
        content:
          `A: Culero takes user privacy seriously, employing industry-standard security measures to safeguard personal information. Detailed privacy policies outline data handling practices.`,
      },
      {
        title: `Q: Is there a process to report inappropriate content or reviews on Culero?`,
        content:
          `A: Yes, Culero provides a reporting system for users to flag inappropriate content or reviews that violate community guidelines.`,
      },
      {
        title: `Q: Can I search for specific types of reviews or managers on Culero?`,
        content:
          `A: Culero offers search functionalities, allowing users to filter reviews based on various criteria, such as industry, managerial traits, or company size.`,
      }   
    ],
  },
  footer: {
    description:
      'At Culero, we believe in the power of transparency and the importance of a healthy work environment. Our platform is designed to offer a unique perspective on managerial styles, enabling employees to make informed decisions about their workplace.'
  },
}

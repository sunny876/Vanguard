import React from 'react';
import { useSearchContext } from "../../contexts/SearchContext";
import { VuiFlexContainer, VuiFlexItem, VuiTitle, VuiSpacer } from "../../ui";
import { useConfigContext } from "../../contexts/ConfigurationContext";
import "./categoryQuestions.scss";

// Define category and questions
interface Question {
  text: string;
  references: any[]; // Required property
  highestFcsScore?: number; // Optional computed property for sorting
}

interface Category {
  title: string;
  questions: Question[];
}

// Define the question categories and related references
const QUESTION_CATEGORIES: Category[] = [
  {
    title: "Admissions and Enrollment",
    questions: [
      { 
        text: "What are the steps to apply to San Diego City College?",
        references: [
          { 
            id: "sdcc-apply-2025", 
            title: "SDCC Application Process",
            description: "The application process includes: 1) Complete online application through CCCApply, 2) Create a MySDCCD account, 3) Complete orientation, 4) Take placement tests if required, 5) Meet with a counselor, 6) Register for classes.",
            fcsScore: 0.92,
            riskLevel: 'Low Risk'
          }
        ]
      },
      { 
        text: "What are the deadlines for enrollment at SDCC?",
        references: [
          { 
            id: "sdcc-deadlines-2025", 
            title: "SDCC Enrollment Deadlines",
            description: "Fall 2025 semester: Priority registration begins April 15, General registration begins May 1, Late registration ends September 5. Spring 2026 semester: Priority registration begins November 15, General registration begins December 1.",
            fcsScore: 0.88,
            riskLevel: 'Low Risk'
          }
        ] 
      },
      { 
        text: "How does the wait list process work at SDCC?",
        references: [
          { 
            id: "sdcc-waitlist-2025", 
            title: "SDCC Waitlist System",
            description: "When a class is full, students can join a waitlist. If a spot opens, the first student on the waitlist will be automatically enrolled and notified via email. Students have 24 hours to pay fees before losing their spot.",
            fcsScore: 0.85,
            riskLevel: 'Low Risk'
          }
        ] 
      },
      { 
        text: "What admissions requirements can and cannot be waived?",
        references: [
          { 
            id: "sdcc-requirements-2025", 
            title: "SDCC Admissions Requirements",
            description: "Non-waivable requirements: California residency documentation, high school completion or equivalent. Waivable requirements: placement tests (with qualifying AP scores), orientation (for returning students), counseling appointment (for continuing students).",
            fcsScore: 0.79,
            riskLevel: 'Medium Risk'
          }
        ]
      },
      { 
        text: "How can I check my application status?",
        references: [
          { 
            id: "sdcc-status-2025", 
            title: "SDCC Application Status Check",
            description: "Log into your MySDCCD portal to check your application status. The portal shows: application receipt confirmation, missing documents, enrollment appointment time, and registration eligibility status.",
            fcsScore: 0.95,
            riskLevel: 'Low Risk'
          }
        ]
      }
    ]
  },
  {
    title: "Financial Information",
    questions: [
      { 
        text: "How do I apply for financial aid?",
        references: [
          { 
            id: "sdcc-fafsa-2025", 
            title: "SDCC Financial Aid Application Process",
            description: "To apply for financial aid: 1) Complete the FAFSA at fafsa.gov using school code 001273, 2) Create an FSA ID, 3) Submit any additional requested documents through your student portal, 4) Accept or decline your aid offers through the SDCCD portal.",
            fcsScore: 0.95,
            riskLevel: 'Low Risk'
          }
        ] 
      },
      { 
        text: "When is the FAFSA deadline?",
        references: [
          { 
            id: "sdcc-fafsa-deadline-2025", 
            title: "FAFSA Deadlines for SDCC",
            description: "Priority deadline for FAFSA submission is March 2nd for the following academic year. The general FAFSA application period opens October 1st and closes June 30th. Submit early for best consideration for grants and work-study opportunities.",
            fcsScore: 0.92,
            riskLevel: 'Low Risk'
          }
        ] 
      },
      { 
        text: "Are there campus jobs available for students?",
        references: [
          { 
            id: "sdcc-campus-jobs-2025", 
            title: "SDCC Student Employment",
            description: "Yes, SDCC offers various on-campus employment opportunities through departments, labs, and student services. Positions include tutoring, library assistance, administrative support, and technical roles. Most positions pay between $15-20 per hour.",
            fcsScore: 0.88,
            riskLevel: 'Low Risk'
          }
        ] 
      },
      { 
        text: "How do I check my financial aid status?",
        references: [
          { 
            id: "sdcc-aid-status-2025", 
            title: "Financial Aid Status Check",
            description: "Log into your SDCCD student portal, select 'Financial Aid,' then 'View Financial Aid Status.' You can view outstanding requirements, award amounts, and disbursement dates. Enable notifications to receive updates about your application.",
            fcsScore: 0.90,
            riskLevel: 'Low Risk'
          }
        ]
      },
      { 
        text: "Do you offer work-study programs?",
        references: [
          { 
            id: "sdcc-workstudy-2025", 
            title: "Federal Work-Study at SDCC",
            description: "Yes, SDCC participates in the Federal Work-Study program. Eligible students can work part-time while enrolled, earning at least minimum wage. Positions are available both on-campus and with approved off-campus community partners.",
            fcsScore: 0.87,
            riskLevel: 'Low Risk'
          }
        ]
      }
    ]
  },
  {
    title: "Frequently Asked Questions",
    questions: [
      { 
        text: "How do I get involved?",
        references: [
          { 
            id: "sdcc-involvement-2025", 
            title: "Student Involvement at SDCC",
            description: "Get involved through: 1) Student clubs and organizations, 2) Associated Students Government, 3) Campus events and activities, 4) Athletics and intramural sports, 5) Cultural organizations, 6) Academic interest groups. Visit the Student Life Office or check the online Student Portal for current opportunities.",
            fcsScore: 0.89,
            riskLevel: 'Low Risk'
          }
        ] 
      },
      { 
        text: "What is the difference between technical education and transfer programs?",
        references: [
          { 
            id: "sdcc-programs-2025", 
            title: "SDCC Program Types",
            description: "Technical education programs provide hands-on training for specific careers and typically lead to certificates or Associate of Applied Science degrees. Transfer programs are designed for students planning to continue at four-year universities and include general education courses that fulfill bachelor's degree requirements.",
            fcsScore: 0.91,
            riskLevel: 'Low Risk'
          }
        ] 
      },
      { 
        text: "Will my classes transfer to other colleges?",
        references: [
          { 
            id: "sdcc-transfer-2025", 
            title: "SDCC Course Transfer Guide",
            description: "Most general education and lower-division major courses transfer to California public universities through established articulation agreements. Use ASSIST.org to check course equivalencies. Always consult with a counselor to ensure courses align with your transfer institution's requirements.",
            fcsScore: 0.94,
            riskLevel: 'Low Risk'
          }
        ] 
      },
      { 
        text: "Where are the study abroad programs for this year?",
        references: [
          { 
            id: "sdcc-abroad-2025", 
            title: "Study Abroad Opportunities",
            description: "Current study abroad programs include semester-long options in Spain (Madrid), Italy (Florence), Japan (Tokyo), and short-term summer programs in Mexico (Mexico City) and France (Paris). Programs include cultural immersion, language study, and specific major-related coursework.",
            fcsScore: 0.86,
            riskLevel: 'Low Risk'
          }
        ]
      },
      { 
        text: "Give me a list of online classes",
        references: [
          { 
            id: "sdcc-online-2025", 
            title: "Online Course Offerings",
            description: "Current online classes include: English Composition, Introduction to Psychology, U.S. History, College Algebra, Introduction to Business, Public Speaking, Biology for Non-Majors, Art History, Computer Science Fundamentals, and Sociology. Check the class schedule for specific sections and availability.",
            fcsScore: 0.93,
            riskLevel: 'Low Risk'
          }
        ]
      }
    ]
  }
];

// Pre-process questions to add highest FCS score for sorting
QUESTION_CATEGORIES.forEach(category => {
  category.questions.forEach(question => {
    // Find the highest FCS score among valid references (>=0.35)
    const validReferences = question.references.filter(ref => ref.fcsScore >= 0.35);
    
    if (validReferences.length > 0) {
      question.highestFcsScore = Math.max(...validReferences.map(ref => ref.fcsScore));
    } else {
      question.highestFcsScore = 0;
    }
  });
  
  // Sort questions by highest FCS score
  category.questions.sort((a, b) => (b.highestFcsScore || 0) - (a.highestFcsScore || 0));
});

export const CategoryQuestions = () => {
  const { onSearch } = useSearchContext();
  const { exampleQuestions } = useConfigContext();
  
  // Group questions by category
  const categories: Category[] = [
    {
      title: "Market Research",
      questions: exampleQuestions.filter((_: string, i: number) => i < 4).map((q: string) => ({ 
        text: q,
        references: []
      }))
    },
    {
      title: "Financial Analysis",
      questions: exampleQuestions.filter((_: string, i: number) => i >= 4 && i < 7).map((q: string) => ({ 
        text: q,
        references: []
      }))
    },
    {
      title: "Portfolio Management",
      questions: exampleQuestions.filter((_: string, i: number) => i >= 7).map((q: string) => ({ 
        text: q,
        references: []
      }))
    }
  ];

  const handleSearchClick = (text: string) => {
    onSearch({ value: text });
  };

  return (
    <div className="categoryQuestionsContainer">
      <VuiFlexContainer spacing="none" alignItems="stretch">
        {categories.map((category, categoryIndex) => (
          <VuiFlexItem key={categoryIndex}>
            <div className="categoryCard">
              <VuiTitle size="s">
                <h2>{category.title}</h2>
              </VuiTitle>
              
              <VuiSpacer size="s" />
              
              <VuiFlexContainer direction="column" spacing="none">
                {category.questions.map((question, questionIndex) => (
                  <VuiFlexItem key={questionIndex}>
                    <button
                      className="questionButton"
                      onClick={() => handleSearchClick(question.text)}>
                      {question.text}
                    </button>
                  </VuiFlexItem>
                ))}
              </VuiFlexContainer>
            </div>
          </VuiFlexItem>
        ))}
      </VuiFlexContainer>
    </div>
  );
}; 
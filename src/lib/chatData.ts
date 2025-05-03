// lib/chatData.ts
export interface Citation {
    text: string;
    source: string;
  }
  
  export interface ChatAnswer {
    text: string;
    citations: Citation[];
  }
  
  export interface ChatData {
    question: string;
    answer: ChatAnswer;
  }
  
  const chatData: ChatData[] = [
    {
      question: "my head hurts",
      answer: {
        text: `Head pain is a common complaint that can have various causes. While there's not enough information to determine the specific cause of your head pain, here are some key points to consider:
  
        Types: Head pain can manifest as headaches, which affect 4 out of 5 people annually.
        
        Severity: In 50% of cases, headaches are severe enough to interfere with daily activities.
        
        Causes: Potential causes include:
        - Ear diseases
        - Neuralgias
        - Temporomandibular joint dysfunction
        - Rhinological pathologies
        - Cervical spine problems
      
        Warning signs: Seek immediate medical attention if you experience:
        - Worsening headache
        - Repeated vomiting
        - Seizures
        - Slurred speech
        - Weakness in arms/legs
        - Increased confusion
      
        Self-care: Pharmacists can provide support for headache management.
      
        If symptoms persist or worsen, consult a healthcare professional for proper diagnosis and treatment.`,
        citations: [
          { text: "Headaches affect 4 out of 5 people annually", source: "[1]" },
          { text: "50% of headaches are severe enough to interfere with daily activities", source: "[1]" },
          { text: "Consult healthcare professional if symptoms persist", source: "[2]" }
        ]
      }
    },
    {
      question: "What is hypertension?",
      answer: {
        text: "Hypertension is a condition where your blood pressure is consistently too high.",
        citations: [
          {
            text: "World Health Organization (2023).",
            source: "https://www.who.int/news-room/fact-sheets/detail/hypertension",
           },
      ],
    }
  },
  {
    question: "Why do I always feel tired even after enough sleep?",
    answer: {
      text: `Even after getting enough sleep, persistent tiredness can result from various causes like poor sleep quality, lifestyle habits, circadian rhythm issues, medical conditions, or bedtime procrastination. Consult a doctor if it continues.`,
      citations: [
        {
          text: "Sleep Insufficiency. StatPearls Publishing.",
          source: "https://www.ncbi.nlm.nih.gov/books/n/statpearls/article-146359/",
        },
        {
          text: "Why Is Your Active Patient Tired?",
          source: "https://pubmed.ncbi.nlm.nih.gov/27424649/",
        }
      ]
    }
  },
  {
    question: "What should I do if my blood sugar is high?",
    answer: {
      text: `Check your blood sugar, follow your medication, and exercise if appropriate. Monitor for ketones and stay hydrated. Follow your diabetes meal plan and see a doctor for persistent or severe symptoms.`,
      citations: [
        {
          text: "Healthline: Blood Sugar Spike",
          source: "https://www.healthline.com/health/blood-sugar-spike",
        },
        {
          text: "MedlinePlus: Hyperglycemia",
          source: "https://medlineplus.gov/hyperglycemia.html",
        }
      ]
    }
  },
  {
    question: "What’s the best medicine for headaches?",
    answer: {
      text: `Treatment varies depending on the type of headache. Mild ones can be treated with acetaminophen or NSAIDs. Migraines respond to triptans. Severe cases may require antiemetics or corticosteroids.`,
      citations: [
        {
          text: "Acute Headache. StatPearls Publishing.",
          source: "https://www.ncbi.nlm.nih.gov/books/n/statpearls/article-22610/",
        },
        {
          text: "Lack of Sleep Headache. Healthline",
          source: "https://www.healthline.com/health/lack-of-sleep-headache",
        }
      ]
    }
  },
  {
    question: "I have a headache?",
    answer: {
      text: `Headaches are usually not caused by mild hypertension. However, in hypertensive crises, headaches can occur. Persistent headaches with other symptoms should prompt medical attention.`,
      citations: [
        {
          text: "Secondary headaches due to hypertension.",
          source: "https://pubmed.ncbi.nlm.nih.gov/24250915/",
        },
        {
          text: "Negative association between hypertension and headaches.",
          source: "https://pubmed.ncbi.nlm.nih.gov/34148406/",
        }
      ]
    }
  },
  {
    question: "What are the symptoms of high blood pressure?",
    answer: {
      text: `Hypertension is generally a silent condition, with most people experiencing no symptoms even at dangerously high levels [2][1]. However, in severe cases, some symptoms may occur:
      
      1.	Common symptoms:
o	Dizziness [1][3][4]
o	Shortness of breath [2][4]
o	Flushing [1][3]
o	Blood spots in the eyes (subconjunctival hemorrhage) [1][3]

2.	Less common or disputed symptoms:
o	Headaches [2][4][5]
o	Nosebleeds [2][4]
o	Irregular heartbeat [4][5]
o	Vision changes [4][5]
The most reliable way to detect hypertension is through regular blood pressure readings [1].
`,
      citations: [
        {
          text: "Healthline: High Blood Pressure Symptoms",
          source: "https://www.healthline.com/health/high-blood-pressure-hypertension",
        },
        {
          text: "Mayo Clinic: High Blood Pressure",
          source: "https://www.mayoclinic.org/diseases-conditions/high-blood-pressure/symptoms-causes/syc-20373410",
        }
      ]
    }
  },
  {
    question: "How can I know if I have dengue fever?",
    answer: {
      text: `Symptoms include high fever, joint pain, rash, headache, and nausea. Seek prompt care if you suspect dengue, especially if symptoms worsen.`,
      citations: [
        {
          text: "Healthline: Dengue Fever",
          source: "https://www.healthline.com/health/dengue-fever",
        },
        {
          text: "Mayo Clinic: Dengue",
          source: "https://www.mayoclinic.org/diseases-conditions/dengue-fever/symptoms-causes/syc-20353078",
        }
      ]
    }
  },
  {
    question: "What should I do if I have stomach pain?",
    answer: {
      text: `Try hydration, diet changes (BRAT), antacids, and rest. Severe or persistent pain needs medical evaluation.`,
      citations: [
        {
          text: "Stomach Pain and COVID-19",
          source: "https://www.healthline.com/health/stomach-pain-covid",
        },
        {
          text: "Abdominal Pain: Causes and When to See a Doctor",
          source: "https://www.healthline.com/health/abdominal-pain",
        }
      ]
    }
  }
];

export default chatData;
  
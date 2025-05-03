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
        text: `Hypertension, also known as high blood pressure, is a common cardiovascular disorder characterized by persistent elevation of blood pressure above normal limits [1]. It affects 20% to 50% of the adult population in developed countries, making it the most prevalent cardiovascular disorder [2].
    
    Key points about hypertension:
    1. It's a progressive cardiovascular syndrome with various interrelated causes [2]
    2. It's a major risk factor for cardiovascular diseases, stroke, and death [2]
    3. It affects an estimated 690 million people worldwide [2]
    4. It can be classified as primary (genetic and environmental factors) or secondary (underlying medical conditions or medications) [1]
    
    Early detection and proper management are crucial, as hypertension often goes unrecognized and poorly controlled [1][2].`,
        citations: [
          {
            text: "Wahl and Tubbs (2019) A review of the clinical anatomy of hypertension. Clinical anatomy (New York, N.Y.).",
            source: "https://pubmed.ncbi.nlm.nih.gov/30873636/"
          },
          {
            text: "Bielecka-Dabrowa et al. (2011) The Rise and Fall of Hypertension: Lessons Learned from Eastern Europe. Current cardiovascular risk reports.",
            source: "https://pubmed.ncbi.nlm.nih.gov/21475621/"
          }
        ]
      }
    },
    {
      question: "Why do I always feel tired even after enough sleep?",
      answer: {
        text: `Even after getting enough sleep, feeling constantly tired can be frustrating. While insufficient sleep is a common cause of fatigue, other factors may contribute to persistent tiredness:
  
  - **Sleep quality**: Poor sleep quality, despite adequate duration, can lead to daytime fatigue[1].
  - **Lifestyle factors**: Improper eating habits and training practices may cause fatigue[2].
  - **Circadian misalignment**: Social jetlag or shift work can disrupt your body's natural rhythm[1].
  - **Medical conditions**: Chronic illnesses or medication side effects may cause excessive daytime sleepiness[1].
  - **Bedtime procrastination**: Going to bed later than intended can affect sleep quality[2].
  
  If fatigue persists, consult a healthcare professional to rule out underlying health issues and improve your sleep habits.`,
        citations: [
          {
            text: "Amin and Sankari (2023) Sleep Insufficiency. StatPearls Publishing.",
            source: "https://www.ncbi.nlm.nih.gov/books/n/statpearls/article-146359/"
          },
          {
            text: "Munnings (1992) Why Is Your Active Patient Tired?. The Physician and sportsmedicine.",
            source: "https://pubmed.ncbi.nlm.nih.gov/27424649/"
          }
        ]
      }
    },
    {
      question: "What should I do if my blood sugar is high?",
      answer: {
        text: `If your blood sugar is high, here are some steps you can take:
  
  - Check your blood sugar regularly and take your medication as prescribed[1].
  - Exercise to lower blood sugar, but only if your level is below 240 mg/dL[1].
  - Test for ketones if blood sugar is repeatedly above 240 mg/dL; avoid exercise if ketones are present[1].
  - Follow your diabetes meal plan and choose low glycemic index foods[2].
  - Stay hydrated and monitor symptoms.
  - Seek emergency medical attention if you suspect diabetic ketoacidosis (DKA)[1].
  - Get regular checkups with your healthcare team.[2]
  Remember, 77% of people take action when they associate symptoms with high blood sugar [2].`,
        citations: [
          {
            text: "Corinne O'Keefe Osborn (2017) High Blood Sugar: Symptoms, Spike, and More. healthline.com.",
            source: "https://www.healthline.com/health/blood-sugar-spike"
          },
          {
            text: "National Library of Medicine (2023) Hyperglycemia | High Blood Sugar | Diabetes. medlineplus.gov.",
            source: "https://medlineplus.gov/hyperglycemia.html"
          }
        ]
      }
    },
    {
      question: "What’s the best medicine for headaches?",
      answer: {
        text: `Based on the provided information, there is no single "best" medicine for headaches, as treatment depends on the type and severity of the headache. However, here are some effective options:
  
1.	For mild to moderate headaches:
o	Over-the-counter pain relievers like acetaminophen, ibuprofen, or aspirin [1][2]
o	NSAIDs (e.g., naproxen, ketorolac) for excellent analgesic effect [1]
2.	For migraines:
o	Triptans (e.g., sumatriptan) for good long-term relief [1][2]
o	Combination medications with caffeine and aspirin (e.g., Excedrin Migraine) [2]
3.	For severe or persistent headaches:
o	Antidopaminergic agents (e.g., prochlorperazine, metoclopramide) for both pain relief and antiemetic effects [1]
o	Corticosteroids (e.g., dexamethasone) to decrease headache recurrence, especially for migraines lasting over 72 hours [1]

  
  Always consult a healthcare provider for personalized treatment recommendations.`,
        citations: [
          {
            text: "Baraness and Baker (2023) Acute Headache. StatPearls Publishing",
            source: "https://www.ncbi.nlm.nih.gov/books/n/statpearls/article-22610/"
          },
          {
            text: "Erica Cirino (2018) Lack of Sleep Headache: Treatments and More. healthline.com.",
            source: "https://www.healthline.com/health/lack-of-sleep-headache"
          }
        ]
      }
    },
    {
      question: "I have a headache?",
      answer: {
        text: `Based on the provided articles, there may not be sufficient evidence to directly link your headache to high blood pressure. However, I can provide some relevant information:
  
1.	Headaches are generally not associated with mild to moderate hypertension [1][2].
2.	Some studies even suggest a negative association between hypertension and headaches [2].
3.	Headaches may occur during a hypertensive crisis, which is a sudden, severe spike in blood pressure [2].
If your headache persists or is accompanied by other symptoms like blurred vision or chest pain, it's advisable to seek medical attention, as these could indicate a more serious condition [2].`,
        citations: [
          {
            text: "Assarzadegan et al. (2013) Secondary headaches attributed to arterial hypertension. Iranian journal of neurology.",
            source: "https://pubmed.ncbi.nlm.nih.gov/24250915/"
          },
          {
            text: "Manandhar et al. (2021) If headache has any association with hypertension, it is negative. Evidence from a population-based study in Nepal. Cephalalgia : an international journal of headache.",
            source: "https://pubmed.ncbi.nlm.nih.gov/34148406/"
          }
        ]
      }
    },
    {
      question: "What are the symptoms of high blood pressure (hypertension)?",
      answer: {
        text: `Hypertension is usually silentcondition, with most people experiencing no symptoms even at dangerously high levels [2][1]. However, in severe cases, some symptoms may occur:
  
  **Common symptoms**:
  - Dizziness[1][2]
  - Shortness of breath[1][2]
  - Flushing[1]
  - Blood spots in the eyes[1]
  
  **Less common or disputed symptoms**:
  - Headaches[2]
  - Nosebleeds[2]
  - Irregular heartbeat[1]
  - Vision changes[1]
  
  The most reliable way to detect hypertension is through regular blood pressure readings [1].`,
        citations: [
          {
            text: "Kimberly Holland (2014) High Blood Pressure (Hypertension): Symptoms and More. healthline.com.",
            source: "https://www.healthline.com/health/high-blood-pressure-hypertension"
          },
          {
            text: "Mayo Clinic (2024) High blood pressure (hypertension). Mayo Clinic.",
            source: "https://www.mayoclinic.org/diseases-conditions/high-blood-pressure/symptoms-causes/syc-20373410"
          }
        ]
      }
    },
    {
      question: "What is hypertension?",
      answer: {
        text: `Hypertension, also known as high blood pressure, is a common cardiovascular disorder characterized by persistent elevation of blood pressure above normal limits [1]. It affects 20% to 50% of the adult population in developed countries, making it the most prevalent cardiovascular disorder [2].
  
  Key points about hypertension:
  1. It's a progressive cardiovascular syndrome with various interrelated causes [2]
  2. It's a major risk factor for cardiovascular diseases, stroke, and death [2]
  3. It affects an estimated 690 million people worldwide [2]
  4. It can be classified as primary (genetic and environmental factors) or secondary (underlying medical conditions or medications) [1]
  
  Early detection and proper management are crucial, as hypertension often goes unrecognized and poorly controlled [1][2].`,
        citations: [
          {
            text: "Wahl and Tubbs (2019) A review of the clinical anatomy of hypertension. Clinical anatomy (New York, N.Y.).",
            source: "https://pubmed.ncbi.nlm.nih.gov/30873636/"
          },
          {
            text: "Bielecka-Dabrowa et al. (2011) The Rise and Fall of Hypertension: Lessons Learned from Eastern Europe. Current cardiovascular risk reports.",
            source: "https://pubmed.ncbi.nlm.nih.gov/21475621/"
          }
        ]
      }
    },
    {
      question: "How can I know if I have dengue fever?",
      answer: {
        text: `To identify if you have dengue fever, look for these key symptoms [1][2]:
  
  - High fever (up to 104°F/40°C), usually sudden onset
  - Severe headache
  - Muscle, bone, and joint pain
  - Pain behind the eyes
  - Nausea and vomiting
  - Skin rash (appearing 2-5 days after fever)
  - Swollen lymph glands
  
  Symptoms typically last 2-7 days [1]. If you've recently traveled to a dengue-endemic area and experience these symptoms, seek medical attention promptly. Severe dengue can develop quickly, with warning signs like severe abdominal pain, persistent vomiting, and bleeding [2].`,
        citations: [
          {
            text: "Bree Normandin (2012) Dengue Fever: Symptoms, Complications & Diagnosis. healthline.com.",
            source: "https://www.healthline.com/health/dengue-fever"
          },
          {
            text: "Mayo Clinic (2024) Dengue fever. Mayo Clinic.",
            source: "https://www.mayoclinic.org/diseases-conditions/dengue-fever/symptoms-causes/syc-20353078"
          }
        ]
      }
    },
    {
      question: "What should I do if I have stomach pain?",
      answer: {
        text: `If you have stomach pain, here are some steps you can take to find relief:
  
1.	Stay hydrated: Drink water or electrolyte-replacing beverages in small sips [1].
2.	Adjust your diet: Try the BRAT diet (Bananas, Rice, Applesauce, Toast) or other easily digestible foods [2][1].
3.	Use over-the-counter medications:
o	Antacids for mild symptoms
o	OTC proton pump inhibitors or H2 blockers to reduce stomach acid [2]
4.	Apply heat: Use a heating pad or take a warm bath [2].
5.	Try natural remedies: Ginger, chamomile tea, or apple cider vinegar may help [2].
6.	Rest: Get plenty of sleep [1].

  
 If pain persists or worsens, consult a doctor for proper diagnosis and treatment, as severe cases may require prescription medications or further intervention.`,
        citations: [
          {
            text: "Rachel Nall, MSN, CRNA (2023) Stomach Pain and COVID-19: Symptoms, Treatment, Duration. healthline.com.",
            source: "https://www.healthline.com/health/stomach-pain-covid"
          },
          {
            text: "April Kahn (2020) Abdominal (Stomach) Pain: Causes and When to See a Doctor . healthline.com.",
            source: "https://www.healthline.com/health/abdominal-pain"
          }
        ]
      }
    },
    {
      question: "What is the difference between a cold and the flu?",
      answer: {
        text: `The common cold and flu are both respiratory illnesses with overlapping symptoms, but they differ in several key aspects:
  
1. Severity: Flu symptoms are generally more severe than cold symptoms [1][2].
2. Onset: Flu symptoms tend to begin more suddenly, while colds develop gradually.
3. Duration: Colds typically last 7-10 days (up to 2 weeks), while flu symptoms usually last 1-2 weeks.
4. Complications: The flu is more likely to lead to serious health complications like pneumonia or sepsis, especially in vulnerable individuals [1][2].
5. Symptoms: While both share symptoms like runny nose and fatigue, the flu is more likely to cause high fever, severe body aches, and extreme fatigue.

Diagnostic testing can help definitively distinguish between a cold and the flu.`,
        citations: [
          {
            text: "Kimberly Holland (2016) Common Cold: Symptoms, How to Treat, and More. healthline.com.",
            source: "https://www.healthline.com/health/cold-flu/cold"
          },
          {
            text: "Kimberly Holland (2020) Flu: Vaccine, Causes, Treatment, and More. healthline.com.",
            source: "https://www.healthline.com/health/cold-flu/flu"
          }
        ]
      }
    },
    {
      question: "How do I know if this is just a cough or something more serious like the flu?",
      answer: {
        text: `While it's challenging to definitively diagnose without a medical examination, here are some key differences to help you distinguish between a common cough and the flu:
  
1. Onset: Flu symptoms tend to come on suddenly, while a common cough often develops gradually [1][2].
2. Severity: Flu symptoms are generally more severe than those of a common cough [2].
3. Additional symptoms: The flu typically includes fever, severe body aches, and extreme fatigue, which are less common with just a cough [1].
4. Duration: Flu symptoms usually last 1-2 weeks, while a common cough may resolve sooner [1].

If you're unsure or symptoms worsen, consult a healthcare professional for proper diagnosis and treatment [2].`,
        citations: [
          {
            text: "Rena Goldman (2015) Cold or Flu? How to Know Which One You Have. healthline.com.",
            source: "https://www.healthline.com/health/cold-flu/cold-or-flu"
          },
          {
            text: "S. Srakocic (2023) Types of Colds: Symptoms, Stages, and Duration. healthline.com.",
            source: "https://www.healthline.com/health/types-of-colds"
          }
        ]
      }
    },
    {
      question: "How can I prevent acid reflux?",
      answer: {
        text: `To prevent acid reflux, consider implementing these lifestyle changes:
  

        1.	Modify your diet:
        o	Avoid trigger foods like fatty, spicy, and acidic items [1][2]
        o	Eat smaller, more frequent meals 
        2.	Adjust eating habits:
        o	Wait at least 3 hours after eating before lying down [1]
        o	Chew food slowly and thoroughly 
        3.	Sleep modifications:
        o	Elevate the head of your bed 6-8 inches [2]
        o	Sleep on your left side 
        4.	Lifestyle changes:
        o	Maintain a healthy weight [1][2]
        o	Quit smoking [2]
        o	Wear loose-fitting clothing [2]
        o	Take a leisurely walk after dinner 
        5.	Limit or avoid:
        o	Alcohol and caffeine 
        o	Carbonated beverages [1][2]
        

Implementing these strategies can significantly reduce acid reflux occurrences and improve overall digestive health.`,
        citations: [
          {
            text: "James Roland (2022) Acid Reflux and Liver Disease: Signs, Symptoms and Prevention. healthline.com.",
            source: "https://www.healthline.com/health/acid-reflux-and-liver-disease"
          },
          {
            text: "Michael Kerr (2023) How to Prevent Acid Reflux and Heartburn. healthline.com.",
            source: "https://www.healthline.com/health/gerd/preventing-heartburn"
          }
        ]
      }
    },
    {
      question: "Is it safe to use steroid cream for eczema?",
      answer: {
        text: `Steroid creams are generally safe and effective for treating eczema when used as directed, but they do come with potential side effects [1][2]. Here are key points to consider:
  

        1.	Safety:
        o	Topical steroids are one of the most commonly prescribed treatments for eczema [1]
        o	They help reduce inflammation and itching, promoting skin healing [1]
        2.	Usage:
        o	Always follow your doctor's instructions or packaging directions [1]
        o	Apply directly to the eczema rash [1]
        3.	Side effects:
        o	Local effects may include skin thinning, bruising, and acne [2]
        o	Systemic effects are rare but can include Cushing's syndrome and high blood pressure [2]
        4.	Precautions:
        o	Consult a healthcare professional before use, especially for children [1]
        o	Be cautious with long-term use or application on thin skin areas [2]`,
        citations: [
          {
            text: "Jaime Herndon, MS, MPH, MFA (2021) Steroid Cream for Eczema: What You Need to Know. healthline.com.",
            source: "https://www.healthline.com/health/eczema/steroid-cream-for-eczema"
          },
          {
            text: "Jaime Herndon, MS, MPH, MFA (2021) Steroid Cream for Eczema: What You Need to Know. healthline.com.",
            source: "https://www.healthline.com/health/eczema/steroid-cream-for-eczema"
          }
        ]
      }
    },
    {
      question: "Why does it burn when I pee? Is it a UTI?",
      answer: {
        text: `Burning sensation during urination is often associated with a urinary tract infection (UTI), but it's not the only possible cause. Here's what you should know:
  
1.	UTI symptoms:
o	Burning sensation when urinating
o	Frequent urge to urinate
o	Little urine output despite urgency
o	Strong-smelling or cloudy urine
o	Possible fever and chills [1][2]
2.	UTI prevalence: UTIs are more common in people with vaginas due to shorter urethras [2]
3.	Other possible causes:
o	STIs (e.g., genital herpes, gonorrhea, chlamydia)
o	Prostatitis (in people with prostates)
o	Cystitis (bladder inflammation)
o	Urethritis (urethra inflammation)
o	Kidney stones
o	Irritation from soaps or detergents [2]

Consult a healthcare provider for proper diagnosis and treatment, especially if symptoms persist or worsen.`,
        citations: [
          {
            text: "Kimberly Holland (2017) Vaginal Burning: 12 Causes and Treatment Methods. healthline.com.",
            source: "https://www.healthline.com/health/womens-health/vaginal-burning"
          },
          {
            text: "Scott Frothingham (2019) How to Relieve UTI Pain at Night: Medical and Home Remedies. healthline.com.",
            source: "https://www.healthline.com/health/how-to-relieve-uti-pain-at-night"
          }
        ]
      }
    },
    {
      question: "What are the early signs of diabetes?",
      answer: {
        text: `Early signs of diabetes often develop gradually, especially in type 2 diabetes. Based on the provided information, the most common early symptoms include:
  
1.	Increased thirst [1][2]
2.	Frequent urination, especially at night [1][2]
3.	Excessive fatigue or weakness [1][2]
4.	Blurred vision [1][2]
5.	Increased hunger [1][2]
6.	Unexplained weight loss [1][2]
7.	Dry mouth [1]
8.	Slow-healing cuts, sores, or bruises [2]


It's important to note that 89% of newly diagnosed type 2 diabetes patients presented with one or more hyperglycemic symptoms [2]. However, many people with type 2 diabetes may not experience any symptoms initially [1].`,
        citations: [
          {
            text: "Jaime Herndon, MS, MPH, MFA (2014) Diabetes Symptoms: Early Signs, Complications & More. healthline.com.",
            source: "https://www.healthline.com/health/diabetes/diabetes-symptoms-2"
          },
          {
            text: "S. Srakocic (2021) Diabetes Symptoms: Type 1, Type 2, and Comparisons. healthline.com.",
            source: "https://www.healthline.com/health/diabetes-symptoms"
          }
        ]
      }
    },
  ];

export default chatData;
  
import sluggo from 'sluggo';


export function generateStaticParams() {
  return [
  {
    slug: ["a", "1"]
  },
  {

    slug: ["a", "2"]
  },
  {
    slug: ["a", "3"]
  },
  {
    slug: ["b", "1"]
  },
  {
    slug: ["b", "2"]
  },
  {
    slug: ["b", "3"]
  },
  {
    slug: ["c", "1"]
  },
  {
    slug: ["c", "2"]
  },
  {
    slug: ["c", "3"]
  },
  {
    slug: ["d", "1"]
  },
  {
    slug: ["d", "2"]
  },
  {
    slug: ["d", "3"]
  },
  {
    slug: ["e", "1"]
  },
  {
    slug: ["e", "2"]
  },
  {
    slug: ["e", "3"]
  },
];
}
 

export default function Page({ params }) {
  const { slug } = params 
  console.log(slug)
  const prompts =  [
  {
    prompt:
    "Can you produce an ROI report for the specific {COMPANY NAME} that comprises {KPI1}, {KPI2}, and {KPI3} for the time frame between {START DATE} and {END DATE}? Kindly deliver an examination of the gathered data along with suggestions for enhancing performance in each category.",
    "subcategory": "Create ROI report",
    categories: ["Business", "Marketing"],
    audiences: ["Businesses", "Marketers"],
    "sub-audiences": ["Digital Marketing Experts", "SEO Consultants"],
    slug: ["a", "1"]
  },
  {
    prompt:
      "What was the mean expenditure per generated lead for {COMPANY NAME} throughout the period from {START DATE} to {END DATE}? Kindly furnish an assessment of the information along with suggested enhancements for this measurement.",
    "subcategory": "Create ROI report",
    categories: ["Business", "Marketing"],
    audiences: ["Businesses", "Marketers"],
    "sub-audiences": ["Digital Marketing Experts", "SEO Consultants"],
    slug: ["a", "2"]
  },
  {
    prompt:
    "What marketing channels yielded the highest return on investment (ROI) for {COMPANY NAME} during the timeframe of {START DATE} to {END DATE}? Kindly present a comprehensive analysis of the data along with recommendations for future campaigns on each respective channel.",
    "subcategory": "Create ROI report",
    categories: ["Business", "Marketing"],
    audiences: ["Businesses", "Marketers"],
    "sub-audiences": ["Digital Marketing Experts", "SEO Consultants"],
    slug: ["a", "3"]
  },
  {
    prompt:
      "Could you please analyze the open rates of my most recent email campaign for {COMPANY}, which was sent on {DATE}, and offer me a detailed breakdown of the various devices utilized by the recipients?",
    "subcategory": "Analyze email campaign metrics",
    categories: ["Business", "Marketing"],
    audiences: ["Businesses", "Marketers"],
    "sub-audiences": [
      "Digital Marketing Experts",
      "Email Marketing Specialists",
    ],
    slug: ["b", "1"]
  },
  {
    prompt:
      "What information can you share about the click-through rates of the email campaign of the designated type that we conducted during the specified time period for the particular product or service? Which call-to-action button proved to be the most successful in generating clicks?",
    "subcategory": "Analyze email campaign metrics",
    categories: ["Business", "Marketing"],
    audiences: ["Businesses", "Marketers"],
    "sub-audiences": [
      "Digital Marketing Experts",
      "Email Marketing Specialists",
    ],
    slug: ["b", "2"]
  },
  {
    prompt:
      "{How does the percentage of customers who make a purchase after receiving our email campaigns compare to the average rates in the {SECTOR} industry? Can you provide recommendations on areas where we can make enhancements based on {SPECIFIC METRIC}?}",
    "subcategory": "Analyze email campaign metrics",
    categories: ["Business", "Marketing"],
    audiences: ["Businesses", "Marketers"],
    "sub-audiences": [
      "Digital Marketing Experts",
      "Email Marketing Specialists",
    ],
    slug: ["b", "3"]
  },
  {
    prompt:
      "{INDUSTRY} business, {COMPANY NAME}, which focuses on {PRODUCT/SERVICE}, is seeking assistance in creating a KPI dashboard. The primary goal is to monitor {SPECIFIC KPIs} and deliver data in a visually appealing and easily comprehensible manner tailored to {TARGET AUDIENCE}.",
    "subcategory": "Create client KPI dashboard",
    categories: ["Business", "Design"],
    audiences: ["Businesses", "Designers"],
    "sub-audiences": ["Operations Managers"],
    slug: ["c", "1"]
  },
  {
    prompt:
      "Can you help me design a KPI dashboard that is specifically designed for my clients in the {INDUSTRY} sector? I need assistance in identifying the most suitable KPIs for {COMPANY NAME} and building a personalized dashboard that offers actionable insights. It is crucial that the dashboard is fully optimized for {TARGET AUDIENCE}.",
    "subcategory": "Create client KPI dashboard",
    categories: ["Business", "Design"],
    audiences: ["Businesses", "Designers"],
    "sub-audiences": ["Operations Managers"],
    slug: ["c", "2"]
  },
  {
    prompt:
      "Having difficulty comprehending the information displayed on my KPI dashboard. Inquire if it is possible to provide guidance on comprehending the importance of the {SPECIFIC KPI} data and utilizing it to enhance my {BUSINESS GOAL}. It should be noted that my intended recipient for this data is {TARGET AUDIENCE}.",
    "subcategory": "Create client KPI dashboard",
    categories: ["Business", "Design"],
    audiences: ["Businesses", "Designers"],
    "sub-audiences": ["Operations Managers"],
    slug: ["c", "3"]
  },
  {
    prompt:
      "Can you assist me in initiating a fresh undertaking with my agency? I require assistance in determining the aims of the project, charting out schedules, and guaranteeing that all individuals involved in the project are in agreement with the objectives {YOUR GOALS}. This particular project, known as {PROJECT NAME}, is intricate, hence any valuable perspectives you can offer would be extremely valued.",
    "subcategory": "Conduct project kick-off call",
    categories: ["Business"],
    audiences: ["Businesses", "Project Managers"],
    "sub-audiences": ["Software Project Managers", "Team Leaders"],
    slug: ["d", "1"]
  },
  {
    prompt:
      "I am embarking on {YOUR PROJECT}, a fresh undertaking, alongside a client. However, I find myself uncertain regarding the initial steps. How can I harness the power of ChatGPT to provide me with guidance during the project kick-off call? More precisely, I require assistance in defining the objectives, setting timelines, and identifying the deliverables for {CLIENT NAME}.",
    "subcategory": "Conduct project kick-off call",
    categories: ["Business"],
    audiences: ["Businesses", "Project Managers"],
    "sub-audiences": ["Software Project Managers", "Team Leaders"],
    slug: ["d", "2"]
  },
  {
    prompt:
      "What can I do to guarantee that the initial conference calls for my agency's project {YOUR PROJECT} are fruitful and efficient? The issue of communication and coordination among individuals with an interest in the project is a frequent challenge we face.",
    "subcategory": "Conduct project kick-off call",
    categories: ["Business"],
    audiences: ["Businesses", "Project Managers"],
    "sub-audiences": ["Software Project Managers", "Team Leaders"],
    slug: ["d", "3"]
  },
  {
    prompt:
      "Can you produce an intricate overview of the {PROJECT MILESTONES} that have been accomplished up until now?",
    "subcategory": "Update project documentation",
    categories: ["Business", "Writing"],
    audiences: ["Businesses", "Project Managers"],
    "sub-audiences": ["Small Business Owners", "Startup Founders"],
    slug: ["e", "1"]
  },
  {
    prompt:
      "What notable achievements has {YOUR PROJECT} accomplished so far, and how do these advancements contribute to our overall progress?",
    "subcategory": "Update project documentation",
    categories: ["Business", "Writing"],
    audiences: ["Businesses", "Project Managers"],
    "sub-audiences": ["Small Business Owners", "Startup Founders"],
        slug: ["e", "2"]
  },
  {
    prompt:
      "Kindly provide an account of the present condition of {YOUR PROJECT}, encompassing any obstacles or problems that necessitate resolution.",
    "subcategory": "Update project documentation",
    categories: ["Business", "Writing"],
    audiences: ["Businesses", "Project Managers"],
    "sub-audiences": ["Small Business Owners", "Startup Founders"],
    slug: ["e", "3"]
  },
];

const promptHolder = prompts.find((p) => p.slug.join(',') === slug.join(','))


  if (promptHolder) {
  return(
    <div>
        <h1>
            {promptHolder.prompt}
        </h1>
    </div>
  )
}
else{
    return(
    <div>
        <h1>
            404 fuck
        </h1>
    </div>
  )
}
}
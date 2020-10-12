const data = [
    {
      text: "🌎 172 countries could potentially participate in an initiative aimed at working with manufacturers to provide worldwide equitable access to safe and effective vaccines",
      link: "https://www.who.int/news-room/detail/24-08-2020-172-countries-and-multiple-candidate-vaccines-engaged-in-covid-19-vaccine-global-access-facility",
      source: "@WHO"
    },
    {
      text: "🇩🇪 The German government is expecting a COVID-19 vaccine to be available by mid-2021",
      link: "https://www.dw.com/en/germany-coronavirus-vaccine-likely-available-by-mid-2021/a-54938078",
      source: "@dwnews"
    },
    {
      text: "📊 The Coronavirus Vaccine Tracker was released to visualize the progress being made",
      link: "https://www.nytimes.com/interactive/2020/science/coronavirus-vaccine-tracker.html",
      source: "@nytimes"
    },
    {
      text: "🇸🇪 While many European countries are seeing new cases surge, Sweden has one of the continent’s lowest infection rates",
      link: "https://www.theguardian.com/world/2020/sep/15/sweden-records-its-fewest-daily-covid-19-cases-since-march",
      source: "@guardiannews"
    },
    {
      text: "🇨🇳 A Chinese vaccine candidate receives the first foreign approval",
      link: "https://www.wsj.com/articles/in-global-covid-19-vaccine-race-chinese-shot-receives-first-foreign-approval-11600171149",
      source: "@WSJ"
    },
    {
      text: "🇨🇿 Czech Republic's daily count of coronavirus cases drops below 1,000",
      link: "https://www.reuters.com/article/us-health-coronavirus-czech/czech-republics-daily-count-of-coronavirus-cases-drops-below-1000-after-five-days-idUSKBN2650MV",
      source: "@Reuters"
    },
    {
      text: "💊 Eli Lilly's rheumatoid arthritis drug accelerates recovery in some COVID-19 patients",
      link: "https://www.reuters.com/article/us-health-coronavirus-lilly/eli-lillys-rheumatoid-arthritis-drug-helps-recovery-in-covid-19-patients-idUSKBN2651KW",
      source: "@Reuters"
    },
    {
      text: "📱 Several European countries have started testing a platform that allows national coronavirus tracing apps to ‘talk’ to one another",
      link: "https://www.reuters.com/article/us-health-coronavirus-europe-tech/eu-tests-platform-to-link-up-coronavirus-tracing-apps-idUSKBN2651OD",
      source: "@Reuters"
    },
    {
      text: "🩺 Ghana startup mPharma is building reliable supply chains for prescription medications to try to improve healthcare and supply of critical drugs in Africa",
      link: "https://www.bbc.com/news/av/business-54141696",
      source: "@BBCWorld"
    },
    {
      text: "💶 The European economy is recovering much better than many had feared at the beginning of the pandemic",
      link: "https://www.reuters.com/article/us-eu-economy-scholz/european-economy-is-recovering-better-than-we-had-feared-scholz-idUSKBN2630IP",
      source: "@Reuters"
    },
    {
      text: "✏️ It's been a month since German children and so far, epidemiologists are cautiously optimistic",
      link: "https://www.washingtonpost.com/world/europe/covid-schools-germany/2020/09/10/309648a4-eedf-11ea-bd08-1b10132b458f_story.html",
      source: "@washingtonpost"
    },
    {
      text: "🛡 Two new papers say that the COVID-19 virus seems to generate a robust and fairly long-lasting immune response",
      link: "https://www.economist.com/science-and-technology/2020/09/09/some-good-news-on-covid-19",
      source: "@TheEconomist"
    },
    {
      text: "⏱ British start-up company iAbra launches 20-second COVID-19 test",
      link: "https://www.insider.com/british-company-launches-20-second-covid-19-test-2020-9",
      source: "@thisisinsider"
    },
    {
      text: "🤝 Estranged neighbours become constant companions during lockdown",
      link: "https://www.theguardian.com/lifeandstyle/2020/sep/09/i-had-hardly-spoken-to-my-neighbour-before-lockdown-now-hes-my-constant-companion",
      source: "@guardian"
    },
    {
      text: "🇸🇬 Singapore reports fewest daily cases in nearly 6 months",
      link: "https://www.reuters.com/article/us-health-coronavirus-singapore/singapore-reports-fewest-daily-covid-19-cases-in-nearly-six-months-idUSKBN25Y0Q6",
      source: "@Reuters"
    },
    {
      text: "🦻🏽 UK government delivers 250,000 clear face masks to frontline healthcare and social workers to support better care for people with hearing loss",
      link: "https://www.gov.uk/government/news/government-delivers-250000-clear-face-masks-to-support-people-with-hearing-loss#:~:text=250%2C000%20clear%20face%20masks%20are,and%20facial%20expressions%20to%20communicate.&text=The%20masks%20will%20also%20help,facial%20expressions%20to%20support%20communication",
      source: "@GOVUK"
    },
    {
      text: "📺 @budlight debuts a new ad series during Thursday Night Football that promotes Black-owned restaurants hit hardest during the pandemic",
      link: "https://edition.cnn.com/2020/09/16/business/bud-light-black-owned-restaurants-ad/index.html",
      source: "@CNNBusiness"
    },
    {
      text: "🎃 Hershey launches a website that maps out safe ways to celebrate Halloween based on your area's risk level",
      link: "https://www.halloween2020.org/",
      source: "@Hersheys"
    },
    {
      text: "📈 The Organization for Economic Cooperation and Development upgraded its forecast for the 2020 global economic output",
      link: "https://edition.cnn.com/2020/09/16/economy/oecd-economic-outlook-september/index.html",
      source: "@CNNBusiness"
    },
    {
      text: "💞 Immunocompromised college students ban together to create a virtual support group",
      link: "https://edition.cnn.com/2020/09/15/us/immunocompromised-college-students-wellness-trnd/index.html",
      source: "@CNN"
    },
    {
      text: "🚸 CNN and @sesamestreet host a townhall for families about navigating the back-to-school season during a pandemic",
      link: "https://edition.cnn.com/2020/09/12/us/sesame-street-cnn-town-hall-coronavirus-parents-trnd/index.html",
      source: "@CNN"
    },
    {
      text: "🇳🇿 Covid-19: 'Near extinction' of influenza in NZ due to lockdown - epidemiologist",
      link: "https://www.stuff.co.nz/national/health/coronavirus/300129782/covid19-near-extinction-of-influenza-in-nz-due-to-lockdown--epidemiologist",
      source: "@NZStuff"
    },    
    {
      text: "👩‍🔬 New Study Suggests COVID-19 survivors may have protective antibodies for up to four months",
      link: "https://news.sky.com/story/coronavirus-covid-19-survivors-may-have-protective-antibodies-for-up-to-four-months-study-suggests-12102310",
      source: "@SkyNews"
    }
  ];

exports.data = data;

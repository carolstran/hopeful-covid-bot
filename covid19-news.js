const data = [
    {
      text: "🚸 Norway's Prime Minister holds children-only COVID-19 press conference",
      link: "https://www.sbs.com.au/news/it-s-okay-to-be-scared-norway-pm-holds-children-only-covid-19-press-conference",
      source: "@SBS"
    },
    {
      text: "🐧 Closed Shedd aquarium in Chicago allows penguins to run around and check out other exhibits",
      link: "https://twitter.com/evanmcmurry/status/1239663996950773761?s=20",
      source: "@ABC"
    },
    {
      text: "👴🏼 99-year-old raises £18 million for healthcare workers by walking around his garden",
      link: "https://mashable.com/article/captain-tom-moore-fundraiser/",
      source: "@mashable"
    },
    {
      text: "🎓 Japanese students still make their graduation amid coronavirus thanks to robots",
      link: "https://www.reuters.com/article/us-health-coronavirus-japan-remote-gradu/robots-replace-japanese-students-at-graduation-amid-coronavirus-idUSKBN21P0XI",
      source: "@reuters"
    },
    {
      text: "🎌 Rio's Christ the Redeemer projects flags of countries struck by COVID-19 as an encouragement for people to pray for the victims",
      link: "https://www.nbcnews.com/video/flags-of-countries-struck-by-coronavirus-projected-onto-rio-s-christ-the-redeemer-80958021701",
      source: "@nbcnews"
    },
    {
      text: "🏥 Rio's Christ the Redeemer statue lit up as a doctor in tribute to healthcare workers fighting coronavirus",
      link: "https://edition.cnn.com/travel/article/christ-the-redeemer-doctor-easter-sunday-scli-intl/index.html",
      source: "@CNNTravel"
    },
    {
      text: "🌈 A perfect rainbow appeared in New York City on Easter Monday",
      link: "https://www.soundhealthandlastingwealth.com/health-news/stunning-rainbow-appears-over-new-york-city-amid-covid-19-pandemic/",
      source: "Sound Health"
    },
    {
      text: "🏔️ People in India can see the Himalayas for the first time in 'decades,' as the lockdown eases air pollution",
      link: "https://edition.cnn.com/travel/article/himalayas-visible-lockdown-india-scli-intl/index.html",
      source: "@CNNTravel"
    },
    {
      text: "🙌 Husband supports wife through window so she doesn't have to go through chemotherapy alone",
      link: "https://www.goodmorningamerica.com/wellness/story/husband-holds-sign-wife-chemotherapy-coronavirus-69951530",
      source: "@GMA"
    },
    {
      text: "🧚 New Zealand Prime Minister Jacinda Ardern confirmed that the Tooth Fairy and the Easter Bunny are both essential workers",
      link: "https://www.youtube.com/watch?v=PpjuDHWClQA",
      source: "@radionz"
    },
    {
      text: "😁 #ShareYourSmile Movement: Doctors wear photos of themselves smiling to ease patients",
      link: "https://www.instagram.com/p/B-kH5YHDzBt/",
      source: "@robertino82"
    },
    {
      text: "👟 Run 5K, donate £5, nominate 5 people. Run For Heroes has raised over £3.7 million for NHS workers fighting COVID-19",
      link: "https://uk.virginmoneygiving.com/fundraiser-display/showROFundraiserPage?userUrl=RunForHeroes&pageUrl=5",
      source: "@run_for_heroes"
    },
    {
      text: "🥟 Wagamama is hosting free weekly 'Wok From Home' lessons",
      link: "https://www.youtube.com/watch?v=AxOJ0ym8JJw",
      source: "@wagamama_uk"
    },
    {
      text: "🎂 Oldest COVID-19 survivor celebrates his 104th birthday",
      link: "https://www.youtube.com/watch?v=1oiQD2aLBzg&feature=youtu.be",
      source: "@Oregonian"
    },
    {
      text: "🏎️ Formula One makes breathing aids for the NHS",
      link: "https://www.bbc.com/news/health-52087002",
      source: "@BBCNews"
    },
    {
      text: "💕 Modern Love podcast shares listener love stories in the time of COVID-19",
      link: "https://www.wbur.org/modernlove/2020/04/01/love-stories-coronavirus",
      source: "@WBUR"
    },
    {
      text: "💞 There were too many to fit into one episode! Modern Love podcast shares Part II of listener love stories during the pandemic",
      link: "https://www.wbur.org/modernlove/2020/04/15/covid-love-stories-modern-love",
      source: "@WBUR"
    },
    {
      text: "🎙️ Investors answer questions from early-stage startup founders about how to succeed in a pandemic on The Pitch podcast",
      link: "https://gimletmedia.com/shows/the-pitch/llheeln/how-startups-can-succeed-in-a-pandemic",
      source: "@Gimletmedia"
    },
    {
      text: "🎨 @ace_national pledged a £160 million emergency response package to support organisations, freelancers and artists",
      link: "https://www.theguardian.com/world/2020/mar/24/arts-council-england-promises-160m-to-buoy-public-during-lockdown",
      source: "@guardian"
    },
    {
      text: "💍 A couple whose wedding was cancelled due to COVID-19 donated the food they had ordered and fed 400 NHS workers",
      link: "https://www.independent.co.uk/life-style/coronavirus-wedding-cancelled-couple-nhs-food-donate-covid19-a9423481.html",
      source: "@Independent"
    },
    {
      text: "👩🏽‍⚕️ Over 6,000 mental health professionals volunteered to offer free services to struggling New Yorkers",
      link: "https://time.com/5807746/cuomo-new-york-coronavirus-mental-health/",
      source: "@TIME"
    },
    {
      text: "💐 Mystery man buys up a flourist's inventory ahead of new coronavirus business restrictions",
      link: "https://boston.cbslocal.com/2020/03/25/coronavirus-needham-florist-flowers-mystery-man/",
      source: "@wbz"
    },
    {
      text: "🦛 Care home plays life-size Hungry Hungry Hippos to keep spirits up",
      link: "https://www.bbc.com/news/av/uk-wales-51976372/coronavirus-care-home-plays-life-size-hungry-hungry-hippos",
      source: "@BBCNews"
    },
    {
      text: "🚣‍♂️ Venice’s usually dark, murky waterways have turned noticeably more clear during COVID-19 lockdown",
      link: "https://www.cnbc.com/2020/03/18/photos-water-in-venice-italys-canals-clear-amid-covid-19-lockdown.html",
      source: "@CNBC"
    },
    {
      text: "🍻 Several breweries (like BrewDog) have started using the alcohol content in their products to make hand sanitiser instead",
      link: "https://www.brewdog.com/uk/hand-sanitiser",
      source: "@BrewDog"
    },
    {
      text: "🎭 @MetOpera will live stream operas for free in wake of coronavirus",
      link: "https://www.vulture.com/2020/03/coronavirus-the-metropolitan-opera-to-stream-free-operas.html",
      source: "@vulture"
    },
    {
      text: "💉 Coronavirus vaccine test opens as U.S. volunteer gets 1st shot",
      link: "https://www.pbs.org/newshour/health/coronavirus-vaccine-test-opens-as-u-s-volunteer-gets-1st-shot",
      source: "@NewsHour"
    },
    {
      text: "🌬️ Air pollution plummets in Chinese cities with high rates of quarantine",
      link: "https://www.earthobservatory.nasa.gov/images/146362/airborne-nitrogen-dioxide-plummets-over-china",
      source: "@NASAEarth"
    },
    {
      text: "📈 A 17-year-old created a website to show coronavirus data 'as accurately as possible'",
      link: "https://interestingengineering.com/this-17-year-old-has-created-the-ultimate-coronavirus-crisis-website",
      source: "@IntEngineering"
    },
    {
      text: "🚰 The city of Detroit is restoring water service to homes with unpaid bills to help people prevent coronavirus",
      link: "https://www.seattletimes.com/nation-world/nation/detroit-set-to-restore-water-service-amid-coronavirus-fears/",
      source: "@seattletimes"
    },
    {
      text: "🍎 Salt Lake City schools partner with @utahfoodbank to keep providing meals to students who rely on getting them at school",
      link: "https://www.slcschools.org/news/2019-20/coronavirus-information/meals-for-students/",
      source: "@slcschools"
    },
    {
      text: "🥼 China sent team of medical experts and gear to help Italy fight coronavirus",
      link: "https://www.scmp.com/news/china/diplomacy/article/3074682/china-sends-team-medical-experts-gear-help-italy-fight",
      source: "@SCMPNews"
    },
    {
      text: "👏 People all around the world, including Italy, Spain and Turkey, are gathering on their balconies to applaud the health-care workers",
      link: "https://www.youtube.com/watch?v=tkXPGLnDaTQ",
      source: "@washingtonpost"
    },
    {
      text: "🌈 People have been putting images of rainbows in their windows and on their balconies in a colorful sign of optimism",
      link: "https://www.bbc.co.uk/newsround/51953553",
      source: "@BBCNewsround"
    },
    {
      text: "👵🏼 103-year-old Chinese woman recovers from COVID-19",
      link: "https://www.independent.co.uk/news/world/asia/coronavirus-latest-103-year-old-woman-recovers-wuhan-hubei-china-a9393991.html",
      source: "@Independent"
    },
    {
      text: "🦻 College student sews face masks designed for the deaf and hard of hearing community",
      link: "https://www.cbsnews.com/news/this-college-student-is-sewing-face-masks-designed-for-the-deaf-and-hard-of-hearing-community/?ftag=CNM-00-10aab7e&linkId=85876927",
      source: "@CBSNews"
    },
    {
      text: "🗑️ Families leave handmade thank you signs on garbage bins for waste workers",
      link: "https://www.facebook.com/groups/218463492075249/permalink/515228845732044/",
      source: "Scott Atkins"
    },
    {
      text: "🎊 Friends plan socially distanced welcome home parade after final chemotherapy treatment",
      link: "https://twitter.com/momuses/status/1242887097976909824?s=20",
      source: "@momuses"
    },
    {
      text: "🥼 Cuban doctors travel to Italy to help battle coronavirus",
      link: "https://www.reuters.com/article/us-health-coronavirus-cuba/cuban-doctors-head-to-italy-to-battle-coronavirus-idUSKBN219051",
      source: "@reuters"
    },
    {
      text: "💉 There are indications that COVID-19 has a low mutation rate, meaning once a vaccine is developed it's likely to be a long-term solution",
      link: "https://nymag.com/intelligencer/2020/03/low-coronavirus-mutations-mean-hope-for-a-single-vaccine.html",
      source: "@intelligencer"
    },
    {
      text: "🇪🇺 The European Union offers a heartfelt apology to Italy over coronavirus response",
      link: "https://www.dw.com/en/coronavirus-eu-apologizes-to-italy-for-initial-response/a-53142603",
      source: "@dwnews"
    },
    {
      text: "🏳️‍🌈 A new daily text service reminds trans and non-binary people 'of not only how great they are, but how valid their identity is' during the public health crisis.",
      link: "https://www.forbes.com/sites/jamiewareham/2020/04/11/free-text-service-is-sending-daily-support-to-isolated-trans-people/#1d882c002dc2",
      source: "@Forbes"
    }
  ];

exports.data = data;

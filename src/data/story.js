// Edit article metadata and the ordered paragraphs/headings below.
// The Prattic article is reproduced from the supplied draft with editorial annotations removed.
// Images: add files to public/assets/ and use /assets/filename.jpg.
// Alternatively import an image from src/assets/ and use it as src for automatic optimization.
import lakePhoto from "../assets/lake.jpg";
import natalieMay from "../assets/Natalie_May.jpg";
const lake = {
  src: "https://dailynorthwestern.com/wp-content/uploads/2026/03/Photo_3-5-1.jpg",
  alt: "Illustrative photograph of surf on a sandy beach at sunset",
  width: 2400,
  height: 1600,
};
export const story = {
  title:
    "“It was lightning in a bottle”: NU comics look back on the now-defunct Prattic comedy club",
  kicker: "In Focus",
  dek: "Along the edge of Lake Michigan, a changing shoreline tells a story of place, community and the ties that hold us together.",
  authors: [
    {
      name: "Jack Greenspan, Multimedia Features Editor",
      url: "https://dailynorthwestern.com/staff_name/jack-greenspan/",
    },
  ],
  date: "2026-10-27",
  readTime: "6 minute read",
  // Optional warning; leave empty to omit it.
  contentWarning: "",
  sample: false,
  hero: {
    ...lake,
    credit: "Illustrative stock photo · Unsplash",
    showDek: false,
    position: "center 55%",
  },
  // Optional hero.video: '/assets/hero.mp4' (muted background, with the hero image as poster).
  credits: [
    { role: "Reporting", name: "First Last" },
    { role: "Photography", name: "First Last" },
    { role: "Design & development", name: "The Daily Northwestern" },
  ],
  blocks: [
    {
      type: "paragraph",
      text: "There was no dramatic goodbye when Jackson Heller (Communications ‘26) moved out of the house he and five of his best friends had been renting since their third year at Northwestern. The lease was up. He had made it to graduation and was already planning his post-college life. There was simply no time to get sentimental, he said.",
    },
    {
      type: "paragraph",
      text: "To the rest of the NU community, however, the house’s vacancy symbolized something far sadder: the end of Northwestern’s only weekly off-campus comedy show.",
    },
    {
      type: "paragraph",
      text: "Dubbed “The Prattic”, the unassuming house sat on Pratt Court, halfway between Foster and Simpson Streets. Heller and his roommates, Mateo Garcia-Bryce (Weinberg ‘26), Luca Hirsch (Communications ‘26), Livia Salituro (Weinberg ‘26), Saifeddine Lahmar and Ainslie Wilson (Communications ‘26), put on their first comedy show in the attic in the winter of 2025.",
    },
    {
      type: "paragraph",
      text: "Using saved-up tips from his job at Domino’s, Heller purchased $200 worth of lawn chairs from a wholesaler, and the housemates transformed their bare-bones, wood-paneled attic into a space where comedians of all experience levels could perform every Monday night. The dark, low-ceilinged attic, with beer cans nailed to the wall and a broken toilet serving as a centerpiece, was as weird as it was comforting.",
    },
    {
      type: "paragraph",
      text: "Before long, students were lining up in the backyard every Monday night, hoping to squeeze their way into the attic. This weekly tradition continued for nearly two school years.",
    },
    {
      type: "paragraph",
      text: "But when it came time for Heller and his roommates to bid the Prattic farewell, they left it much as they had occupied it: with humor. They left the chairs and bizarre decor exactly as they were, preserving a freeze-frame of Northwestern history. On their way out, Heller said they cut up a baby doll and left parts of it scattered around the attic, “just to mess with the new tenants.”",
    },
    {
      type: "paragraph",
      text: "Now, after relocating to Los Angeles, Heller works as a children’s soccer coach while he launches his comedy career. When gearing up for open mics at small venues with lackluster crowds, he sometimes reminisces about The Prattic.",
    },
    {
      type: "paragraph",
      text: "“Three months ago I had a hundred of my friends who I was doing stand-up to, and it will be a while until I have a situation like that again,” he said. “But what can you do?”",
    },
    {
      type: "heading",
      text: "More than just a venue",
      id: "more-than-just-a-venue",
    },
    {
      type: "paragraph",
      text: "The Prattic did more than just accelerate the stand-up culture on campus. Weinberg senior Natalie May, a frequent performer at the Prattic, said that the venue’s biggest accomplishment was promoting a culture that made “vulnerability and trying something new cool.”",
    },
    {
      type: "paragraph",
      text: "May said first-time performers would often bring a big group of friends to cheer them on during their set, which is how many attendees discovered the venue.",
    },
    {
      type: "audioCard",
      id: "natalie-may-audio",
      image: natalieMay,
      imageAlt:
        "Natalie May smiling outdoors in front of a brick building and trees",
      description:
        "Haikal Rozaidi found the Prattic after coming to Northwestern from Columbus. 'What the Prattic had ... it was lightning in a bottle,' he said.",
      audioSrc: "/assets/NatalieMay_Embed_audio.mp3",
      speaker: "Natalie",
      audioLabel: "Listen to Natalie",
      transcript: `I love stand-up and comedy in general, and I’ve been doing it for a while here, and I think a big reaction I hear when I tell people that is that they feel it's something they could never do. 

It’s really scary to get up on stage and tell people, “I think I’m funny, I hope you think I’m funny too.” That's really scary. And so I think seeing people feel like they could do that and be confident that they would be received well was very cool, and I think it was cool to see people who never would have thought of themselves as comedians kind of tap into that side of themselves. 

I think it made stand-up cool, and then kind of as an offshoot of that, I think it made vulnerability and trying something new cool. I mean, I just think it demonstrates what people can do when they see a gap and they just put their heads together and decide to try to fill it. Whether it's comedy or whether it's badminton or something else you’re interested in, if you don’t see the opportunity, you can make it for yourself. I think it’s gonna be hard to replicate it exactly, but I do think there's a void now. Now is the opportunity for someone to fill it.`, // Replace with the clip’s verbatim transcript.
    },
    {
      type: "paragraph",
      text: "“It built my confidence in stand-up,” May said. “Because if I had something that I wanted to perform, I knew that I would have a place to do it and I wouldn’t have to sit on it for months.”",
    },
    {
      type: "paragraph",
      text: "Haikal Rozaidi, a second-year computer science graduate student, came to Northwestern last year to pursue his master's after graduating from The Ohio State University. At Ohio State, he was involved in the Buckeye Standup Comedy Club, and at first, struggled to find something similar at NU. The first time he walked into the Prattic, he said he had found “the coolest thing on campus.”",
    },
    {
      type: "paragraph",
      text: "Since coming to Evanston, Rozaidi has performed at iconic Chicago venues like Zanies, Laugh Factory and Lincoln Lodge. Within the Chicago comedy scene, Rozaidi said that “whispers” of the Prattic — its reputation for having a “hot show every Monday” — spread beyond the Evanston bubble, creating envy among some Chicago comics.",
    },
    {
      type: "paragraph",
      text: "“They want to get on, but they can’t, because it’s only for Northwestern,” Rozaidi said.",
    },
    {
      type: "paragraph",
      text: "But the Prattic wasn’t just for students. After being invited by the founders, Northwestern SESP Prof. Sapehr Vakil also got the chance to perform a set in the attic. A part-time comic, Vakil co-hosts the podcast “A Professor and a Comedian Walk into a Bar” with Chicago comedian Mike Knight and hosts the Laugh and Flow comedy events at Free Flow Kitchen in Evanston.",
    },
    {
      type: "paragraph",
      text: "At the Prattic, he said students found it interesting to see a professor “not just observe, but be part of it.”",
    },
    {
      type: "paragraph",
      text: "“We have a term in education theory called a third space: where cultural production happens … where people can be absurd and funny and risky and vulnerable, and that was what I saw,” Vakil said.",
    },
    {
      type: "heading",
      text: "Comedy meets activism",
      id: "comedy-meets-activism",
    },
    {
      type: "paragraph",
      text: "As the Prattic gained mainstream popularity on campus, the founders set loftier goals for what the space could become. During the cut-throat Democratic primary race for Illinois’ 9th congressional district, they hosted 27-year-old progressive candidate Kat Abughazaleh, who performed a politics-infused stand-up routine poking fun at her opponents.",
    },
    {
      type: "paragraph",
      text: "“It was a blast,” Abughazaleh said. “I got to focus on making people laugh and laughing with people, and we got a lot of volunteers out of it.”",
    },
    {
      type: "paragraph",
      text: "The Prattic was the second comedy event of Abughazaleh’s campaign. She also performed stand-up at Chicago’s Laugh Factory in June of 2025. She joked that the two shows were similar in their lack of air conditioning, but at the Prattic, “the kids were having more fun.”",
    },
    {
      type: "paragraph",
      text: "The event was organized by co-founder Mateo Garcia-Bryce, who coordinated the event after student campaign workers on Abughazaleh’s team reached out to The Prattic to see if they were interested in hosting the candidate.",
    },
    {
      type: "paragraph",
      text: "“It’s not that we were choosing sides, but she aligned with what we believed, and we were really happy to be able to help her spread the word at Northwestern,” Garcia-Bryce said.",
    },
    {
      type: "paragraph",
      text: "The Prattic’s philanthropy work culminated in what Garcia-Bryce called the Prattic’s proudest accomplishment: a five-day, multi-venue comedy festival that brought together comedians from across Northwestern, Chicagoland, and the country.",
    },
    {
      type: "paragraph",
      text: "“Prattic Fringe Festival” took place on May 7-11 and was the product of seven months of phone calls, emails and meetings between Garcia-Bryce, Heller and Hirsch that began in October 2025. In the end, the festival raised $4,000 for the Illinois Coalition for Immigrant and Refugee Rights.",
    },
    {
      type: "paragraph",
      text: "“It was the most busy I’ve ever been in my life,” Heller said.",
    },
    {
      type: "paragraph",
      text: "He said that going into the planning process, they were naive about the amount of work that would be involved in organizing an event of such a scale. Heller fantasized about a festival where “everyone in Chicago showed up, and a million people did it, and NBC gave (them) all jobs and a Netflix special.”",
    },
    {
      type: "paragraph",
      text: "But at the end of the day, Heller said he wouldn’t have changed anything about how the festival turned out.",
    },
    {
      type: "paragraph",
      text: "“Sometimes to have grandeur in your life, you’ve got to have delusions,” he said.",
    },
    {
      type: "heading",
      text: "The search for a new stage",
      id: "the-search-for-a-new-stage",
    },
    {
      type: "paragraph",
      text: "On Monday nights, the line that once spilled out of a backyard on Pratt Court is gone, and the house has returned to being an ordinary rental property. Still, the community of comics that the Prattic brought together hasn’t given up on keeping the stand-up spirit alive in Evanston.",
    },
    {
      type: "paragraph",
      text: "In recent months, Rozaidi has taken it upon himself to organize comedy events within Evanston. In September, he and Chicago comedian Nolan Raymond hosted the first “Laughs at Local Note”, a stand-up comedy show occurring monthly at the Local Note Jazz Club. Prattic regulars, including May and Mikhail, performed in the program’s inaugural show.",
    },
    {
      type: "paragraph",
      text: "But without the Prattic, May said the energy isn’t quite the same.",
    },
    {
      type: "paragraph",
      text: "“I got used to the Prattic, and I wrote my set with drunk college students in mind,” May said. “Performing in front of a bunch of thirty to fifty-year-olds… it was pretty intimidating.”",
    },
    {
      type: "paragraph",
      text: "On campus, Prof. Vakil is collaborating with Norris to bring monthly comedy showcases to Luna’s Pub featuring Northwestern and Chicago comedians.",
    },
    {
      type: "paragraph",
      text: "Inspired by the Prattic, Mikhail organized two stand-up comedy events in the last two years. His sophomore year, he organized a stand-up show in the basement of an off-campus fraternity house with his friends.",
    },
    {
      type: "paragraph",
      text: "Mikhail called the Prattic’s success was a “cultural moment” for Northwestern, one that he’s skeptical could be recreated by any organized group, with or without the Prattic name.",
    },
    {
      type: "paragraph",
      text: "“I think so much of it was the guys running it,” he said. “It's hard to replicate.”",
    },
    {
      type: "paragraph",
      text: "While Northwestern comedians search for the next hot stage, Heller has one piece of advice for anyone trying to run a comedy show: stop worrying about making money.",
    },
    {
      type: "paragraph",
      text: "“The further we go towards profitability, the worse that your show becomes,” Heller said. “Do your own thing and do the right thing. That’s the message in a nutshell.”",
    },
  ],
};

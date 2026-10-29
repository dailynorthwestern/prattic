// Edit article metadata and the ordered paragraphs/headings below.
// The Prattic article is reproduced from the supplied draft with editorial annotations removed.
// Images: add files to public/assets/ and use /assets/filename.jpg.
// Alternatively import an image from src/assets/ and use it as src for automatic optimization.
import natalieMay from "../assets/Natalie_May.jpg";
import haikal from "../assets/Haikal_Rozaidi.jpg";
import andrew from "../assets/Andrew_Mikhail.jpg";
import spencer from "../assets/Spencer_Thomas.jpg";
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
    video: "/assets/PRATTIC%20V2.mp4",
    showDek: false,
  },
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
      text: "To the rest of the NU community, however, the house’s vacancy symbolized something else: the end of NU’s only weekly off-campus comedy show.",
    },
    {
      type: "paragraph",
      text: "Dubbed “The Prattic”, the unassuming house sat on Pratt Court, halfway between Foster and Simpson Streets. Heller and his roommates, Mateo Garcia-Bryce (Weinberg ‘26), Luca Hirsch (Communications ‘26), Livia Salituro (Weinberg ‘26), Saifeddine Lahmar (Communications ‘26) and Ainslie Wilson (Communications ‘26), put on their first comedy show in the attic in February 2025.",
    },
    {
      type: "paragraph",
      text: "Using tips he had saved up from his time delivering pizzas at Domino’s, Heller purchased $200 worth of lawn chairs from a wholesaler. The housemates transformed their bare-bones, wood-paneled attic into a venue where comedians of all experience levels could perform every Monday night. The dark, low-ceilinged space, with beer cans nailed to the wall and a broken toilet serving as a centerpiece, was as weird as it was comforting.",
    },
    {
      type: "paragraph",
      text: "Before long, students were lining up in the backyard every Monday night, hoping to squeeze their way into the attic. This weekly tradition continued for nearly two school years.",
    },
    {
      type: "paragraph",
      text: "When it came time for Heller and his roommates to bid their college house farewell, they left it much as they had occupied it: with humor. They left the chairs and bizarre decor in the attic exactly as they were, preserving a freeze frame of NU history. On their way out, Heller said the roommates also cut up a baby doll and left parts of it scattered around the attic, “just to mess with the new tenants.”",
    },
    {
      type: "paragraph",
      text: "Heller relocated to Los Angeles after graduation. Now, he works as a children’s soccer coach while he launches his comedy career. As he gears up for open mics at small venues with lackluster crowds, he sometimes reminisces about The Prattic.",
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
      text: "The Prattic did more than just accelerate the stand-up culture on campus. Weinberg senior Natalie May, a frequent performer at The Prattic, said that the venue’s biggest accomplishment was promoting a culture that made “vulnerability and trying something new cool.”",
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
      description: `May said The Prattic encouraged students to go outside of their comfort zones. 

      “It made vulnerability and trying something new cool,” she said.`,
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
      text: "Haikal Rozaidi, a second-year computer science graduate student, came to NU last year to pursue his master's after graduating from The Ohio State University. At Ohio State, he was involved in the Buckeye Standup Comedy Club, and he said he initially struggled to find something similar at NU. The first time he walked into The Prattic, Rozaidi said he had found “the coolest thing on campus.”",
    },
    {
      type: "audioCard",
      id: "haikal-rozaidi-audio",
      image: haikal,
      imageAlt:
        "Haikal Rozaidi smiling next to a sign that indicates the intersection of Foster and Pratt",
      description: `Rozaidi discovered The Prattic after coming to Northwestern from The Ohio State University. 

      “What The Prattic had... it was lightning in a bottle,” Rozaidi said.`,
      audioSrc: "/assets/Haikal_AudioEmbed_.mp3",
      speaker: "Haikal",
      audioLabel: "Listen to Haikal",
      transcript: `The stand-up scene at Ohio State was so good that when I got here I was like, “Dude, I gotta find something.” I tried the involvement fair, I tried looking around, but The Prattic isn’t an official thing. 

      It’s so like … it’s popular, but it’s also underground. Other venues are just actual performance venues, like comedy clubs or bars or performance stages. But The Prattic, I remember going in there, I was like, “It is actually just someone's house.” 

      It felt like a secret club, almost like, “Dude, my friend is doing The Prattic, do you want to, like, join us?” Like, you’re just whispering instead of telling everyone.

      They have full crowds every Monday, and the crowds are super supportive and super fun, and they’re not judgemental at all. It helps a lot of newer comics and first-timers to actually keep doing stand-up and not feel as intimidated as we probably thought it was before starting. It’s better than some shows I’ve been on in actual clubs. It’s such a hot room. So losing that room every Monday … it sucks, it’s devastating. I think people are gonna start making their own stuff from the remnants of The Prattic, but I just miss it, a lot. 

      I think what The Prattic had was like lightning in a bottle.`, // Replace with the clip’s verbatim transcript.
    },

    {
      type: "paragraph",
      text: "Since coming to Evanston, Rozaidi has performed at iconic Chicago venues like Zanies, Laugh Factory and The Lincoln Lodge. Rozaidi said that “whispers” of The Prattic — its reputation for having a “hot show” every Monday — have spread beyond the Evanston bubble into the Chicago comedy scene, and the venue has garnered envy among some Chicago comics.",
    },
    {
      type: "paragraph",
      text: "“They want to get on, but they can’t, because it’s only for Northwestern,” Rozaidi said.",
    },
    {
      type: "audioCard",
      id: "spencer-thomas-audio",
      image: spencer,
      imageAlt: "Spencer in front of the Prattic house",
      description: `Spencer Thomas (Communication ‘26) had no formal standup experience before The Prattic, but he knew he liked talking to people and telling jokes. After performing his first comedy routine there, he kept going back.

      “(The Prattic) is a place where you're supposed to experiment,” he said.`,
      audioSrc: "/assets/Spencer Thomas Embed_mixdown.mp3",
      speaker: "Spencer",
      audioLabel: "Listen to Spencer",
      transcript: `So I think actually the first time I officially really did stand up was at The Prattic. So it was just getting that chance to just kind of go up there and just give it a shot for the first time. And then I just kept going back, 'cause I was like, “Oh, this is a lot of fun, and it's a pretty safe environment to just keep trying things and really experiment and find your voice.”

      I think part of it is because of how silly it was, the fact that it was just in this attic, you know, they have all these silly posters and, like, cans all over the floor and on the walls. It just made you feel safe, like this is a place where you're supposed to experiment and kind of have that college experience of, you know, really putting yourself out there and taking risks. And you don't have to worry about if people are gonna judge you or not, 'cause, you know, everybody there is usually doing it for the first time.

      It was honestly kind of crazy how big it got. They genuinely had to cut how many people, like, could come in, like, cut it off, because they were scared that, like, the roof would fall in, or the floor would fall out. A lot of people were coming to support their friends. A lot of people I knew even would just come to just take a break from studying and just, like, kind of have a nice study break to hear some comedy and laugh a little bit before they would go back to working on finals, or midterms, or projects, or anything at all.

      Beyond just, like, being a great place for comedy, I just think it was a really great space for this campus and this kind of, like, culture of feeling like a college experience. I feel like it was one of my top memories, and it's something I still think I'm gonna remember ten years from now, looking back and questioning why I was doing stand-up in an attic with a toilet in it.`, // Replace with the clip’s verbatim transcript.
    },
    {
      type: "paragraph",
      text: "But The Prattic wasn’t just for students. After being invited by the founders, NU SESP Prof. Sepehr Vakil also got the chance to perform a set in the attic.",
    },
    {
      type: "paragraph",
      text: "A part-time comic, Vakil co-hosts the podcast “A Professor and a Comedian Walk into a Bar” with Chicago comedian Mike Knight and hosts the Laugh and Flow comedy series at Free Flow Kitchen in Evanston.",
    },
    {
      type: "paragraph",
      text: "Vakil said students at The Prattic found it interesting to see a professor “not just observe, but be part of it.”",
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
      text: "As The Prattic gained mainstream popularity on campus, the founders set loftier goals for what the space could become. During the cut-throat Democratic primary race for Illinois’ 9th congressional district in March, they hosted 27-year-old progressive candidate Kat Abughazaleh, who performed a politics-infused stand-up routine poking fun at her opponents.",
    },
    {
      type: "paragraph",
      text: "“It was a blast,” Abughazaleh said. “I got to focus on making people laugh and laughing with people, and we got a lot of volunteers out of it.”",
    },
    {
      type: "paragraph",
      text: "The Prattic was the second comedy event of Abughazaleh’s campaign. She also performed stand-up at Chicago’s Laugh Factory in June 2025. She joked that the two venues were similar in their lack of air conditioning, but “the kids were having more fun” at The Prattic.",
    },
    {
      type: "paragraph",
      text: "Co-founder Garcia-Bryce coordinated the event after student campaign workers on Abughazaleh’s team reached out to see if The Prattic was interested in hosting the politician.",
    },
    {
      type: "paragraph",
      text: "“It’s not that we were choosing sides, but she aligned with what we believed, and we were really happy to be able to help her spread the word at Northwestern,” Garcia-Bryce said.",
    },
    {
      type: "paragraph",
      text: "The Prattic’s philanthropy work culminated in what Garcia-Bryce called The Prattic’s proudest accomplishment: a five-day, multi-venue comedy festival in May that brought together comedians from NU, Chicago and across the country.",
    },
    {
      type: "paragraph",
      text: "“Prattic Fringe Festival,” which took place on May 7-11, was the product of seven months of phone calls, emails and meetings between Garcia-Bryce, Heller and Hirsch.",
    },
    {
      type: "paragraph",
      text: "“It was the most busy I’ve ever been in my life,” Heller said.",
    },
    {
      type: "paragraph",
      text: "Heller said he fantasized about a festival where “everyone in Chicago showed up, and a million people did it, and NBC gave (them) all jobs and a Netflix special.” He said he was naive about the amount of work that would be involved in organizing an event of such scale.",
    },
    {
      type: "paragraph",
      text: "Even so, Heller said he wouldn’t have changed a thing about how the festival turned out. The five-day festival ended up raising $4,000 for the Illinois Coalition for Immigrant and Refugee Rights.",
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
      text: "On Monday nights, the line that once spilled out of a backyard on Pratt Court is gone, and the house has returned to being an ordinary rental property. Still, the community of comics that The Prattic brought together hasn’t given up on keeping the stand-up spirit alive in Evanston.",
    },
    {
      type: "audioCard",
      id: "andrew-mikhail-audio",
      image: andrew,
      imageAlt: "Andrew sitting on the steps of the Prattic house",
      description: `After meeting Prattic co-founder Luca Hirsch in a standup comedy class at NU, Mikhail was invited to come to the venue around the time it first started up. 

Looking back, Mikhail called The Prattic a “cultural moment” for the NU community.`,
      audioSrc: "/assets/AndrewMikhail_Embed.mp3",
      speaker: "Andrew",
      audioLabel: "Listen to Andrew",
      transcript: `The first show I ever performed, it was packed, like 120 people. People packed it — different people, too. I think they tapped into — there's a real market for student comedy, I guess. People would come; I would meet people through it.

      I’m, like, the target audience for loving The Prattic. Again, I was someone who was already into stand-up, and it was just a dream for these guys to come along and say, ‘Hey, we’re gonna do the organizing, we're gonna do the producing of the show, and there will just be an awesome crowd of 100 people waiting for you every week; you just show up, and you tell the jokes.” 

      The first year of The Prattic, they did a show at Harris Hall for seniors only to perform. A line out the door. Literally, I think their entire grade showed up. For something to be that big of a social unifier at a school as big as Northwestern, it was just unreal. It was, like, this cultural moment. You can’t fake it. Two shows, three shows — sure, everyone comes as a favor or to  check it out. But the fact that people kept coming — there clearly was some demand, and that doesn’t go away.

      Kids here are spoiled, and if you haven’t been to a lot of open mics, you don’t realize how good you have it at The Prattic.

      I love to think about the fact that, hey, if even one of the people who performed at The Prattic makes it big, I just know that they’ll be talking in 50 years or 20 years on some interview about The Prattic.`, // Replace with the clip’s verbatim transcript.
    },

    {
      type: "paragraph",
      text: "Inspired by The Prattic, Communication senior Andrew Mikhail has organized two stand-up comedy events in the last two years. His sophomore year, he organized a stand-up show in the basement of an off-campus fraternity house with his friends.",
    },
    {
      type: "paragraph",
      text: "Mikhail called The Prattic’s success a “cultural moment” for NU, one that he’s not sure could be recreated with the same level of success.",
    },
    {
      type: "paragraph",
      text: "“I think so much of it was the guys running it,” he said. “It's hard to replicate.”",
    },
    {
      type: "paragraph",
      text: "Even without The Prattic’s presence in Evanston, Mikhail said there’s no shortage of comedy talent at NU. He said many students are “real gems” who have great minds for stand-up comedy.",
    },
    {
      type: "paragraph",
      text: "In recent months, Rozaidi has also taken it upon himself to organize comedy events within Evanston. In September, he and Chicago comedian Nolan Raymond hosted the first “Laughs at Local Note”, a stand-up comedy show occurring monthly at the Local Note Jazz Club. Prattic regulars, including May and Mikhail, performed in the program’s inaugural show.",
    },
    {
      type: "paragraph",
      text: "But without The Prattic, May said the energy isn’t quite the same.",
    },
    {
      type: "paragraph",
      text: "“I got used to The Prattic, and I wrote my set with drunk college students in mind,” May said. “Performing in front of a bunch of thirty to fifty-year-olds… it was pretty intimidating.”",
    },
    {
      type: "paragraph",
      text: "Prof. Vakil is collaborating with Norris to bring monthly comedy showcases to Luna’s Pub featuring NU and Chicago comedians. The first “NU x Chicago Comedy Night” was headlined by Apple TV-featured comedian Kristen Toomey and featured Rozaidi as a student performer.",
    },
    {
      type: "paragraph",
      text: "As NU comedians search for the next hot stage, Heller has one piece of advice for anyone trying to run a comedy show: stop worrying about making money.",
    },
    {
      type: "paragraph",
      text: "“The further you go towards profitability, the worse that your show becomes,” Heller said. “Do your own thing and do the right thing. That’s the message in a nutshell.”",
    },
  ],
};

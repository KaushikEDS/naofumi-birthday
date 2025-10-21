import './Messages.css';

interface Message {
    id: number;
    name: string;
    role: string;
    message: string;
    avatar: string;
}

const Messages = () => {
    // Sample messages - replace with actual messages from team
    const messages: Message[] = [
        {
            id: 1,
            name: 'Rushika Harsora',
            role: 'Mobile Developer',
            message: `Happy Birthday to my favourite mentor!!

You truly inspire me to keep learning and growing every day. It's hard to believe we now have three more people on the team—when I joined, it was just the two of us! I honestly miss those days sometimes when it used to be only us on calls (sorry, platform team 😅), but it's also amazing to see how much we've grown.

Looking back, I can see how far I've come—and I know a huge part of that is because of your guidance and support. Thank you for always pushing me to do better and for being the kind of mentor anyone would be lucky to have. If I got to choose my mentor, I'd pick you without a doubt.

Can't wait to catch up soon!

P.S. Still slightly terrified when you're angry 😬.`,
            avatar: 'RH',
        },
        {
            id: 2,
            name: 'Akshay Vhatkar',
            role: 'Mobile Developer',
            message: `Happy Birthday Naofumii

🥳🎉🎂🍰🍖🍗🥩

You have been really a good mentor for me. When I look at 2 yrs in the past, I realise how much of my knowledge has been increased because of your guidance. Thanks to you, I have stopped breaking prod and am now more cautious these days 😂.

Many blessings from my side and keep guiding us all as always!!.`,
            avatar: 'AV',
        },
        {
            id: 3,
            name: 'Bhagya Bijlaney',
            role: 'Software Developer',
            message: `Happy Birthday Naofumi!

You've been an inspiring mentor, and I'm very grateful for everything I've learned from you. Thank you for your guidance. Wishing you an amazing day and year ahead.`,
            avatar: 'BB',
        },
        {
            id: 4,
            name: 'Nishant Satare',
            role: 'Software Developer',
            message: `Happiest birthday, Naofumi! 🎉. You've been an inspiring mentor, and I truly admire your skill and guidance — and of course, your legendary photography skills too! 😂.`,
            avatar: 'NS',
        },
        {
            id: 5,
            name: 'Kaushik Nippanikar',
            role: 'Senior Software Engineer',
            message: `Happy Birthday naofumi!

It has been 4 years since I joined eds. You have always been the superstar I look up to. I miss the time when we work together, we never had a good chance to work on a project. Well when time comes i hope it happens. I know I'll get an earful and get burried under pressure. I hope in the process I get to learn something. Well you have taught me to listen to requirements and I hope you recieve what you ordered someday. Hoping for your beautiful day and a very happy birthday to you.`,
            avatar: 'KN',
        },
        {
            id: 6,
            name: 'Vighnesha Gharat',
            role: 'Software Developer',
            message: `Happy Birthday, Naofumi! Wishing you a wonderful birthday and a year filled with success, happiness, and good health. You have been an exceptional mentor, and I truly appreciate all the guidance, knowledge, and support you've shared. We created Graphite together along with DE & Quants, it was a great experience. Graphite was something totally new and challenging, It was the first thing I took ownership of. I was told that it was your vision from the very beginning and I feel lucky to have worked with you on Graphite. What started from a thought is now replacing spotfire from our application. Your leadership, professionalism, and positive attitude have always been inspiring. It has been a privilege to learn from you and work alongside you. May all your goals and wishes come true, and may this year bring you continued growth and achievements. Have a fantastic day celebrating your special day!`,
            avatar: 'VG',
        },
        {
            id: 7,
            name: 'Kunal Bhatia',
            role: 'Software Developer',
            message: `Happy Birthday, Naofumi! Wishing you a great year ahead—always enjoy your humor and insights- Keep Smiling!`,
            avatar: 'KB',
        },
        {
            id: 8,
            name: 'Krushna Jadhav',
            role: 'Software Developer',
            message: `It's Naofumi's birthday! 🎉

Celebrate a total legend — AWS wizard, code genius, and relentless learner. He turns feedback into power-ups and writes growth into every line of his story.

Generate a birthday message that's bold, sincere, and worthy of someone who never stops levelling up.

🚀 Run.

Hey Naofumi, happy birthday!

I hope this prompt delivers all the good vibes, epic wishes, and smiles you deserve today. 🚀😊`,
            avatar: 'KJ',
        },
        {
            id: 9,
            name: 'Nikhil Allam',
            role: 'Software Developer',
            message: `Happy Birthday Naofumi! Wishing you great health and happiness ahead — and thanks for always inspiring us to grow !`,
            avatar: 'NA',
        },
        {
            id: 10,
            name: 'Shubhavi Mathur',
            role: 'Software Developer',
            message: `Happy Birthday! Your leadership inspires me every day. Thank you for trusting me with new challenges and helping me grow. Wishing you endless success and happiness ahead! Looking forward to another tea party!!`,
            avatar: 'SM',
        },
        {
            id: 11,
            name: 'Mehraajbe Sayed',
            role: 'Software Developer',
            message: `Wishing you a very Happy Birthday, Naofumi! Hope the year ahead brings you great health, joy, and fulfillment. Thank you for being such a motivating leader and guiding us to grow stronger in our tech journey.`,
            avatar: 'MS',
        },
    ];

    return (
        <div className="messages-page page">
            <section className="messages-header-section">
                <div className="container">
                    <div className="header-decoration">
                        <div className="header-line"></div>
                        <h1 className="page-title">Birthday Wishes</h1>
                        <div className="header-line"></div>
                    </div>
                    <p className="page-subtitle">Heartfelt messages from your amazing team</p>
                </div>
            </section>

            <section className="messages-content">
                <div className="container">
                    <div className="messages-grid">
                        {messages.map((msg, index) => (
                            <div key={msg.id} className="message-card" style={{ animationDelay: `${index * 0.1}s` }}>
                                <div className="message-header">
                                    <div className="message-avatar">{msg.avatar}</div>
                                    <div className="message-author">
                                        <h4 className="author-name">{msg.name}</h4>
                                        <p className="author-role">{msg.role}</p>
                                    </div>
                                </div>
                                <div className="message-content">
                                    <p className="message-text">"{msg.message}"</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="messages-note">
                        <div className="note-content">
                            <h3>Customize Messages</h3>
                            <p>
                                Edit <code>src/pages/Messages.tsx</code> to add personalized birthday wishes from your team members.
                            </p>
                            <div className="note-example">
                                <strong>Message Structure:</strong>
                                <code>{`{
  id: 1,
  name: 'John Doe',
  role: 'Senior Engineer',
  message: 'Your birthday message here...',
  avatar: '👨‍💻' // Choose an emoji or use image URL
}`}</code>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Messages;

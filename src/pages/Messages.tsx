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
            message: 'Warmest birthday wishes to the best Chief Architect! Your vision and technical expertise inspire us daily. Have a wonderful celebration.',
            avatar: 'RH',
        },
        {
            id: 2,
            name: 'Akshay Vhatkar',
            role: 'Mobile Developer',
            message: 'Happy Birthday! Thank you for creating such a positive work environment and always pushing us to excel. Have an amazing day.',
            avatar: 'AV',
        },
        {
            id: 3,
            name: 'Bhagya Bijlaney',
            role: 'Software Developer',
            message: 'Wishing you a very happy birthday! Your dedication and passion for technology inspire us all. May this year bring you joy and success.',
            avatar: 'BB',
        },
        {
            id: 4,
            name: 'Nishant Satare',
            role: 'Product Manager',
            message: 'Happy Birthday, Naofumi! Your strategic thinking and collaborative approach make every project a success. Enjoy your special day.',
            avatar: 'NS',
        },
        {
            id: 5,
            name: 'Kaushik Nippanikar',
            role: 'Senior Software Engineer',
            message: 'Happy Birthday, Naofumi! Thank you for being an amazing mentor and leader. Wishing you all the best. Hope you are getting what you order these days.',
            avatar: 'KN',
        },
        {
            id: 6,
            name: 'Vighnesha Gharat',
            role: 'Developer',
            message: 'Happy Birthday! Working with you has been an incredible learning experience. Thank you for always being supportive and encouraging.',
            avatar: 'VG',
        },
        {
            id: 7,
            name: 'Kunal Bhatia',
            role: 'Software Developer',
            message: 'Happy Birthday, Naofumi! Wishing you a great year ahead—always enjoy your humor and insights- Keep Smiling!',
            avatar: 'KB',
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

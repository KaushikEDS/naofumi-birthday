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
            name: 'Team Member 1',
            role: 'Software Engineer',
            message: 'Happy Birthday, Naofumi! Thank you for being an amazing mentor and leader. Your guidance has helped me grow tremendously. Wishing you all the best.',
            avatar: 'TM',
        },
        {
            id: 2,
            name: 'Team Member 2',
            role: 'Senior Developer',
            message: 'Warmest birthday wishes to the best Chief Architect! Your vision and technical expertise inspire us daily. Have a wonderful celebration.',
            avatar: 'TM',
        },
        {
            id: 3,
            name: 'Team Member 3',
            role: 'Developer',
            message: 'Happy Birthday! Working with you has been an incredible learning experience. Thank you for always being supportive and encouraging.',
            avatar: 'TM',
        },
        {
            id: 4,
            name: 'Team Member 4',
            role: 'Junior Developer',
            message: 'Wishing you a fantastic birthday! Your leadership and technical knowledge never cease to amaze me. Cheers to another great year.',
            avatar: 'TM',
        },
        {
            id: 5,
            name: 'Team Member 5',
            role: 'QA Engineer',
            message: 'Happy Birthday! Thank you for creating such a positive work environment and always pushing us to excel. Have an amazing day.',
            avatar: 'TM',
        },
        {
            id: 6,
            name: 'Team Member 6',
            role: 'DevOps Engineer',
            message: 'Wishing you a very happy birthday! Your dedication and passion for technology inspire us all. May this year bring you joy and success.',
            avatar: 'TM',
        },
        {
            id: 7,
            name: 'Team Member 7',
            role: 'Product Manager',
            message: 'Happy Birthday, Naofumi! Your strategic thinking and collaborative approach make every project a success. Enjoy your special day.',
            avatar: 'TM',
        },
        {
            id: 8,
            name: 'Team Member 8',
            role: 'UI/UX Designer',
            message: 'Warmest wishes on your birthday! Your attention to detail and creative problem-solving always inspire the team. Have a great one.',
            avatar: 'TM',
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
